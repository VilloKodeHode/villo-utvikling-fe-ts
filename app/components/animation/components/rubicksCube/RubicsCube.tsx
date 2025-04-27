
"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
}

function RubicksCubeLoaded({ url }: { url: string }) {
  const wrapper = useRef<THREE.Group>(null!)
  const gltf = useGLTF(url) as unknown as GLTFResult
  const { scene } = gltf

  const [cubelets, setCubelets] = useState<THREE.Group[]>([])
  const [topFace, setTopFace] = useState<THREE.Group | null>(null)

  useEffect(() => {
    const worldPos = new THREE.Vector3()
    const coords: { x: number; y: number; z: number; name: string }[] = []
  
    // 1) collect every Mesh under the scene
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.getWorldPosition(worldPos)
        coords.push({
          x: parseFloat(worldPos.x.toFixed(3)),
          y: parseFloat(worldPos.y.toFixed(3)),
          z: parseFloat(worldPos.z.toFixed(3)),
          name: obj.name || "<unnamed>",
        })
      }
    })
  
    console.log("Total mesh instances:", coords.length)
  
    // 2) dedupe by position
    const keySet = new Set(coords.map((c) => `${c.x},${c.y},${c.z}`))
    const unique = Array.from(keySet).map((key) => {
      const [x, y, z] = key.split(",").map(Number)
      return { x, y, z }
    })
  
    console.log("Unique mesh positions:", unique.length)
    console.table(unique)
  }, [scene])
  

  // STEP 1: Build one pivot per cubelet by grid-snapping every mesh
  useEffect(() => {
    const worldPos = new THREE.Vector3()
    const meshes: THREE.Mesh[] = []

    scene.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        meshes.push(o)
      }
    })
    // get rounded grid coords
    const coords = meshes.map((m) => {
      m.getWorldPosition(worldPos)
      return {
        x: parseFloat(worldPos.x.toFixed(3)),
        y: parseFloat(worldPos.y.toFixed(3)),
        z: parseFloat(worldPos.z.toFixed(3)),
        mesh: m,
      }
    })

    // discover grid spacing
    const uniq = (arr: number[]) => Array.from(new Set(arr)).sort((a,b)=>a-b)
    const xs = uniq(coords.map((c) => c.x))
    const ys = uniq(coords.map((c) => c.y))
    const zs = uniq(coords.map((c) => c.z))
    const dx = xs[1] - xs[0]
    const dy = ys[1] - ys[0]
    const dz = zs[1] - zs[0]

    const pivotMap = new Map<string, THREE.Group>()
    coords.forEach(({ x,y,z,mesh }) => {
      const px = Math.round(x / dx) * dx
      const py = Math.round(y / dy) * dy
      const pz = Math.round(z / dz) * dz
      const key = `${px}_${py}_${pz}`

      let pivot = pivotMap.get(key)
      if (!pivot) {
        pivot = new THREE.Group()
        pivot.position.set(px, py, pz)
        wrapper.current.add(pivot)
        pivotMap.set(key, pivot)
      }

      pivot.add(mesh)
      mesh.position.set(0, 0, 0)
    })

    const pivots = Array.from(pivotMap.values())
    console.log('✅ pivots:', pivots.length)  // should be 27!
    setCubelets(pivots)
  }, [scene])

  // STEP 2: Once we have 27 cubelets, carve out the top-face
  useEffect(() => {
    if (cubelets.length !== 27) return

    const zs = [...new Set(cubelets.map((c) => +c.position.z.toFixed(3)))].sort(
      (a, b) => a - b
    )
    const bottomZ = zs[0], middleZ = zs[1], topZ = zs[2]
    const threshold = middleZ + (topZ - middleZ) / 2

    const faceGroup = new THREE.Group()
    faceGroup.position.set(0, 0, topZ)
    wrapper.current.add(faceGroup)

    cubelets.forEach((c) => {
      if (c.position.z > threshold) faceGroup.attach(c)
    })

    console.log('top-face count:', faceGroup.children.length) // should be 9
    setTopFace(faceGroup)
  }, [cubelets])

  // STEP 3: Rotate that top-face around Z
  useFrame((_, delta) => {
    if (topFace) topFace.rotation.z += delta
  })

  return <group ref={wrapper} />
}


export default function RubicksCubeScene() {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    if (typeof window !== 'undefined')
      setUrl(`${window.location.origin}/models/rubikscube.glb`)
  }, [])
  if (!url) return null

  return (
    <div className="h-screen w-screen">
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight castShadow position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RubicksCubeLoaded url={url} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

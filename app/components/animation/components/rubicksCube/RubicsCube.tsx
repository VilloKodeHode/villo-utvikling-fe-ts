"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { Group, Mesh, Vector3 } from "three"; // ✅ selective import
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>;
};

function RubicksCubeLoaded({ url }: { url: string }) {
  const wrapper = useRef<Group>(null!);
  const gltf = useGLTF(url) as unknown as GLTFResult;
  const { scene } = gltf;

  const [cubelets, setCubelets] = useState<Group[]>([]);
  const [topFace, setTopFace] = useState<Group | null>(null);

  useEffect(() => {
    const worldPos = new Vector3();
    const coords: { x: number; y: number; z: number; name: string }[] = [];

    scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.getWorldPosition(worldPos);
        coords.push({
          x: parseFloat(worldPos.x.toFixed(3)),
          y: parseFloat(worldPos.y.toFixed(3)),
          z: parseFloat(worldPos.z.toFixed(3)),
          name: obj.name || "<unnamed>",
        });
      }
    });

    console.log("Total mesh instances:", coords.length);

    const keySet = new Set(coords.map((c) => `${c.x},${c.y},${c.z}`));
    const unique = Array.from(keySet).map((key) => {
      const [x, y, z] = key.split(",").map(Number);
      return { x, y, z };
    });

    console.log("Unique mesh positions:", unique.length);
    console.table(unique);
  }, [scene]);

  useEffect(() => {
    const worldPos = new Vector3();
    const meshes: Mesh[] = [];

    scene.traverse((o) => {
      if (o instanceof Mesh) {
        meshes.push(o);
      }
    });

    const coords = meshes.map((m) => {
      m.getWorldPosition(worldPos);
      return {
        x: parseFloat(worldPos.x.toFixed(3)),
        y: parseFloat(worldPos.y.toFixed(3)),
        z: parseFloat(worldPos.z.toFixed(3)),
        mesh: m,
      };
    });

    const uniq = (arr: number[]) =>
      Array.from(new Set(arr)).sort((a, b) => a - b);
    const xs = uniq(coords.map((c) => c.x));
    const ys = uniq(coords.map((c) => c.y));
    const zs = uniq(coords.map((c) => c.z));
    const dx = xs[1] - xs[0];
    const dy = ys[1] - ys[0];
    const dz = zs[1] - zs[0];

    const pivotMap = new Map<string, Group>();
    coords.forEach(({ x, y, z, mesh }) => {
      const px = Math.round(x / dx) * dx;
      const py = Math.round(y / dy) * dy;
      const pz = Math.round(z / dz) * dz;
      const key = `${px}_${py}_${pz}`;

      let pivot = pivotMap.get(key);
      if (!pivot) {
        pivot = new Group();
        pivot.position.set(px, py, pz);
        wrapper.current.add(pivot);
        pivotMap.set(key, pivot);
      }

      pivot.add(mesh);
      mesh.position.set(0, 0, 0);
    });

    const pivots = Array.from(pivotMap.values());
    console.log("✅ pivots:", pivots.length); // should be 27!
    setCubelets(pivots);
  }, [scene]);

  useEffect(() => {
    if (cubelets.length !== 27) return;

    const zs = [...new Set(cubelets.map((c) => +c.position.z.toFixed(3)))].sort(
      (a, b) => a - b
    );
    const middleZ = zs[1],
      topZ = zs[2];
    const threshold = middleZ + (topZ - middleZ) / 2;

    const faceGroup = new Group();
    faceGroup.position.set(0, 0, topZ);
    wrapper.current.add(faceGroup);

    cubelets.forEach((c) => {
      if (c.position.z > threshold) faceGroup.attach(c);
    });

    console.log("top-face count:", faceGroup.children.length); // should be 9
    setTopFace(faceGroup);
  }, [cubelets]);

  useFrame((_, delta) => {
    if (topFace) topFace.rotation.z += delta;
  });

  return <group ref={wrapper} />;
}

export default function RubicksCubeScene() {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined")
      setUrl(`${window.location.origin}/models/rubikscube.glb`);
  }, []);
  if (!url) return null;

  return (
    <div className="h-screen w-screen">
      <Canvas
        shadows
        camera={{ position: [8, 8, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <RubicksCubeLoaded url={url} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

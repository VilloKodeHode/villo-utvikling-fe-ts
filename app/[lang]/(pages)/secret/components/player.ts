import * as THREE from "three";


export const createPlayer = () => {
    const player = new THREE.Group();

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(15,15,20),
        new THREE.MeshLambertMaterial({ color: "white"})
    )
    body.position.z = 10;
    player.add(body);

    return player
};




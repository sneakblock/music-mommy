let uniforms = {
    frequencies: {type: [], value: []},
    n_val: {type: 'float', value: 1.0}
}

// const textureLoader = new THREE.TextureLoader();
// const text = textureLoader.load("/textures/texture1.jpg");

const planeGeometry = new THREE.PlaneGeometry(64, 64, 64, 64);
    const planeCustomMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
        wireframe: true,
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeCustomMaterial);
    planeMesh.rotation.x = -Math.PI / 2 + Math.PI / 3.5;
    planeMesh.scale.x = 2;
    planeMesh.scale.y = 2;
    planeMesh.scale.z = 2;
    planeMesh.position.y = 8;


    // const sphereGeometry = new THREE.SphereGeometry(64, 64, 64);
    // const sphereCustomMaterial = new THREE.ShaderMaterial({
    //     uniforms: uniforms,
    //     vertexShader: document.getElementById( 'vertexShader' ).textContent,
    //     fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    //     wireframe: true,
    // });
    // const sphereMesh = new THREE.Mesh(sphereGeometry, sphereCustomMaterial);

    scene.add(planeMesh);
    // scene.add(sphereMesh);

function animate() {
    renderer.render( scene, camera );
};

animate();

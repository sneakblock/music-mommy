const objs = [];

new_circle(scene, 0.5, 30, 0xffff00);


function animate() {
    requestAnimationFrame( animate );

    for (const o of objs) {
        // o.rotation.x += spectrum[spectrum.length / 2]/800;
        o.rotation.y += spectrum[spectrum.length / 2]/800;
        // o.scale.x *= spectrum[0]/20;
        // o.scale.y *= spectrum[0]/20;
    }

    // for (i = 0; i < spectrum.length; i++) {
    //     console.log(spectrum[0]);
    // }

    renderer.render( scene, camera );
};

function new_circle(scene, radius, segments, color) {
    const geometry = new THREE.CircleGeometry(radius, segments);
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
    objs.push(circle);
}


animate();

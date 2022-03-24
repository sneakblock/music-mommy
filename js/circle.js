const objs = [];

new_circle(scene, 0.5, 30, 0xffff00);


function animate() {
    requestAnimationFrame( animate );

    for (const o of objs) {
        o.rotation.x += 0.01;
        o.rotation.y += 0.01;
    }

    renderer.render( scene, camera );
};

function new_circle(scene, radius, segments, color) {
    const geometry = new THREE.CircleGeometry(radius, segments);
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const circle = new THREE.Mesh( geometry, material );
    scene.add(circle);
    objs.push(circle);
}


animate();

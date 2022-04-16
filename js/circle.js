const objs = [];

//new_circle(scene, 0.25, 40, 0xdb7093);
new_circle(scene, 1.5, 40, 0xdb7093, 0, 0);
for (let i = 0; i < 6; i++) {
    let angle = i * 60;
    new_circle(scene, 0.5, 30, 0xCF9FFF, 40, angle);
    for (let j = 0; j < 6; j++) {
        let angle = j * 60;
        new_circle(scene, 0.25, 20, 0xA7C7E7, 60, angle);
    }
}


function animate() {
    requestAnimationFrame( animate );


    for (let i = 0; i < objs.length; i++) {

        if (i == 0) {
            objs[i].scale.x = spectrum[freqVal] * 0.1;
            objs[i].scale.y = spectrum[freqVal] * 0.1;
        } else {
            let freqInd = freqVal - 10;
            if (freqVal <= 10) {
                freqInd = 5;
            }
            objs[i].scale.x = spectrum[freqInd] * 0.1;
            objs[i].scale.y = spectrum[freqInd] * 0.1;
        }
    }

    renderer.render( scene, camera );
};

function new_circle(scene, radius, segments, color, d, angle) {
    const geometry = new THREE.CircleGeometry(radius, segments);
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const circle = new THREE.Mesh(geometry, material);

    let rad = angle * (Math.PI / 180);
    circle.position.x = d * Math.cos(rad);
    circle.position.y = d * Math.sin(rad);
    scene.add(circle);
    objs.push(circle);
}


animate();

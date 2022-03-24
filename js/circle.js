const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight / 2), 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight / 2 );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;



new_circle(scene, 0.5, 30, 0xffff00);


function animate() {
    //requestAnimationFrame( animate );


    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

function new_circle(scene, radius, segments, color) {
    const geometry = new THREE.CircleGeometry(radius, segments);
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const circle = new THREE.Mesh( geometry, material );
    scene.add(circle);
}


animate();

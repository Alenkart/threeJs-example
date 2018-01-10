const canvas = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true
});

renderer.setClearColor(0x00ff00);

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devivePixeRatio);

const camara = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

const material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

const box = new THREE.BoxGeometry(100, 100, 100);
const mesh = new THREE.Mesh(box, material);
mesh.position.set(0, 0, -1000);
scene.add(mesh);

const box2 = new THREE.BoxGeometry(100, 50, 100);
const mesh2 = new THREE.Mesh(box2, material);
mesh2.position.set(-200, 0, -1000);
scene.add(mesh2);

const sphere = new THREE.SphereGeometry(50, 10);
const mesh3 = new THREE.Mesh(sphere, material);
mesh3.position.set(200, 0, -1000);
scene.add(mesh3);

let delta = 0;
function update() {
	delta += 0.10;
	const move = -25 + Math.sin(delta) * 10;
	mesh3.rotation.x += 0.05;
	mesh2.rotation.x += 0.05;
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	box.vertices[0].x = move;
	box.vertices[1].x = move;
	box.vertices[2].y = move;
	box.vertices[3].y = move;
	box.vertices[3].x = move;
	box.verticesNeedUpdate = true;
}

function render() {
	update();
	renderer.render(scene, camara);
	requestAnimationFrame(render);
}

render();
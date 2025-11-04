import * as THREE from "three";

// 3 things renderer, camera, scene object

// set size of renderer
const w = window.innerWidth;
const h = window.innerHeight;

// set up the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

// append to canvas element the DOM
document.body.appendChild(renderer.domElement);

// set up the camera
const fov = 75; //75 degrees
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2; // scootch the camera back a little

// set up the scene
const scene = new THREE.Scene();

// render the scene
renderer.render(scene, camera)

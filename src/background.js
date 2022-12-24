
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import gsap from 'gsap'

const raycaster = new THREE.Raycaster();
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer();

export const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(-0.7278575092282116, -8.496655387373522, 3.974732456635354)
controls.update();



console.log(scene);
console.log(camera);
console.log(renderer);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);
// renderer.domElement.style['position'] = 'sticky';
// renderer.domElement.style['top'] = 0;

const light1 = new THREE.DirectionalLight(0xFF77DD, 1);
light1.position.set(0, 0, 5);
const light2 = new THREE.DirectionalLight(0xFF77DD, 1);
light2.position.set(0, 0, -5);
scene.add(light1)
scene.add(light2)


const planeGeometry = new THREE.PlaneGeometry(300, 300, 182, 188);
const planeMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, flatShading: true, vertexColors: true });
export const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// planeMesh.rotation.set(0,0,2.398999999999847);
scene.add(planeMesh);

const gui = new dat.GUI();
const world = {
  plane: {
    width: 300,
    height: 300,
    widthSegments: 182,
    heightSegments: 188,
    cameraPositionX : -0.7278575092282116,
    cameraPositionY : -8.496655387373522,
    cameraPositionZ : 3.974732456635354,
    cameraRotationX : 0,
    cameraRotationY : 0,
    cameraRotationZ : 0,
    planeMeshPositionX : planeMesh.position.x,
    planeMeshPositionY : planeMesh.position.y,
    planeMeshPositionZ : planeMesh.position.z,
    planeMeshRotationX : planeMesh.rotation.x,
    planeMeshRotationY : planeMesh.rotation.y,
    planeMeshRotationZ : planeMesh.rotation.z,
  }
}

console.log(world.cameraPositionX)

gui.add(world.plane, 'width', 1, 500).onChange(generatePlane)
gui.add(world.plane, 'height', 1, 500).onChange(generatePlane)
gui.add(world.plane, 'widthSegments', 1, 500).onChange(generatePlane)
gui.add(world.plane, 'heightSegments', 1, 500).onChange(generatePlane)
gui.add(world.plane, 'cameraPositionX', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'cameraPositionY', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'cameraPositionZ', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'cameraRotationX', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'cameraRotationY', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'cameraRotationZ', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshRotationX', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshRotationY', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshRotationZ', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshPositionX', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshPositionY', -200, 200).onChange(generatePlane)
gui.add(world.plane, 'planeMeshPositionZ', -200, 200).onChange(generatePlane)


function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments);

  const { array } = planeMesh.geometry.attributes.position;
  const randomValues = []
  
  for (let i = 0; i < array.length; i ++) {
    if(i%3 === 0)
    {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
  
      array[i] = x + Math.random(0, 0.1) - 0.1;
      array[i+1] = y + Math.random(0, 0.1) - 0.1;
      array[i + 2] = z + Math.random(0, 0.2);
    }
  
    randomValues.push(Math.random() - 0.5)
  }
  
  planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;
  planeMesh.geometry.attributes.position.randomValues = randomValues;
  
  const colors = []
  for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0, 0);
  }
  
  console.log(colors)
  
  planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))

  camera.position.set( world.plane.cameraPositionX, world.plane.cameraPositionY, world.plane.cameraPositionZ);
  controls.update()

  camera.rotation.set(world.plane.cameraRotationX, world.plane.cameraRotationY, world.plane.cameraRotationZ);
  controls.update()

  planeMesh.rotation.set(world.plane.planeMeshRotationX,world.plane.planeMeshRotationY, world.plane.planeMeshRotationZ );
  planeMesh.position.set(world.plane.planeMeshPositionX, world.plane.planeMeshPositionY, world.plane.planeMeshPositionZ);
  controls.update()

}



const { array } = planeMesh.geometry.attributes.position;
const randomValues = []

for (let i = 0; i < array.length; i ++) {
  if(i%3 === 0)
  {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i] = x + Math.random(0, 0.1) - 0.1;
    array[i+1] = y + Math.random(0, 0.1) - 0.1;
    array[i + 2] = z + Math.random(0, 0.2);
  }

  randomValues.push(Math.random() - 0.5)
}

planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;
planeMesh.geometry.attributes.position.randomValues = randomValues;

const colors = []
for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
  colors.push(0, 0, 0);
}

// console.log(colors)

planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))

const mouse = { x: undefined, y: undefined };

let frame = 0;

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(planeMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes
    color.needsUpdate = true;

    const initialColor = { r: 0, g: 0, b: 0 };
    const hoverColor = { r: 0.6, g: 0.6, b: 0.6 };

    gsap.to(hoverColor, {
      r: initialColor.r,
      b: initialColor.b,
      g: initialColor.g,
      duration: 1,
      onUpdate: () => {
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
      }
    })

  }

    planeMesh.geometry.attributes.position.needsUpdate = true;

    frame += 0.01;
    for(let i = 0; i < planeMesh.geometry.attributes.position.array.length; i+= 3)
    {
      array[i] = planeMesh.geometry.attributes.position.originalPosition[i] 
      + Math.cos(frame + planeMesh.geometry.attributes.position.randomValues[i])*0.003;
      array[i+1] = planeMesh.geometry.attributes.position.originalPosition[i+1] 
      + Math.cos(frame + planeMesh.geometry.attributes.position.randomValues[i+1])*0.003;
      array[i+2] = planeMesh.geometry.attributes.position.originalPosition[i+2] 
      + Math.cos(frame + planeMesh.geometry.attributes.position.randomValues[i+2])*0.003;
    }


  planeMesh.rotation.z += 0.0005;
}


animate()

setInterval(() => 
{
  console.log(camera.position);
  console.log(camera.rotation);
},1000);

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * (-2) + 1;
})


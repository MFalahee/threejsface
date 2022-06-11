import {Canvas, useFrame, useThree} from '@react-three/fiber';
import * as Re from 'react';
import * as THREE from 'three';
import Model from './faceModelGLTF';



import './App.css';
import { CameraShake } from '@react-three/drei';
import { Color, RGB_ETC1_Format } from 'three';

function App() {
  // const [mousePos, setMousePos] = Re.useState({x: 0, y: 0});
  // const [inWindow, setInWindow] = Re.useState(false);
  const cubesRef = Re.useRef([]);


  // document.addEventListener('mousemove', (e) => {
  //   if (inWindow) {
  //   setMousePos({x: e.clientX, y: e.clientY});
  //   }
  // })

//   function Rig() {
//     const { camera, mouse, scene } = useThree();
//     const vec = new THREE.Vector3()
//     return useFrame(() => camera.position.lerp(vec.set(camera.position.x, mouse.y * 1, mouse.x * 3), 0.02))
//     }
// document.addEventListener('mousemove', (e) => {
//     setMousePos({x: e.clientX, y: e.clientY});
// })
  function Controller () {
    const { camera, mouse, scene } = useThree();

    document.addEventListener('mousewheel', (e) => { 
      console.log('current camera position: ', camera.position.x);
      // -x is forward, +x is backward
      if (e.deltaY > 0) {
        camera.position.x += 1;
      }
      else {
        camera.position.x -= 1;
      }


    })
    const vec = new THREE.Vector3();
    return useFrame(() => {
      camera.position.lerp(vec.set( camera.position.x, mouse.y * 3,  mouse.x * 5), 0.9)
    })
  }

  function generateCache(count) {
    const cache = new Array(count);
    for (let i = 0; i < count; i++) {
      let index = i;
      let x, y, z; 
      x = Math.floor(Math.random() * (200 - -200 + 1)) + -200;
      y = Math.floor(Math.random() * (200 - -200 + 1)) + -200;
      z = Math.floor(Math.random() * (200 - -200 + 1)) + -200;
      //create random rotation in range [0, 0, 0] to [360, 360, 360]
      let rx, ry, rz;
      rx = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
      ry = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
      rz = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
      //create random scale in range [0.1, 0.1, 0.1] to [1, 1, 1]
        let sx, sy, sz;
        sx = Math.floor(Math.random() * (1 - 0.1 + 1)) + 0.1;
      //create random color in range [0, 0, 0] to [1, 1, 1]
      let r, g, b;
      r = Math.random()
      g = Math.random()
      b = Math.random()
      let color = new Color(r, g, b);
      let position = [x,y,z]
      let rotation = [rx,ry,rz]
      let scale = {x:sx, y:sy, z:sz}
      cache.push({
        index,
        position,
        rotation,
        scale,
        color
      })
    }
    return cache;
  }
  function Cube(props) {
    const ref = Re.useRef();
    // if (props.cache) {
    // console.log(props.cache)
    // }
    let {position, scale, rotation, color} = props.cache;
    useFrame(() => {
      ref.current.rotation.x += (rotation[0] * 0.0001);
      ref.current.rotation.y += (rotation[1] * 0.0001);
      ref.current.rotation.z += (rotation[2] * 0.0001);
    }, [])
    return (
      <mesh ref={ref} position={position} scale={[scale.x, scale.x, scale.x]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={color} metalness={0.1}/>
      </mesh>
    )
  }

  function Cubes(props) {
    const { scene } = useThree();
    if (scene) {
      return(
          props.cache.map((ele, i) => {
            return (<Cube key={i} cache={props.cache[i]} />)
          })
        )
    } 
  }

  function onWheelHandler(e) {
    console.log(e)
  }

  const cubecache= generateCache(1000);
  return (
    <div className="app-wrapper">
      <Canvas
            camera={{
              fov: 100,
              position: [1000, 0, 0],
              near: 0.1,
              far: 10000,
            }}
            antialias= {0}
            width= {window.innerWidth}
            height= {window.innerHeight}
      >
        <group ref={cubesRef} scale={5} dispose={null} >
          <Cubes cache={cubecache} />
        </group>
        <ambientLight intensity={0.5}/>
        <Controller />
       </Canvas>
    </div>
  );
}

export default App;


      {/* <mesh 
        ref={thisMesh} 
        dispose={null}
        onPointerEnter={()=> {
          thisMesh.current.material.color.setHex(0xFF0000);
                }}
        onPointerLeave={()=> {
          thisMesh.current.material.color.setHex(0xFFFFFF);
        }}
        rotation={[-1, 1, 0]}
        position={[0, 0, 0]}
        >
          <boxBufferGeometry 
            attach="geometry" 
            args={[10, 10, 10]}/>
          <meshStandardMaterial attach="material" color="white" />
        </mesh> */}
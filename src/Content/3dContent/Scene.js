import { Canvas } from "@react-three/fiber";
import {
  Environment
} from "@react-three/drei";
import { Model } from "../Model";






export default function Scene3d() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0,2.5], fov:50,zoom:1, near: 1,far: 1000, aspect:.5}}
      style={{
        width: "100%",
        height: "100%",

      }}
    >

      <Environment
        files={"/myPortfolio/studio.hdr"}
        near={1}
        far={50}
        resolution={50}
        />
     
      <ambientLight intensity={0.5}  />

       <mesh
      
       position={[0, -1.1, 0]}
       castShadow
       receiveShadow
       scale={.7}
       >
        
      <Model/>
      </mesh>
    </Canvas>
  );
}

export const balls = [
  {
    score: 2,
    label: "CSS3",
    textData: {
      positionX: -18,
      rotation: [0, 8.5, 0],
      color: "#005275",
    },
    meshData: {
      color: "#27A0D4",
      distort: 0.4,
    },
    shpereData: {
      position: [0, 0, 5],
      rotation: [0, 4.1, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "JavaScript",
    textData: {
      positionX: -32,
      rotation: [0, 9.5, 0],
      color: "#857501",
    },
    meshData: {
      color: "#F7DF1E",
      distort: 0.4,
    },
    shpereData: {
      position: [-15, -9, 0],
      // rotation: [0, 4.1, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "ReactNative",
    textData: {
      positionX: -40,
      rotation: [0, 9.5, 0],
      color: "#017291",
    },
    meshData: {
      color: "#27A0D4",
      distort: 0.4,
    },
    shpereData: {
      position: [-15, -6, 0],
      rotation: [0, 1.5, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "REACTJS",
    textData: {
      positionX: -30,
      rotation: [0, 9.5, 0],
      color: "#00458a",
    },
    meshData: {
      color: "rgb(0, 127, 255)",
      distort: 0.4,
    },
    shpereData: {
      positionX: -18,
      rotation: [0, 1.5, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "FIGMA",
    textData: {
      positionX: -18,
      rotation: [0, 9.5, 0],
      color: "#5704c2",
    },
    meshData: {
      color: "#A259FF",
      distort: 0.4,
    },
    shpereData: {
      position: [-15, 0, 0],
      rotation: [0, 4.7, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "HTML5",
    textData: {
      positionX: -18,
      rotation: [0, 9.5, 0],
      color: "#9c2200",
    },
    meshData: {
      color: "#e54c21",
      distort: 0.4,
    },
    shpereData: {
      position: [-15, 3, 0],
      rotation: [0, 4.1, 0],
      scale: 0.7,
    },
  },
  {
    score: 2,
    label: "THREEJS",
    textData: {
      positionX: -30,
      rotation: [0, 9.5, 0],
      color: "#2d09b5",
    },
    meshData: {
      color: "#7A59F9",
      distort: 0.4,
    },
    shpereData: {
      position: [-15, 9, 0],
      rotation: [0, 4.7, 0],
      scale: 0.7,
    },
  },
];

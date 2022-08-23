import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Physics,
  usePlane,
  useBox,
  useSphere,
  useConeTwistConstraint,
  useDistanceConstraint,
  useLockConstraint,
  useHingeConstraint,
  useSpring,
  usePointToPointConstraint,
} from "@react-three/cannon";
// import font from "../../assets/fonts/Overpass-Black.ttf";
import Myfont from "../../assets/fonts/OverpassJson.json";

import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import * as THREE from "three";
import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Text,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Model } from "../Model";

const fontProps = {
  //   font: font,
  //   fontSize: 0.6,
  //   height: 5,
  //   size: 50,
  //   // letterSpacing: -0.05,
  //   lineHeight: 1,
  //   color: "black",
  //   castShadow: true,
  //   // receiveShadow: true,
  //   outlineWidth: 0.1,
  //   outlineColor: "#fff",
  //   "material-toneMapped": false,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 80,
  bevelSize: 90,
  bevelOffset: 90,
  bevelSegments: 90,
};

function Plane(props) {
  const [ref, api] = usePlane(() => ({
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    args: [5, 5],
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow scale={1}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial side={THREE.DoubleSide} color="#fff" />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({
    mass: 10,
    position: [0, 0, 0],
    ...props,
    type: "Static",
  }));
  return (
    <mesh ref={ref} castShadow={true}>
      <boxGeometry />
      <meshStandardMaterial color={"blue"} side={THREE.DoubleSide} />
    </mesh>
  );
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const Marbel = (props) => {
  let i = 0;
  const rate = 0.08;
  const [active, setactive] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [langsState, setlangsState] = useState(0);

  const [ref, api] = useSphere(() => ({
    mass: 10,
    type: "Kinematic",
    position: [0, 2, 0],
    args: [1],
    ...props,
  }));

  const [leftEye, leApi] = useSphere(() => ({
    mass: 10,
    // type: "Static",
    args: [0.2],
    position: [0.2, 0.2, 1],
  }));
  const [cube, cubeApi] = useBox(() => ({
    mass: 10,
    // type: "Static",
    position: [-0.35, 0, 0],
  }));

  useFrame(({ mouse: { x, y }, viewport: { width, height } }, delta) => {
    // api.rotation.set(mouse.y * 0.07, 0, 0);
    // api.position.set(mouse.x*10, mouse.y*10, 0);
    if (mouseDown) api.position.set((x * width) / 2, (y * height) / 2, 0);
    // reApi.rotation.set(rightEye.current.position.x + mouse.x, rightEye.current.position.y + mouse.y, 0);
    // leApi.rotation.set(leftEye.current.position.x + mouse.x *.2, leftEye.current.position.y + mouse.y *.2, 0);
    if (active && i >= -Math.PI * 2) {
      api.rotation.set(0, i - rate, 0);
      i = i - rate;
      //   console.log("active => ", i);
      if (i < -Math.PI * 2) setactive(!active);
    }
  });

  useConeTwistConstraint(ref, cube, {
    angle: 0,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    twistAngle: 0,
    // maxMultiplier:0,
    pivotA: [0, 0, 2],
    pivotB: [0, 0, 0],
  });
  useLockConstraint(ref, leftEye, {
    angle: 90,
    axisA: [0, 0, 0],
    axisB: [0, 0, 0],
    twistAngle: 0,
    // maxMultiplier:0,
    pivotA: [0, 0, 0],
    pivotB: [0, 0, 0],
  });

  const animate = () => {
    if (i === 0) {
      setlangsState((langsState) =>
        langsState < balls.length - 1 ? langsState + 1 : 0
      );
      setactive(!active);
      console.log(langsState);
    }
  };

  return (
    <>
      <mesh
        castShadow
        ref={ref}
        scale={1}
        // onClick={animate}
        receiveShadow
        onPointerDown={() => setMouseDown(true)}
        onPointerUp={() => setMouseDown(false)}
      >
        <sphereBufferGeometry
          attach={"geometry"}
          args={[1, 32, 32]}
        ></sphereBufferGeometry>
        <MeshDistortMaterial
          color={balls[langsState].meshData.color}
          transmission={0}
          distort={0}
          roughness={.5}
          thickness={1}
          reflectivity={0}
        />
      </mesh>
      {/* <mesh ref={cube} castShadow={true}>
        <boxGeometry />
        <meshPhysicalMaterial color={"#fff"} transmission={1} roughness={0} opacity={0} thickness={0} reflectivity={0} />
      </mesh> */}
{/* 
      <TextHanadler langsState={langsState} cube={cube} />
      <InnerBall innerBallRef={leftEye} /> */}
      {/* <InnerBall innerBallRef={leftEye} /> */}
    </>
  );
};

const TextHanadler = ({ langsState, cube }) => {
  extend({ TextGeometry });
  const font = new FontLoader().parse(Myfont);

  return (
    <mesh
      position={[-0.35, 0, 0]}
      scale={0.02}
      rotation={[0, 0, 0]}
      castShadow
      ref={cube}
    >
      <textGeometry
        args={[balls[langsState].label, { font, size: 10, height: 2.5 }]}
        textAlign="center"
        {...fontProps}
      />

      <meshPhysicalMaterial
        transmission={0}
        roughness={1}
        thickness={1}
        color={balls[langsState].textData.color}
      />
    </mesh>
  );
};

const InnerBall = (props) => {
  return (
    <mesh castShadow ref={props.innerBallRef} scale={1}>
      <sphereBufferGeometry
        attach={"geometry"}
        args={[0.2, 32, 32]}
      ></sphereBufferGeometry>
      <MeshDistortMaterial
        color={"black"}
        transmission={0}
        distort={0.3}
        roughness={0.9}
        thickness={1}
      />
    </mesh>
  );
};

export default function Scene3d() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0,2.5], fov:50,zoom:1, near: 1,far: 1000, aspect:.5}}
      style={{
        // display:'flex',
        width: "100%",
        height: "100%",

      }}
    >

      <Environment
        files={"/myPortfolio/studio.hdr"}
        // background
        near={1}
        far={50}
        resolution={50}
        />
      {/* <OrbitControls autoRotate={true} /> */}
      {/* <fog attach={"fog"} args={["#4287f5", 0, 9]} /> */}
      <ambientLight intensity={0.5}  />
      {/* <hemisphereLight intensity={0.2} />
      <directionalLight intensity={0.2} position={[2, -2, 0]} castShadow />
      <directionalLight intensity={0.2} position={[-2, -2, 0]} castShadow />
      <directionalLight intensity={0.2} position={[0, 0, 2]} castShadow />
      <pointLight
      castShadow
      intensity={0.2}
      args={["red", 1, 100]}
      position={[0, 1, 1]}
    /> */}
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

const langs = ["React", "Three", "Css"];
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

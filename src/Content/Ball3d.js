import {
  Physics,
  useBox,
  useConvexPolyhedron,
  useCylinder,
  usePlane,
  useSphere,
} from "@react-three/cannon";
import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import * as THREE from "three";
import { ConeGeometry, Mesh } from "three";
import { Geometry } from "three-stdlib/deprecated/Geometry";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Myfont from "../assets/fonts/OverpassJson.json";

const fontProps = {
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 80,
  bevelSize: 90,
  bevelOffset: 90,
  bevelSegments: 90,
};

function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    [],
  ];
}

function Diamond({ position, rotation }) {
  const {
    nodes: {
      Cylinder: { geometry },
    },
  } = useLoader(GLTFLoader, "/myPortfolio/diamond.glb");
  const args = useMemo(() => toConvexProps(geometry), [geometry]);
  const [ref, api] = useConvexPolyhedron(
    () => ({ args, mass: 100, position, rotation, type: "Static" }),
    useRef < Mesh > null
  );

  useFrame(({ clock, mouse }) => {
    api.rotation.set(0, clock.getElapsedTime(), 0);
    api.position.set(position[0] - mouse.y *.2, position[1] - mouse.x *.2, position[2]);
  });

  return (
    <mesh castShadow receiveShadow {...{ geometry, position, ref, rotation }}>
      <meshStandardMaterial color="#7A59F9" roughness={0} thickness={0} />
      <TextHanadler position={[-1, 1, 0]} label={"THREEJS"} color={"#7A59F9"} />
    </mesh>
  );
}

function Cone({ position, rotation, sides, scale, label, color, textPos }) {
  const geometry = new ConeGeometry(1, 1, sides, 1);
  const args = useMemo(() => toConvexProps(geometry), [geometry]);
  const [ref, api] = useConvexPolyhedron(
    () => ({ args, mass: 100, position, rotation, type: "Static" }),
    useRef < Mesh > null
  );
  useFrame(({ clock , mouse}) => {
    api.rotation.set(0, -clock.getElapsedTime(), 0);
    api.position.set(position[0] - mouse.y *.2, position[1] - mouse.x *.2, position[2]);
  });

  return (
    <mesh
      castShadow
      receiveShadow
      {...{ geometry, position, ref, rotation }}
      scale={scale}
    >
      <coneBufferGeometry args={[1, 1, sides, 1]} />
      <meshPhysicalMaterial
        roughness={0}
        thickness={0.5}
        side={THREE.DoubleSide}
        color={color}
      />
      <TextHanadler position={[textPos, 1.2, 0]} label={label} color={color} />
    </mesh>
  );
}
const TextHanadler = ({ label, cube, position, rotation, color }) => {
  extend({ TextGeometry });
  const font = new FontLoader().parse(Myfont);

  return (
    <mesh
      position={position}
      scale={0.15}
      rotation={rotation ? rotation : [0, 0, 0]}
      castShadow
      ref={cube}
    >
      <textGeometry
        args={[label, { font, size: 2, height: 0.5 }]}
        textAlign="center"
        
        {...fontProps}
      />

      <meshPhysicalMaterial
        transmission={0}
        roughness={0.7}
        thickness={1}
        color={color}
      />
    </mesh>
  );
};

function Pillar(props) {
  const args = [2, 0, 2, 160, 20, false];
  const [ref] = useCylinder(
    () => ({
      args,
      mass: 10,
      type: "Static",
      ...props,
    }),
    useRef < Mesh > null
  );
  return (
    <mesh ref={ref} castShadow scale={0.5}>
      <cylinderBufferGeometry args={args} />
      <MeshDistortMaterial
        color={"black"}
        transmission={0.8}
        distort={0}
        roughness={0.5}
        thickness={0.5}
      />
    </mesh>
  );
}

function Cube({ position, rotation, size }) {
  const [ref, api] = useBox(
    () => ({ mass: 100, position, rotation, type: "Static" }),
    useRef < Mesh > null
  );
  useFrame(({ clock, mouse }) => {
    api.rotation.set(0, -clock.getElapsedTime(), 0);
    api.position.set(position[0] - mouse.y *.2, position[1] - mouse.x *.2, position[2]);
  });

  return (
    <mesh castShadow receiveShadow {...{ position, ref, rotation }}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        roughness={0.7}
        thickness={1}
        side={THREE.DoubleSide}
        color="#D61C4E"
      />
      <TextHanadler
        position={[-0.65, 0.7, 0]}
        rotation={[Math.PI, -Math.PI, Math.PI]}
        label={"FIGMA"}
        color="#D61C4E"
      />
    </mesh>
  );
}
extend({ TextGeometry });
const font = new FontLoader().parse(Myfont);

const SphereObj = ({ distort, position, label, textPos, color }) => {
  const [ref, api] = useSphere((index) => ({
    args: [1],
    mass: 50,
    type: "Static",
    position,
  }));

  useFrame(({ clock, mouse }) => {
    api.rotation.set(0, clock.getElapsedTime(), 0);
    api.position.set(position[0] - mouse.y *.2, position[1] - mouse.x *.2, position[2]);

  });

  return (
    <mesh ref={ref} castShadow receiveShadow args={[undefined, undefined, 100]}>
      <sphereBufferGeometry
        attach={"geometry"}
        args={[1, 32, 32]}
      ></sphereBufferGeometry>
      <MeshDistortMaterial
        color={color}
        transmission={0}
        distort={distort ? distort : 0}
        roughness={0.5}
        thickness={1}
        reflectivity={0}
      />
      <TextHanadler position={[textPos, 1.2, 0]} label={label} color={color} />
    </mesh>
  );
};

export default () => {
  const [scroll, setscroll] = useState(0);
  const [isVisible, setisVisible] = useState(false);



  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        // position:"absolute",
        // bottom: "-40vh"
        // zIndex: -1,

      }}
    >
      <Canvas shadows gl={{ alpha: true }} camera={{ position: [-6, 1, -2] }}>
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        <Environment
          files={"/myPortfolio/studio.hdr"}
          // background
          near={1}
          far={50}
          resolution={50}
        />
        <hemisphereLight intensity={0.35} />
        {/* <spotLight
      position={[0, 2, 0]}
      color={"yellow"}
      angle={0.3}
      penumbra={1}
      intensity={4}
      castShadow
      shadow-mapSize-width={256}
      shadow-mapSize-height={256}
    /> */}
        {/* <OrbitControls /> */}
        <pointLight position={[0, 2, 0]} color={"yellow"} intensity={1} />
        {/* <OrbitControls /> */}
        <Physics gravity={[0, 0, -30]}>
          <Elements3d scroll={scroll} isVisible={isVisible} />
        </Physics>
      </Canvas>
     
    </div>
  );
};

const Elements3d = ({ scroll, isVisible }) => {
  const group = useRef();
  const { viewport } = useThree();



  return (
    <group ref={group} position={[0, 0, 0]}>
      <Cube position={[-2, 0, 2]} rotation={[0.5, 0.4, -1]} size={0.4} />
      <SphereObj
        position={[4, -1, 4]}
        label={"React Native"}
        textPos={-1.2}
        color="#6CC4A1"
      />
      <Cone
        position={[3, 0, 0]}
        rotation={[0.1, 0.2, 0]}
        sides={4}
        scale={0.9}
        label={"CSS"}
        textPos={-0.4}
        color="#27A0D4"
      />
      <Cone
        position={[5, 0, 0]}
        rotation={[0.1, 0.2, 0]}
        sides={4}
        scale={1}
        label={"HTML"}
        textPos={-0.5}
        color="#e54c21"
      />
      <Cone
        position={[6, 0, -1]}
        rotation={[0.1, 0.2, 0]}
        sides={4}
        scale={0.4}
        label={"JavaScript"}
        textPos={-1}
        color="#F7DF1E"
      />
      <SphereObj
        distort={0.4}
        position={[0, 0, -3]}
        label={"ReactJS"}
        textPos={-0.8}
        color={"#27A0D4"}
      />
      <Diamond position={[-3, -1, 0]} />
    </group>
  );
};

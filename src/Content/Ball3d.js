import { Modal } from "@mui/material";
import {
  Environment,
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
  Plane,
  Sphere,
  SpotLight,
  Text,
  useDepthBuffer,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  DirectionalLightHelper,
  MeshPhongMaterial,
  PointLightHelper,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import font from "../assets/fonts/Overpass-Black.ttf";
import JsonFont from "../assets/fonts/Overpass.json";
import ao from "../assets/imgs/texture/ao.jpg";
import arm from "../assets/imgs/texture/arm.jpg";
import map from "../assets/imgs/texture/diff.jpg";
import disp from "../assets/imgs/texture/disp.jpg";
import normal from "../assets/imgs/texture/normal.jpg";
import roughnessmap from "../assets/imgs/texture/roughness.jpg";
import Model from "./Model";
const fontProps = {
  font: font,
  fontSize: 0.6,
  height: 5,
  size: 50,
  // letterSpacing: -0.05,
  lineHeight: 1,
  color: "black",
  castShadow: true,
  // receiveShadow: true,
  outlineWidth: 0.1,
  outlineColor: "#fff",
  "material-toneMapped": false,
};

export default function Ball3d() {
  // const map = useLoader(TextureLoader, texture);

  return (
    <Canvas
      // dpr={[1, 2]}
      shadows={true}
      camera={{ position: [0, 0, 35], fov: 35 }}
      style={{
        // display:'flex',
        width: "100%",
        height: "80vh",
      }}
    >
      <Suspense fallback={null}>
        {/* <hemisphereLight intensity={.4} /> */}

        {/* <OrbitControls enableZoom={false} /> */}
        {/* <Environment
          files={"myPortfolio/studio.hdr"}
          // background
          near={1}
          far={2}
          resolution={256}
        /> */}
        <Ball />
      </Suspense>
      {/* </mesh> */}
    </Canvas>
  );
}

const Ball = () => {
  // const maping = useLoader(TextureLoader, "../assets/imgs/texture/diff.jpg");
  extend({ TextGeometry });
  const JsFont = new FontLoader().parse(JsonFont);
  const texturemaps = useTexture({
    map: map,
    displacementMap: disp,
    aoMap: ao,
    roughnessMap: roughnessmap,
    metalnessMap: arm,
    normalMap: normal,
  });
  const ref = useRef();
  const Js = useRef();
  const RHTML = useRef();
  const RCSS = useRef();
  const r = useRef();
  const rn = useRef();
  const figma = useRef();
  const threejs = useRef();

  const [position, setposition] = useState(0);
  const [storedClock, setclock] = useState(1);
  const [rate, setrate] = useState(0.0023);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const localPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.8);
  useFrame(({ clock }) => {
    threejs.current.rotation.y = clock.getElapsedTime() * 2;
    Js.current.rotation.y = clock.getElapsedTime() * 2;
    RHTML.current.rotation.y = clock.getElapsedTime() * 1.2;
    RCSS.current.rotation.y = clock.getElapsedTime() * 2;
    r.current.rotation.y = clock.getElapsedTime() * 3;
    rn.current.rotation.y = clock.getElapsedTime() * 2.5;
    figma.current.rotation.y = clock.getElapsedTime();
    if (active) {
      ref.current.rotation.y = rate > 0 ? position + rate : position;
      setposition(rate > 0 ? position + rate : position);
      setrate(rate > 0 ? rate - 0.00001 : 0);
      return;
    } else ref.current.rotation.y = position;
    setrate(rate >= 0.0023 ? 0.0023 : rate + 0.00001);
    setposition(position + rate);
  });

  const plight = useRef();
  // useHelper(plight, PointLightHelper, 0.5, "hotpink");
  const depthBuffer = useDepthBuffer({ size: 56 });
  return (
    <>

      <directionalLight
        position={[1, 2, 0]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2000}
        shadow-mapSize-height={2000}
        shadow-camera-far={2000}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        color={"#ffffff"}
      />
      <ambientLight intensity={0.2} />
      <pointLight
        position={[8, 7.5, -2]}
        intensity={2}
        color="#fad16b"
        ref={plight}
        castShadow={true}
      />
      <mesh
        ref={ref}
        onClick={() => {
          setActive(!active);
        }}
        // onPointerOver={() => {
        //   setHover(true);
        //   document.body.style.cursor = "pointer";
        // }}
        // onPointerOut={() => {
        //   setHover(false);
        //   document.body.style.cursor = "auto";
        // }}
      >
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[0, -5, -15]}
          castShadow
          receiveShadow
          ref={Js}
        >
          <MeshDistortMaterial
            attach={"material"}
            color="#F7DF1E"
            distort={0.3}
            roughness={0}
          />
          <Text
            {...fontProps}
            color="#857501"
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
          >
            JavaScript
          </Text>
        </Sphere>
        <Sphere
          visible
          ref={rn}
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[-10, -5, 0]}
          rotation={[0, 1.5, 0]}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            attach={"material"}
            color="#60D7F8"
            distort={0.3}
            roughness={0}
          />
          <Text
            {...fontProps}
            color="#017291"
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
          >
            ReactNative
          </Text>
        </Sphere>
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[-20, 2, 0]}
          rotation={[0, 1.5, 0]}
          castShadow
          receiveShadow
          ref={r}
        >
          <MeshDistortMaterial
            attach={"material"}
            color="rgb(0, 127, 255)"
            distort={0.3}
            roughness={0}
          />
          <Text
            {...fontProps}
            color="#00458a"
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
          >
            REACTJS
          </Text>
        </Sphere>
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[10, 4, 0]}
          rotation={[0, 4.7, 0]}
          ref={figma}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            attach={"material"}
            color="#A259FF"
            distort={0.3}
            roughness={0}
          />
          <Text
            {...fontProps}
            color={"#5704c2"}
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
          >
            FIGMA
          </Text>
        </Sphere>
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[10, 0, 5]}
          rotation={[0, 4.1, 0]}
          ref={RHTML}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            distort={0.4}
            color="#e54c21"
            attach={"material"}
            roughness={0}
          />

          <Text
            {...fontProps}
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
            castShadow
            receiveShadow
            color={"#9c2200"}
          >
            HTML5
          </Text>
        </Sphere>
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.5}
          position={[13, -2, 5]}
          rotation={[0, 4.1, 0]}
          ref={RCSS}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            distort={0.4}
            color="#27A0D4"
            attach={"material"}
            roughness={0}
          />

          <Text
            {...fontProps}
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
            castShadow
            color={"#005275"}
            receiveShadow
          >
            CSS3
          </Text>
        </Sphere>
        <Sphere
          visible
          args={[1.6, 50, 30]}
          scale={0.7}
          position={[-10, 4, 0]}
          rotation={[0, 4.7, 0]}
          ref={threejs}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            attach={"material"}
            color="#7A59F9"
            distort={0.3}
            roughness={0}
          />
          <Text
            {...fontProps}
            color={"#2d09b5"}
            position={[0, 0, -2]}
            rotation={[0, 9.5, 0]}
          >
            THREEJS
          </Text>
        </Sphere>
        {/* <Sphere visible args={[2, 100, 100]} scale={4} castShadow receiveShadow>
      
        <meshPhysicalMaterial transmission={1} roughness={0} thickness={1} />
      </Sphere> */}
      </mesh>
      {/* <Plane
        args={[50, 50, 128, 128]}
        position={[0, -7.9, 0]}
        rotation={[4.72, 0, 0]}
        receiveShadow={true}
      >
        <meshStandardMaterial {...texturemaps} roughness={1}  />
      </Plane> */}
      <mesh
        position={[0, -7, 0]}
        castShadow
        receiveShadow
        scale={10}
        onClick={() => {
          setActive(!active);
        }}
        // onPointerOver={() => {
        //   setHover(true);
        //   document.body.style.cursor = "pointer";
        // }}
        // onPointerOut={() => {
        //   setHover(false);
        //   document.body.style.cursor = "auto";
        // }}
      >
        <Model />
      </mesh>
    </>
  );
};

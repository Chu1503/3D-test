import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Head1 } from "./Head1";
import { Head2 } from "./Head2";
import { Head3 } from "./Head3";


const Chu = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
  <ambientLight intensity={10} color="#ffffff" />

  <hemisphereLight
    skyColor={"#FF0000"}
    groundColor={"#888888"}
    intensity={2}
  />

  <directionalLight
    intensity={5}
    position={[0, 0, 5]}
    color="#fff"
  />

<directionalLight
    intensity={5}
    position={[50, 55, -100]}
    color="#FFA500"
  />

<directionalLight
    intensity={3}
    position={[-50, -55, -100]}
    color="#FFA500"
  />

  <OrbitControls
    enablePan={false}
    enableZoom={false}
    maxDistance={3}
    minDistance={1.5}
    minPolarAngle={Math.PI / 2.5}
    maxPolarAngle={Math.PI / 1.5}
  />

  <Head3 scale={5} />
</Canvas>

  );
};

export default Chu;

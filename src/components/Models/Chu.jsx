import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Head1 } from "./Head1";
import { Head2 } from "./Head2";

const Chu = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1A1A40" />
      <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={500}
        minDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        {/* <Head1 scale={0.02} /> */}
        <Head2 scale={5} />
      </group>
    </Canvas>
  );
};

export default Chu;

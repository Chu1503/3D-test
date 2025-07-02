import React from "react";
import { useGLTF } from "@react-three/drei";

/**
 * Chuhead component
 * Loads the full scene from the chuhead.glb file and renders it as-is.
 * This avoids skinned mesh transform issues and keeps original materials.
 */
export function Chuhead(props) {
  const { scene } = useGLTF("/models/chuhead.glb");

  return (
    <primitive
      object={scene}
      {...props}
      dispose={null}
    />
  );
}

useGLTF.preload("/models/chuhead.glb");

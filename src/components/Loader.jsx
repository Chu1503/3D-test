import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        fontFamily: "sans-serif",
        fontSize: "1rem",
      }}
    >
      Loading 3D model...
    </div>
  );
};

export default Loader;

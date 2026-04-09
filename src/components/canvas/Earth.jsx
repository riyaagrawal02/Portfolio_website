import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../utils/useMediaQuery";
import useInView from "../../utils/useInView";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { ref, isVisible } = useInView({ rootMargin: "200px" });
  const dpr = isMobile ? 1 : [1, 2];

  return (
    <div ref={ref} className='w-full h-full'>
      {isVisible ? (
        <Canvas
          shadows
          frameloop='demand'
          dpr={dpr}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
};

export default EarthCanvas;

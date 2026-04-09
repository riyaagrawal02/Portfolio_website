import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../utils/useMediaQuery";
import useInView from "../../utils/useInView";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { ref, isVisible } = useInView({ rootMargin: "200px" });
  const dpr = isMobile ? 1 : [1, 2];

  return (
    <div ref={ref} className='w-full h-full'>
      {isVisible ? (
        <Canvas
          frameloop='demand'
          dpr={dpr}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
};

export default BallCanvas;

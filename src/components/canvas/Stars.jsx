import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import useMediaQuery from "../../utils/useMediaQuery";
import useInView from "../../utils/useInView";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { ref, isVisible } = useInView({ rootMargin: "200px" });
  const dpr = isMobile ? 1 : [1, 2];

  return (
    <div ref={ref} className='w-full h-auto absolute inset-0 z-[-1]'>
      {isVisible ? (
        <Canvas camera={{ position: [0, 0, 1] }} dpr={dpr}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
};

export default StarsCanvas;

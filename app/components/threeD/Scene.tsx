import { Canvas } from "@react-three/fiber";
import Image2D from "./Image2D";
import Shadow from "./Shadow";
import ShapeFromSVG from "./ShapeFromSVG";
import { OrbitControls } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas>
        <OrbitControls />
        <mesh>
          {/* <Image2D src="/images/about-immersive.webp" width={1} height={1} /> */}
          <ShapeFromSVG src="/images/about-immersive.svg" />

        </mesh>
  </Canvas>

  );
}


import { Canvas } from "@react-three/fiber";
import Image2D from "./Image2D";
import { animated, useSpring } from "@react-spring/three";
import { useRef, useState } from "react";
import { CameraControls, Text } from "@react-three/drei";

export default function Scene() {
  const controlsRef = useRef<CameraControls | null>(null);
  const [immersiveHover, setImmersiveHover] = useState(false);
  const [meHover, setMeHover] = useState(false);

  const [isZoomed, setIsZoomed] = useState(false);

  const meRotation = useSpring({
    to: {
      x: 0,
      y: meHover ? 0.5 : 0,
      z: 0
    }
  });

  const immersiveRotation = useSpring({
    to: {
      x: 0,
      y: immersiveHover ? 0.5 : 0,
      z: 0
    }
  });

  const handleClick = () => {
    if (!controlsRef.current) return;
    
    setIsZoomed(!isZoomed);
    controlsRef.current.setLookAt(
      0, 0, 3,  // 카메라 위치 (x, y, z)
      0, isZoomed ? 0 : 1.2, 0,                   // 타겟 위치 (x, y, z)
      true                       // 애니메이션 사용
    );
  };

  return (
    <Canvas style={{backgroundColor: 'cornflowerblue'}} camera={{position: [0, 0, 3]}}>
      <CameraControls ref={controlsRef} />
      <group>
        <animated.mesh 
          position={[-0.75, 0.5, 0]}
          rotation-y={immersiveRotation.y}
          onPointerOver={() => setImmersiveHover(true)}
          onPointerOut={() => setImmersiveHover(false)}
        >
          <Image2D src="/images/about-immersive.png" width={1} height={1} />
        </animated.mesh>
          {immersiveHover && (
            <Text
              position={[-0.5, 0.85, 0]}
              fontSize={0.15}
              color="white"
              anchorX="center"
              font={"/fonts/Roudway.otf"}
              textAlign="center"
              lineHeight={1.25}
            >
              Immersive{'\n'}Works
            </Text>
          )}          
      </group>

        <animated.mesh 
          position={[0, 0, 0]}
          rotation-y={meRotation.y}
          onPointerOver={() => setMeHover(true)}
          onPointerOut={() => setMeHover(false)}
          onClick={handleClick}
        >
          <Image2D src="/images/me.png" width={1} height={1} />
        </animated.mesh>
          {meHover && (
            <Text
              position={[0, -0.7, 0]}
              fontSize={0.25}
              color="white"
              anchorX="center"
              font={"/fonts/Roudway.otf"}
            >
              0dot77
            </Text>
          )}          
  </Canvas>

  );
}


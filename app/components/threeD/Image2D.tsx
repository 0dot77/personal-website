import { useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3 } from 'three';
import { useMemo } from 'react';
import { Image2DProps } from '../../types';

export default function Image2D({
  src,
  width,
  height,
}: Image2DProps) {

const texture = useLoader(TextureLoader, src);
const scale = useMemo(() => {
        const imageAspect = texture.image.width / texture.image.height;
        return new Vector3(imageAspect, 1, 1);
    }, [texture]);

  return (
    <mesh scale={scale}>
      <planeGeometry args={[width, height]} />
      {/* alphaTest : 투명도 임계값 설정 */}
      <meshBasicMaterial map={texture} transparent alphaTest={1} shadowSide={2} />
    </mesh>
  )
}



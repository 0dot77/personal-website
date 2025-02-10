import { ShadowProps } from "../../types";

export default function Shadow({
    width = 1,
    height = 1,
    offset = [0, 0],
    opacity = 0.5,
    scale = 1,
}: ShadowProps) {
    return (
        <mesh position={[offset[0], offset[1], -0.01]} scale={scale}>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial color="black" opacity={opacity} transparent />
        </mesh>
    )
    
}

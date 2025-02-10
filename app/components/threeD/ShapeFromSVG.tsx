import { ExtrudeGeometry } from 'three';
import { SVGLoader } from 'three/examples/jsm/Addons.js';
import { useLoader } from '@react-three/fiber';


export default function ShapeFromSVG({src}: {src: string}) {
    const data = useLoader(SVGLoader, src);
    const shapes = data.paths.flatMap((path => path.toShapes(true)));

    const geometry = new ExtrudeGeometry(shapes, {
        depth: 10,
        bevelEnabled: false,
    });
    geometry.center();


    return (
        <mesh geometry={geometry} scale={0.01}>
            <meshBasicMaterial color="red" attach="material"/>
        </mesh>
    )
}


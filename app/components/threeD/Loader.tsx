import { useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <div className="text-black text-2xl">
        Loading... {progress.toFixed(0)}%
      </div>
    </div>
}


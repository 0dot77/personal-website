import DotRing from "./components/DotRing";
import data from "@/data/dots_manager.json";

export default function Home() {
  return (
      <main className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <DotRing dots={data} />
      </main>
  );
}

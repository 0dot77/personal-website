'use client'
import Loader from './components/threeD/Loader';
import Scene from "./components/threeD/Scene";
import { Suspense } from 'react';

export default function Home() {
  return (
      <main className="w-full h-screen">
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </main>
  );
}

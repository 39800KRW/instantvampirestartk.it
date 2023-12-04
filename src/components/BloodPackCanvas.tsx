'use client';

import BloodPackModel from '@/components/BloodPackModel';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function BloodPackCanvas() {
  return (
    <Canvas className="cursor-grab">
      <Suspense fallback={null}>
        <ambientLight intensity={5} />
        <pointLight position={[0, 0, 0]} />
        <BloodPackModel
          scale={30}
          rotation={[(Math.PI * 3) / 8, Math.PI / 8, 0]}
        />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

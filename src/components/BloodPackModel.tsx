'use client';

import { useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function BloodPackModel(props: ThreeElements['mesh']) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the object around the Z axis
      ref.current.rotation.z -= delta;
    }
  });

  const { scene } = useGLTF('/assets/bloodpack_converted-v1.glb', true);
  return <primitive ref={ref} {...props} object={scene} dispose={null} />;
}

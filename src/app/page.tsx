'use client';

import { Chip, CircularProgress, Sheet, Stack, Typography } from "@mui/joy"
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { FC, ReactNode, Suspense, useRef } from "react";
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Mesh } from "three";
import LiveTalk from "@/components/LiveTalk";
import ProductExplain from "@/components/ProductExplain";
import OutOfStockAlert from "@/components/OutOfStockAlert";
import ProductInfo from "@/components/ProductInfo";
import PhoneNumber from "@/components/PhoneNumber";

const Model = (props: ThreeElements['mesh']) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<Mesh>(null);
    
    useFrame((state, delta) => {
        if (ref.current) {
            // Rotate the object around the Z axis
            ref.current.rotation.z -= delta;
        }
    });

    const { scene } = useGLTF('/assets/bloodpack_converted-v1.glb', true);
    return <primitive ref={ref} {...props} object={scene} dispose={null} />
}

export default () => {
    return <>
        <Canvas style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100dvw', height: '100dvh' }}>
            <Suspense fallback={null}>
                <ambientLight intensity={5} />
                <pointLight position={[0, 0, 0]} />
                <Model scale={30} rotation={[Math.PI * 3 / 8, Math.PI / 8, 0]} />
                <OrbitControls />
            </Suspense>
        </Canvas>

        {/* 사이드바 ㄱ */}
        <div style={{zIndex: 1}}>
            <Stack sx={{ padding: '2.5rem' }}>
                <Stack direction="row" gap={2} >
                    <Stack direction="column" sx={{height: 'calc(100dvh - 7rem)'}} >
                      <ProductInfo />
                      <OutOfStockAlert />
                      <ProductExplain />
                      <LiveTalk />
                    </Stack>
                </Stack>
            </Stack>
            
            {/* 바텀 ㄱ */}
            <Stack sx={{ position: 'absolute', bottom: 0 }}>
                <Sheet variant="soft" sx={{ width: '100dvw', padding: '.5rem' }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" alignItems="center">
                                <Stack direction="row" gap={4} alignItems="center">
                                    <Stack />
                                    <Stack direction="row" alignItems="center" gap={4}>
                                      <PhoneNumber title="자동주문" number="070-100-5628" />
                                      <PhoneNumber title="상담원" number="070-397-9903" />
                                    </Stack>
                                    
                                    <Typography>필수 영양소 다량 함유, 철분 다량 함유, 딸기향 합성착향료 함유</Typography>
                                </Stack>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Typography>방송 종료</Typography>
                            <CircularProgress size="sm" />
                            <Typography>00:00</Typography>
                        </Stack>
                    </Stack>
                </Sheet>
            </Stack>
        </div>
    </>
}

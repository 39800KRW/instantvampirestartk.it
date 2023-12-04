'use client';

import CountDownTimer from '@/components/CountDownTimer';
import LiveTalk from '@/components/LiveTalk';
import OutOfStockAlert from '@/components/OutOfStockAlert';
import PhoneNumber from '@/components/PhoneNumber';
import ProductExplain from '@/components/ProductExplain';
import ProductInfo from '@/components/ProductInfo';
import LiveChatData, { LiveChatDataInterface } from '@/data/LiveChatData';
import { AddShoppingCart, Copyright } from '@mui/icons-material';
import { Button, CircularProgress, Sheet, Stack, Typography } from '@mui/joy';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';

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
  return <primitive ref={ref} {...props} object={scene} dispose={null} />;
};

export default function Home() {
  const router = useRouter();

  const purchase = () => {
    if (typeof window !== 'undefined') {
      location.href =
        'https://store.steampowered.com/app/2325460/EZ2ON_REBOOT__R__ENDLESS_CIRCULATION/';
    }
  };

  const [liveChat, setLiveChat] = useState<LiveChatDataInterface>(
    LiveChatData[0],
  );
  const [liveChatIdx, setLiveChatIdx] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (!intervalId) {
      setIntervalId(
        setTimeout(() => {
          setLiveChatIdx(liveChatIdx + 1);
          updateLiveChat(liveChatIdx + 1);
        }, 5000),
      );
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  });

  const updateLiveChat = (idx: number) => {
    setLiveChat(LiveChatData[idx]);
  };

  return (
    <>
      <Canvas
        style={{
          cursor: 'grab',
          zIndex: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100dvw',
          height: '100dvh',
        }}>
        <Suspense fallback={null}>
          <ambientLight intensity={5} />
          <pointLight position={[0, 0, 0]} />
          <Model scale={30} rotation={[(Math.PI * 3) / 8, Math.PI / 8, 0]} />
          <OrbitControls />
        </Suspense>
      </Canvas>

      {/* 사이드바 ㄱ */}
      <div style={{ zIndex: 1 }}>
        <Stack sx={{ padding: '2.5rem' }}>
          <Stack direction="row" gap={2}>
            <Stack
              direction="column"
              sx={{
                width: '350px',
                maxWidth: '30dvw',
                height: 'calc(100dvh - 7rem)',
              }}>
              <ProductInfo />
              <OutOfStockAlert />
              <ProductExplain />
              <LiveTalk phone={liveChat.phone} message={liveChat.message} />
            </Stack>
          </Stack>
        </Stack>

        {/* 바텀 ㄱ */}
        <Stack sx={{ position: 'absolute', bottom: 0 }}>
          <Sheet
            variant="soft"
            sx={{ width: '100dvw', padding: '.5rem 1.5rem' }}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <Stack direction="row" gap={4} alignItems="center">
                  <Stack direction="row" alignItems="center" gap={4}>
                    <PhoneNumber title="자동주문" number="070-100-5628" />
                    <PhoneNumber title="상담원" number="070-397-9903" />
                  </Stack>

                  <Typography
                    sx={{
                      flexGrow: 1,
                      whiteSpace: 'nowrap',
                      flexShrink: 1,
                      textOverflow: 'ellipssis',
                      overflow: 'hidden',
                      width: 'fit-content',
                      maxWidth: 'calc(100dvw - 14rem)',
                    }}>
                    필수 영양소 다량 함유, 철분 다량 함유, 딸기향 합성착향료
                    함유
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ flexShrink: 0 }}>
                <Typography>방송 종료</Typography>
                <CircularProgress size="sm" color="danger" />
                <Typography>
                  <CountDownTimer
                    target={
                      new Date(
                        new Date().setMinutes(new Date().getMinutes() + 1),
                      )
                    }
                  />
                </Typography>
              </Stack>
            </Stack>
          </Sheet>
        </Stack>

        {/* 구매하기 */}
        <Stack
          direction="row"
          gap={2}
          sx={{ position: 'absolute', bottom: '3.5rem', right: '1rem' }}>
          <Button
            color="neutral"
            onClick={() => router.push('/acknowledgement')}>
            <Copyright />
          </Button>
          <Button
            color="danger"
            onClick={() => purchase()}
            startDecorator={<AddShoppingCart />}>
            구매하기
          </Button>
        </Stack>
      </div>
    </>
  );
}

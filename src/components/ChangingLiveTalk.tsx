'use client';

import LiveTalk from '@/components/LiveTalk';
import LiveChatData from '@/data/LiveChatData';
import { useEffect, useState } from 'react';

export default function ChangingLiveTalk() {
  const [liveChatIdx, setLiveChatIdx] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (!intervalId) {
      setIntervalId(
        setInterval(
          () => setLiveChatIdx(prevIdx => (prevIdx + 1) % LiveChatData.length),
          5000,
        ),
      );
    }

    return () => {
      if (intervalId) {
        console.log('clear triggered');
        clearInterval(intervalId);
      }
    };
  });

  const increaseOne = async () => {
    const newIdx = (liveChatIdx + 1) % LiveChatData.length;
    setLiveChatIdx(newIdx);
    console.log('update triggered', newIdx);
  };

  return (
    <LiveTalk
      phone={LiveChatData[liveChatIdx].phone}
      message={LiveChatData[liveChatIdx].message}
    />
  );
}

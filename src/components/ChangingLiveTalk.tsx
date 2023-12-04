'use client';

import LiveTalk from '@/components/LiveTalk';
import LiveChatData from '@/data/LiveChatData';
import { useEffect, useState } from 'react';

export default function ChangingLiveTalk() {
  const [liveChatIdx, setLiveChatIdx] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    // Clear existing interval if any
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Set a new interval
    const newIntervalId = setInterval(
      () => setLiveChatIdx(prevIdx => (prevIdx + 1) % LiveChatData.length),
      5000,
    );
    setIntervalId(newIntervalId);

    return () => {
      clearInterval(newIntervalId);
    };
  }, []);

  return (
    <LiveTalk
      phone={LiveChatData[liveChatIdx].phone}
      message={LiveChatData[liveChatIdx].message}
    />
  );
}

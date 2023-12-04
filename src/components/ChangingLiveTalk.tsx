'use client';

import LiveTalk from '@/components/LiveTalk';
import LiveChatData, { LiveChatDataInterface } from '@/data/LiveChatData';
import { useEffect, useState } from 'react';

export default function ChangingLiveTalk() {
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

  return <LiveTalk phone={liveChat.phone} message={liveChat.message} />;
}

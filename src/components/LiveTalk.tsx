import { LiveChatDataInterface } from '@/data/LiveChatData';
import { FC } from 'react';

const LiveTalk: FC<LiveChatDataInterface> = ({ phone, message }) => {
  const messageByteLength = new TextEncoder().encode(message).length;
  const shouldMarquee = messageByteLength > 40;

  return (
    <div className="p-2 px-4 w-full bg-zinc-50 text-zinc-600">
      <div className="flex flex-row gap-2 text-[.7rem] overflow-hidden text-ellipsis">
        <span className="font-semibold shrink-0 break-keep whitespace-pre">
          라이브톡
        </span>
        <div className="flex flex-row gap-1">
          <span className="text-zinc-400 font-semibold">{phone}</span>
          <div className="w-full marquee text-ellipsis break-keep">
            <span
              key={message}
              className={shouldMarquee ? 'shortmarquee-content' : ''}>
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTalk;

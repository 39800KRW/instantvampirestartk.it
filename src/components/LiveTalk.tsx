import { LiveChatDataInterface } from '@/data/LiveChatData';
import { FC } from 'react';

const LiveTalk: FC<LiveChatDataInterface> = ({ phone, message }) => {
  return (
    <div className="p-1 w-full bg-gray-50 text-black">
      <div className="flex flex-row gap-2 text-xs overflow-hidden text-ellipsis">
        <span className="font-semibold">라이브톡</span>
        <div className="flex flex-row gap-1">
          <span>{phone}</span>
          <span className="w-full overflow-hidden text-ellipsis break-keep whitespace-pre">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveTalk;

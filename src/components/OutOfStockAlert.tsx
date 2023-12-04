import { FC, ReactNode } from 'react';

const LongShadowMe: FC<{
  children: ReactNode;
}> = ({ children }) => {
  let shadowStyle = '';
  for (let i = 0; i < 100; i++) {
    if (shadowStyle !== '') shadowStyle += ', ';
    shadowStyle += `${i}px ${i}px #270707`;
  }

  return <div style={{ textShadow: shadowStyle }}>{children}</div>;
};

export default function OutOfStockAlert() {
  return (
    <div className="p-1 flex-grow overflow-hidden bg-red-300 text-[5rem]">
      <div className="flex flex-col items-end justify-center h-full pr-5">
        <LongShadowMe>
          <h2 className="text-[5rem] font-bold leading-tight">
            매진
            <br />
            임박<span className="italic">!</span>
          </h2>
        </LongShadowMe>
      </div>
    </div>
  );
}

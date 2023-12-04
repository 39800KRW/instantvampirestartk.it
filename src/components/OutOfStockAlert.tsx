import { FC, ReactNode } from 'react';

const LongShadowMe: FC<{
  children: ReactNode;
}> = ({ children }) => {
  let shadowStyle = '';
  for (let i = 0; i < 150; i++) {
    if (shadowStyle !== '') shadowStyle += ', ';
    shadowStyle += `${i}px ${i}px #010001`;
  }

  return <div style={{ textShadow: shadowStyle }}>{children}</div>;
};

export default function OutOfStockAlert() {
  return (
    <div className="p-1 flex-grow overflow-hidden bg-red-900">
      <div
        className="flex flex-col items-end justify-center pr-4"
        style={{ height: 'calc(100dvh - 26rem)' }}>
        <LongShadowMe>
          <h2 className="text-[4rem] font-bold leading-none">
            매진
            <br />
            임박<span className="italic">!</span>
          </h2>
        </LongShadowMe>
      </div>
    </div>
  );
}

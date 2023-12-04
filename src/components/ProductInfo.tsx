export default function ProductInfo() {
  return (
    <div className="p-2.5 bg-white text-black">
      <div className={'flex flex-col gap-6'}>
        <div className={'flex gap-1 items-baseline leading-none'}>
          <div
            className={
              'animate-pulse px-1.5 py-0.5 bg-red-700 text-xs font-semibold text-white'
            }>
            <span className="animate-pulse">NEW</span>
          </div>

          <span className="text-sm">뱀파이어 전향 계약 키트&trade;</span>
        </div>
        <div className={'flex flex-col gap-1'}>
          <span className={'text-sm'}>선택1) 초회특전 모조 피 세트</span>
          <div className={'flex flex-row items-baseline'}>
            <h2 className={'text-4xl font-bold tracking-tighter'}>39,800</h2>
            <span className={'text-xl'}>원/무3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

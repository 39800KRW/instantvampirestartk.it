export default function ProductExplain() {
  return (
    <div className="px-4 py-4 bg-white text-black">
      <div className={'flex flex-col gap-2'}>
        <div className={'flex flex-col gap-1'}>
          <span className="text-xs font-bold tracking-tighter">
            흡혈귀 전문 연구진의
          </span>
          <h3 className="text-xl text-red-700 font-bold leading-none tracking-tighter">
            전문 연구 결과
            <br />
            검증 완료<span className="italic">!</span>
          </h3>
        </div>

        <div className={'flex flex-col'}>
          <p className={'text-sm leading-tight'}>&middot; 활력 증진</p>
          <p className={'text-sm leading-tight'}>&middot; 집중력 유지</p>
          <p className={'text-sm leading-tight'}>&middot; 면역력 상승</p>
        </div>
      </div>
    </div>
  );
}

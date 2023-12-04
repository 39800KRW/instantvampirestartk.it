export default function ProductExplain() {
  return (
    <div className="p-1 bg-white text-black">
      <div className={'flex flex-col gap-2'}>
        <div className={'flex flex-col'}>
          <span className="text-xs">흡혈귀 전문 연구진의</span>
          <h3 className="text-xl text-red-700 font-bold">
            전문 연구 결과
            <br />
            검증 완료!
          </h3>
        </div>

        <div className={'flex flex-col'}>
          <p className={'text-sm'}>&middot; 활력 증진</p>
          <p className={'text-sm'}>&middot; 집중력 유지</p>
          <p className={'text-sm'}>&middot; 면역력 상승</p>
        </div>
      </div>
    </div>
  );
}

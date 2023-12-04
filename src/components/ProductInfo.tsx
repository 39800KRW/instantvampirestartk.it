import { Chip } from '@nextui-org/chip';

export default function ProductInfo() {
  return (
    <div className="p-1 bg-white text-black">
      <div className={'flex flex-col gap-1'}>
        <div className={'flex gap-1 items-center'}>
          <Chip color="danger">
            <span className="animate-pulse">NEW</span>
          </Chip>

          <span>뱀파이어 전향 계약 키트&trade;</span>
        </div>
        <div className={'flex flex-col gap-1'}>
          <span>선택1) 초회특전 모조 피 세트</span>
          <div className={'flex flex-row items-baseline'}>
            <h2 className={'text-3xl font-bold'}>39,800</h2>
            <span className={'text-lg'}>원/무3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

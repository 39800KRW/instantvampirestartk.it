import { Link } from '@nextui-org/link';

export default function Acknowledgement() {
  return (
    <div className={'flex flex-col gap-4 p-4'}>
      <div className={'flex flex-col gap-2'}>
        <h1 className={'text-2xl font-bold'}>저작권</h1>
        <p>이 웹페이지는 다음을 이용하여 제작되었습니다.</p>
      </div>

      <div className={'flex flex-col gap-2'}>
        <div className={'flex align-baseline gap-1'}>
          <p className={'font-semibold'}>혈액팩 3D 모델</p>
          <p className={''}>SketchFab - Blood Pack (Low-poly PBR)</p>
          <Link
            href={
              'https://sketchfab.com/3d-models/blood-pack-low-poly-pbr-e8122f4880df4286baa08ca79eae1253#download'
            }>
            웹페이지
          </Link>
          <p className={'text-sm'}>Distributed under CC-BY 4.0 License</p>
        </div>
        <div className={'flex align-baseline gap-1'}>
          <p className={'font-semibold'}>G-Market Sans OTF</p>
          <p className={''}></p>
          <Link href={'https://corp.gmarket.com/fonts/'}>웹페이지</Link>
        </div>
      </div>
    </div>
  );
}

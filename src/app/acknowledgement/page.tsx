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

        <div className={'flex align-baseline gap-1'}>
          <p className={'font-semibold'}>오픈소스 소프트웨어</p>
          <p>본 사이트에서 사용된 오픈소스 소프트웨어와 소스코드는</p>
          <Link href={'https://github.com/39800KRW/instantvampirestartk.it'}>
            GitHub 레포지토리
          </Link>
          <p>에서 확인 가능합니다.</p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- https://github.com/39800KRW/instantvampirestartk.it (에헤이 이스터에그 조졌네 이거) -->`,
        }}></div>
    </div>
  );
}

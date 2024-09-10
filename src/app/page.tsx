import BloodPackCanvas from '@/components/BloodPackCanvas';
import ChangingLiveTalk from '@/components/ChangingLiveTalk';
import CountDownTimer from '@/components/CountDownTimer';
import OutOfStockAlert from '@/components/OutOfStockAlert';
import PhoneNumber from '@/components/PhoneNumber';
import ProductExplain from '@/components/ProductExplain';
import ProductInfo from '@/components/ProductInfo';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function Home() {
  const target = new Date(new Date().setMinutes(new Date().getMinutes() + 60));

  return (
    <>
      {/* Canvas */}
      <div className="z-0 absolute top-0 left-0 w-screen h-screen">
        <BloodPackCanvas />
      </div>

      {/* 사이드바 ㄱ */}
      <div className="z-1 absolute top-0 left-0 h-screen">
        <div className="p-4 md:px-8">
          <div className="flex gap-2">
            <div className="flex flex-col w-64">
              <ProductInfo />
              <OutOfStockAlert />
              <ProductExplain />
              <ChangingLiveTalk />
            </div>
          </div>
        </div>
      </div>

      {/* 바텀 ㄱ */}
      <div className="absolute bg-white text-black bottom-0 h-14 w-screen px-4 lg:px-8 xl:px-12 py-3">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex items-center grow">
            <div className="flex flex-row items-center mx-1 gap-8">
              <PhoneNumber title="자동주문" number="070-100-5628" />
              <PhoneNumber title="상담원" number="070-397-9903" />
            </div>
            <div className="hidden xl:flex flex-1 whitespace-nowrap text-ellipsis overflow-hidden mx-1 marquee grow">
              <span className="marquee-content">
                필수 영양소 다량 함유, 철분 다량 함유, 딸기향 합성착향료 함유
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center flex-shrink-0 gap-1">
            <span>방송 종료</span>
            <span className="material-icons animate-spin">dark_mode</span>
            <span className="tabular-nums">
              <CountDownTimer target={target} />
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex font-light gap-4 w-[450px] text-sm absolute bottom-14 right-0 px-4 py-1.5 bg-zinc-700 text-white items-center">
        <span className="material-icons-outlined text-sm">warning</span>
        <div className="w-full marquee">
          <span className="marquee-content">
            지금 주문량이 많아 상담원 연결이 어렵습니다.
          </span>
        </div>
      </div>

      <ButtonGroup className="absolute bottom-24 right-4">
        <Button
          as={Link}
          target={'_blank'}
          href={'/acknowledgement'}
          color="primary">
          <span>&copy;</span>
        </Button>
        <Button
          as={Link}
          target={'_blank'}
          href="https://www.youtube.com/watch?v=F3uNPW4k_ls"
          color="secondary">
          <span className="material-icons-outlined">movie</span>
        </Button>
        <Button
          as={Link}
          target={'_blank'}
          href="/buy"
          color="danger">
          <span className="material-icons-outlined">add_shopping_cart</span>
          구매하기
        </Button>
      </ButtonGroup>
    </>
  );
}

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
  return (
    <>
      {/* Canvas */}
      <div className="z-0 absolute top-0 left-0 w-screen h-screen">
        <BloodPackCanvas />
      </div>

      {/* 사이드바 ㄱ */}
      <div className="z-1 absolute top-0 left-0 w-screen h-screen">
        <div className="p-4">
          <div className="flex gap-2">
            <div className="flex flex-col w-64">
              <ProductInfo />
              <OutOfStockAlert />
              <ProductExplain />
              <ChangingLiveTalk />
            </div>
          </div>
        </div>

        {/* 바텀 ㄱ */}
        <div className="absolute bottom-0">
          <div className="w-screen px-1 py-3">
            <div className="flex flex-row justify-between">
              <div className="flex items-center mx-1">
                <div className="flex flex-row items-center mx-1">
                  <PhoneNumber title="자동주문" number="070-100-5628" />
                  <PhoneNumber title="상담원" number="070-397-9903" />
                </div>
                <span className="flex flex-1 whitespace-nowrap text-ellipsis overflow-hidden w-fit max-w-[calc(100dvw - 14rem)] mx-1">
                  필수 영양소 다량 함유, 철분 다량 함유, 딸기향 합성착향료 함유
                </span>
              </div>

              <div className="flex flex-row items-center flex-shrink-0 gap-1">
                <span>방송 종료</span>
                <span className="material-icons animate-spin">dark_mode</span>
                <span className="tabular-nums">
                  <CountDownTimer
                    target={
                      new Date(
                        new Date().setMinutes(new Date().getMinutes() + 1),
                      )
                    }
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <ButtonGroup className="absolute bottom-16 right-4">
          <Button
            as={Link}
            target={'_blank'}
            href={'/acknowledgement'}
            color="primary">
            <span className="material-icons-outlined">pie_chart</span>
          </Button>
          <Button
            as={Link}
            target={'_blank'}
            href="https://store.steampowered.com/app/2325460/EZ2ON_REBOOT__R__ENDLESS_CIRCULATION/"
            color="danger">
            <span className="material-icons-outlined">add_shopping_cart</span>
            구매하기
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

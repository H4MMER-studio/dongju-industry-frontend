import { ProductType } from '@/interfaces';

export function toBodyStyleHidden(onOff: boolean) {
  const body = document.querySelector('body') as HTMLElement;

  if (onOff) {
    body.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.height = '100%';
  } else {
    body.removeAttribute('style');
  }
}

export function getProduct(type: ProductType['type']) {
  switch (type) {
    case 'exhaust-unit':
      return {
        name: '배기유니트',
        description:
          '배기유니트란 실내공기의 압력을 외부보다 낮게(-3~-5pa) 유지시켜 병실이나 실험실 내부의 세균이나 바이러스 등이 외부로 유출되지 않도록 하는 읍압 장비입니다.',
      };
    case 'air-blower':
      return {
        name: '송풍기',
        description:
          '각종 공조시설이 필요한 실험실 및 창고, 주방, 작업장의 급배기, 환기 등 필요한 송풍기를 선택하실 수 있습니다.',
      };
    case 'bubble-damper':
      return {
        name: '버블댐퍼',
        description:
          'BSL3(생물안전3등급) 실험실 및 격리 병실의 급·배기 시설의 덕트상에 설치하여 내부의 세균이나 바이러스가 유출되지 않도록 완전 차단하는 댐퍼입니다. (1,000pa 압력에서 0%의 누기율)',
      };
    case 'freeze-protection-damper-coil':
      return {
        name: '동파방지댐퍼코일',
        description:
          'IFB 코일은 원리 및 구조가 간단하면서도 코일의 동파를 근원적으로 막아주며 뛰어난 열효율을 보장, 동파로 인한 유지보수 비용 및 교체 비용을 절감시켜주며, Preheating 또는 Heating 코일로도 적용 가능한 혁신적인 코일이라고 할 수 있다.',
      };
    case 'fully-sealed-door':
      return {
        name: '밀폐도어',
        description:
          '밀폐도어는 열교환될 수 있는 가능성을 대폭 줄여줌으로써 열량 손실과 결로 발생을 최소화하여 줍니다.',
      };
    default:
      return {
        name: '공기조화기',
        description:
          '공기조화기는 분해 조립이 용이하며, 특수 여건에 따른 변형제작이 가능함',
      };
  }
}

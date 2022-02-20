import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import { mixins } from '@/styles';
import { ProductType } from '@/interfaces';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
  onClickProduct(product: ProductType['type']): void;
  onClickCompanyMenu: (
    companyMenu: 'welcome' | 'history' | 'way-to-come'
  ) => void;
}

const STDContainer = styled.nav`
  ${mixins.flexSet('center', 'flex-start')}
  height: 100%;
  padding: 36px 20px 20px 30px;
  margin-right: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
`;

const STDMainMenu = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  flex: 1;
  margin-right: 34px;

  > img {
    width: 96px;
    margin-bottom: 36px;
  }
`;

const STDProductList = styled.div`
  flex: 1;
`;

const STDProductWrapper = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  margin-bottom: 51px;
  cursor: pointer;

  img {
    width: 138px;
    margin-bottom: 11px;
  }

  p {
    font-size: 15px;
    font-weight: 600px;
    line-height: 18px;
    color: #777777;
  }
`;

const STDCompanyWrapper = styled.div`
  &:nth-child(1) {
    padding-top: 74px;
  }

  p {
    font-size: 18px;
    font-weight: 400px;
    color: #000;
    margin-bottom: 35px;
    cursor: pointer;
  }
`;

const MainNav: React.FC<IProps> = ({
  selectedMenu = '/',
  onClickMenu,
  onClickProduct,
  onClickCompanyMenu,
}) => {
  const MENU_LIST = [
    { value: '제품', id: 'product' },
    { value: '회사', id: 'company' },
    { value: '공지', id: 'notice' },
    { value: '고객지원', id: 'customer-service' },
  ];

  const PRDUCT_LIST: {
    imageSrc: string;
    name: string;
    type: ProductType['type'];
  }[] = [
    {
      imageSrc: '/image/main_nav/product_1.png',
      name: '공기조화기',
      type: 'air-conditioner',
    },
    {
      imageSrc: '/image/main_nav/product_2.png',
      name: '동파방지댐퍼코일',
      type: 'freeze-protection-damper-coil',
    },
    {
      imageSrc: '/image/main_nav/product_3.png',
      name: '배기유니트',
      type: 'exhaust-unit',
    },
    {
      imageSrc: '/image/main_nav/product_4.png',
      name: '버블댐퍼',
      type: 'bubble-damper',
    },
    {
      imageSrc: '/image/main_nav/product_5.png',
      name: '완전밀폐도어',
      type: 'fully-sealed-door',
    },
  ];

  const COMPANY_MENU_LIST: {
    name: string;
    type: 'welcome' | 'history' | 'way-to-come';
  }[] = [
    { name: '인사말', type: 'welcome' },
    { name: '연혁', type: 'history' },
    { name: '오시는 길', type: 'way-to-come' },
  ];

  return (
    <STDContainer>
      <STDMainMenu>
        <img
          src="/image/main_nav/header_logo.png"
          onClick={() => onClickMenu('')}
        />
        {MENU_LIST.map(({ id, value }, index) => (
          <Widgets.Button.Primary
            key={value}
            value={value}
            onClick={() =>
              onClickMenu(id === 'product' ? 'product/air-conditioner' : id)
            }
            state={selectedMenu.includes(id) ? 'active' : 'default'}
            cssStyle={
              index === MENU_LIST.length - 1 ? '' : 'margin-bottom: 26px;'
            }
          />
        ))}
      </STDMainMenu>

      <STDProductList>
        {selectedMenu.includes('product')
          ? PRDUCT_LIST.map(({ imageSrc, name, type }) => (
              <STDProductWrapper
                key={name}
                onClick={() => onClickProduct(type)}
              >
                <img alt="product image" src={imageSrc} />
                <p>{name}</p>
              </STDProductWrapper>
            ))
          : selectedMenu.includes('company')
          ? COMPANY_MENU_LIST.map((menu) => (
              <STDCompanyWrapper key={menu.type}>
                <p onClick={() => onClickCompanyMenu(menu.type)}>{menu.name}</p>
              </STDCompanyWrapper>
            ))
          : null}
      </STDProductList>
    </STDContainer>
  );
};

export default MainNav;

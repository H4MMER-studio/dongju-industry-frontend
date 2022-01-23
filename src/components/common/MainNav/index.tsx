import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import { mixins } from '@/styles';
import { ProductType } from '@/interfaces';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
  onClickProduct(product: ProductType['type']): void;
}

const STDContainer = styled.nav`
  ${mixins.flexSet('center', 'flex-start')}
  padding: 36px 20px 20px 30px;
  background-color: #383838;
  border-radius: 12px;
  height: 100%;
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
    color: #b7b7b7;
  }
`;

const MainNav: React.FC<IProps> = ({
  selectedMenu = '/',
  onClickMenu,
  onClickProduct,
}) => {
  const MENU_LIST = [
    { value: '제품', id: 'product' },
    { value: '회사', id: 'company' },
    { value: '공지', id: 'notice' },
    { value: '고객지원', id: 'customer-service' },
  ];

<<<<<<< HEAD
  const PRDUCT_LIST: {
    imageSrc: string;
    name: string;
    type: ProductType['type'];
  }[] = [
    {
      imageSrc: '/image/mainNav/product_1.png',
      name: '공기조화기',
      type: 'air-conditioner',
    },
    {
      imageSrc: '/image/mainNav/product_2.png',
      name: '동파방지댐퍼코일',
      type: 'freeze-protection-damper-coil',
    },
    {
      imageSrc: '/image/mainNav/product_3.png',
      name: '배기유니트',
      type: 'exhaust-unit',
    },
    {
      imageSrc: '/image/mainNav/product_4.png',
      name: '버블댐퍼',
      type: 'exhaust-unit',
    },
    {
      imageSrc: '/image/mainNav/product_5.png',
      name: '완전밀폐도어',
      type: 'fully-sealed-door',
    },
=======
  const PRDUCT_LIST = [
    { imageSrc: '/image/main_nav/product_1.png', name: '공기조화기' },
    { imageSrc: '/image/main_nav/product_2.png', name: '동파방지댐퍼코일' },
    { imageSrc: '/image/main_nav/product_3.png', name: '배기유니트' },
>>>>>>> c3982dc ([ENH] : 메인 페이지 작업)
  ];

  return (
    <STDContainer>
      <STDMainMenu>
        <img src="/image/main_nav/header_logo.png" />
        {MENU_LIST.map(({ id, value }, index) => (
          <Widgets.Button.Primary
            key={value}
            value={value}
            onClick={() => onClickMenu(id)}
            state={
              selectedMenu === `/${id === 'product' ? '' : id}`
                ? 'active'
                : 'default'
            }
            cssStyle={
              index === MENU_LIST.length - 1 ? '' : 'margin-bottom: 26px;'
            }
          />
        ))}
      </STDMainMenu>
      <STDProductList>
        {PRDUCT_LIST.map(({ imageSrc, name, type }) => (
          <STDProductWrapper key={name} onClick={() => onClickProduct(type)}>
            <img alt="product image" src={imageSrc} />
            <p>{name}</p>
          </STDProductWrapper>
        ))}
      </STDProductList>
    </STDContainer>
  );
};

export default MainNav;

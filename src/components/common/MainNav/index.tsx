import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import { mixins } from '@/styles';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
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

  img {
    width: 138px;
    margin-bottom: 11px;
  }

  p {
    font-size: 15px;
    color: #b7b7b7;
  }
`;

const MainNav: React.FC<IProps> = ({ selectedMenu = '/', onClickMenu }) => {
  const MENU_LIST = [
    { value: '제품', id: 'product' },
    { value: '회사', id: 'company' },
    { value: '공지', id: 'notice' },
    { value: '고객지원', id: 'customer-service' },
  ];

  const PRDUCT_LIST = [
    { imageSrc: '/image/mainNav/product_1.png', name: '공기조화기' },
    { imageSrc: '/image/mainNav/product_2.png', name: '동파방지댐퍼코일' },
    { imageSrc: '/image/mainNav/product_3.png', name: '배기유니트' },
  ];

  return (
    <STDContainer>
      <STDMainMenu>
        <img src="/image/mainNav/header_logo.png" />
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
        {PRDUCT_LIST.map(({ imageSrc, name }) => (
          <STDProductWrapper key={name}>
            <img alt="product image" src={imageSrc} />
            <p>{name}</p>
          </STDProductWrapper>
        ))}
      </STDProductList>
    </STDContainer>
  );
};

export default MainNav;

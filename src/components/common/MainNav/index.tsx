import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Widgets } from '@/components';
import { mixins } from '@/styles';
import { ProductType } from '@/interfaces';
import { IconHamburg, IconDownArrow, IconClose } from '@svg';

interface IProps {
  selectedMenu: string;
  params: {
    menu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification';
  };
  onClickMenu(menu: string): void;
  onClickProduct(product: ProductType['type']): void;
  onClickCompanyMenu: (
    companyMenu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification'
  ) => void;
}

const STDContainer = styled.nav`
  ${mixins.flexSet('center', 'flex-start')}
  height: calc(100% - 48px);
  padding: 36px 20px 20px 30px;
  margin: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const STDMainMenu = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  margin-right: 34px;

  > img {
    width: 96px;
    margin-bottom: 36px;
    cursor: pointer;
  }
`;

const STDMenuWrapper = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  height: 100%;
`;

const STDProductList = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
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

const STDMiniHeaderWrapper = styled.header<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 100000;
  width: 100%;
  ${({ isOpen }) => isOpen && 'height: 100%;'}
  background: white;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const STDMiniHeader = styled.div`
  ${mixins.flexSet('space-between')}
  padding: 13px 23px 13px 12px;

  img {
    width: 91px;
    cursor: pointer;
  }
`;

const STDHamburgButton = styled.button`
  width: 18px;
  height: 12px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const STDEmptySpace = styled.div`
  height: 62px;
`;

const STDSideMenuList = styled.ul`
  width: 100%;
  background: white;

  li {
  }
`;

const STDSideMenuTitleContainer = styled.div`
  overflow: hidden;
`;

const STDSideMenuTitleWrapper = styled.div<{ isOpen: boolean }>`
  ${mixins.flexSet('space-between')}
  width: 100%;
  padding: 18px 20px 18px 28px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 8px;
    object-fit: contain;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

type sideProductListProps = {
  isOpen?: boolean;
  maxHeight: number;
};

const STDSideProductListWrapper = styled.div<sideProductListProps>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? maxHeight : 0)}px;
  padding: 0 16px;
  transition: max-height 0.3s ease-in-out;
`;

const STDProductTwinWrapper = styled.div`
  ${mixins.flexSet()}
  margin-bottom: 16px;
`;

const STDSideProductItem = styled.div<{ marginRight?: number }>`
  ${mixins.flexSet('center', 'center', 'column')}
  margin-right: ${({ marginRight }) => marginRight ?? 0}px;
  flex: 1;
  padding: 24px 4px 20px;
  background: #f5f5f5;
  border-radius: 12px;

  img {
    width: 100%;
    margin-bottom: 11px;
  }

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #383838;
  }
`;

const STDCompanyMenuWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'center', 'column')}
  height: calc(100% - 72px);
  margin-top: 72px;
  padding: 0 26px 0 46px;
  border-left: 1px solid #e8e8e8;
`;

const STDCompanyMenuButton = styled.button<{ isSelected: boolean }>`
  margin-bottom: 30px;
  line-height: 24px;
  font-size: 18px;
  ${({ isSelected }) => isSelected && 'color: #2979FF;'}

  &:last-child {
    margin-bottom: 0;
  }
`;

const MainNav: React.FC<IProps> = ({
  selectedMenu = '/',
  params,
  onClickMenu,
  onClickProduct,
  onClickCompanyMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(null);
  const productList_ref = useRef<HTMLDivElement | null>(null);
  const MENU_LIST = [
    { value: '제품', id: 'product' },
    { value: '회사', id: 'company' },
    { value: '공지', id: 'notice' },
    { value: '고객지원', id: 'customer-service' },
  ];

  const COMPANY_MENU: {
    value: string;
    id: 'welcome' | 'history' | 'way-to-come' | 'performance' | 'certification';
  }[] = [
    { value: '인사말', id: 'welcome' },
    { value: '연혁', id: 'history' },
    { value: '오시는 길', id: 'way-to-come' },
    { value: '납품실적', id: 'performance' },
    { value: '인증', id: 'certification' },
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

  return (
    <>
      <STDContainer>
        <STDMainMenu>
          <img
            src="/image/main_nav/header_logo.png"
            onClick={() => onClickMenu('')}
          />
          <STDMenuWrapper>
            {MENU_LIST.map(({ id, value }, index) => (
              <Widgets.Button.Primary
                key={value}
                value={value}
                onClick={() =>
                  onClickMenu(
                    id === 'product'
                      ? 'product/air-conditioner'
                      : id === 'company'
                      ? 'company/welcome'
                      : id
                  )
                }
                state={selectedMenu.includes(id) ? 'active' : 'default'}
                cssStyle={
                  index === MENU_LIST.length - 1 ? '' : 'margin-bottom: 20px;'
                }
              />
            ))}
          </STDMenuWrapper>
        </STDMainMenu>
        {selectedMenu.includes('company') ? (
          <STDCompanyMenuWrapper>
            {COMPANY_MENU.map(({ id, value }) => (
              <STDCompanyMenuButton
                key={id}
                isSelected={id === params.menu}
                onClick={() => onClickCompanyMenu(id)}
              >
                {value}
              </STDCompanyMenuButton>
            ))}
          </STDCompanyMenuWrapper>
        ) : (
          <STDProductList>
            {PRDUCT_LIST.map(({ imageSrc, name, type }) => (
              <STDProductWrapper
                key={name}
                onClick={() => onClickProduct(type)}
              >
                <img alt="product image" src={imageSrc} />
                <p>{name}</p>
              </STDProductWrapper>
            ))}
          </STDProductList>
        )}
      </STDContainer>
      <STDMiniHeaderWrapper isOpen={isOpen}>
        <STDMiniHeader>
          <img
            alt="header logo"
            src="/image/main_nav/header_logo2.png"
            onClick={() => onClickMenu('')}
          />
          <STDHamburgButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
            {isOpen ? <IconClose /> : <IconHamburg />}
          </STDHamburgButton>
        </STDMiniHeader>
        {isOpen && (
          <STDSideMenuList>
            <STDSideMenuTitleContainer>
              <STDSideMenuTitleWrapper
                isOpen={selectedSubMenu === 'product'}
                onClick={() =>
                  setSelectedSubMenu(
                    selectedSubMenu === 'product' ? '' : 'product'
                  )
                }
              >
                제품 <IconDownArrow />
              </STDSideMenuTitleWrapper>
              <STDSideProductListWrapper
                ref={productList_ref}
                isOpen={selectedSubMenu === 'product'}
                maxHeight={productList_ref.current?.scrollHeight ?? 0}
              >
                <STDProductTwinWrapper>
                  <STDSideProductItem marginRight={11}>
                    <img src="/image/main_nav/sub_product1.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                  <STDSideProductItem>
                    <img src="/image/main_nav/sub_product2.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                </STDProductTwinWrapper>
                <STDProductTwinWrapper>
                  <STDSideProductItem marginRight={11}>
                    <img src="/image/main_nav/sub_product3.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                  <STDSideProductItem>
                    <img src="/image/main_nav/sub_product4.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                </STDProductTwinWrapper>
                <STDProductTwinWrapper>
                  <STDSideProductItem marginRight={11}>
                    <img src="/image/main_nav/sub_product5.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                  <STDSideProductItem>
                    <img src="/image/main_nav/sub_product6.png" />
                    <p>공기 조화기</p>
                  </STDSideProductItem>
                </STDProductTwinWrapper>
              </STDSideProductListWrapper>
            </STDSideMenuTitleContainer>
            <STDSideMenuTitleWrapper
              isOpen={selectedSubMenu === 'company'}
              onClick={() =>
                setSelectedSubMenu(
                  selectedSubMenu === 'company' ? '' : 'company'
                )
              }
            >
              회사 <IconDownArrow />
            </STDSideMenuTitleWrapper>
            <STDSideMenuTitleWrapper
              isOpen={selectedSubMenu === 'notice'}
              onClick={() =>
                setSelectedSubMenu(selectedSubMenu === 'notice' ? '' : 'notice')
              }
            >
              공지 <IconDownArrow />
            </STDSideMenuTitleWrapper>
            <STDSideMenuTitleWrapper
              isOpen={selectedSubMenu === 'customer'}
              onClick={() =>
                setSelectedSubMenu(
                  selectedSubMenu === 'customer' ? '' : 'customer'
                )
              }
            >
              고객지원 <IconDownArrow />
            </STDSideMenuTitleWrapper>
          </STDSideMenuList>
        )}
      </STDMiniHeaderWrapper>
      <STDEmptySpace />
    </>
  );
};

export default MainNav;

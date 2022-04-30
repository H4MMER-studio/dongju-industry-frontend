import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/widgets';
import { ProductMenu } from '@/interfaces';

interface Iprops {
  productMenu: ProductMenu;
  selectedMenu: string | null;
  clickContact: () => void;
  clickMenu: (id: string) => void;
}

const MenuLayout = styled.div`
  min-height: 135px;
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  overflow: hidden;
`;

const TopLayout = styled.div`
  padding: 16px;
`;

const BreadCrumb = styled.div`
  color: #383838;
  margin-bottom: 4px;
`;

const ProductNameLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled.div`
  font-size: 30px;
  color: #383838;
  font-weight: 600;
`;

const MenuButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLayout = styled.div``;

const MenuButton = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => (props.selected ? '#2962FF' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};

  &:hover {
    background-color: ${(props) => !props.selected && '#e8e8e8'};
    color: ${(props) => !props.selected && '##383838'};
  }
`;

const Menu: React.FC<Iprops> = ({
  productMenu,
  selectedMenu,
  clickContact,
  clickMenu,
}) => {
  // const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <MenuLayout>
      <TopLayout>
        <BreadCrumb>홈/제품/{productMenu?.productName ?? ''}</BreadCrumb>
        <ProductNameLayout>
          <ProductName>{productMenu?.productName ?? ''}</ProductName>
          <Button.Primary
            value="문의하기"
            state="active"
            onClick={clickContact}
            cssStyle={'width:72px; height:32px; font-size:16px; padding:0px'}
          />
        </ProductNameLayout>
      </TopLayout>
      <BottomLayout>
        <MenuButtonGroup>
          {productMenu?.menuList.map((menu) => {
            return (
              <MenuButton
                key={menu.id}
                selected={selectedMenu === menu.id}
                onClick={() => {
                  clickMenu(menu.id);
                }}
              >
                {menu.menu}
              </MenuButton>
            );
          })}
        </MenuButtonGroup>
      </BottomLayout>
    </MenuLayout>
  );
};

export default Menu;

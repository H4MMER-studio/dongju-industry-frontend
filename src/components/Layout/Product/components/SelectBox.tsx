import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'public/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import useResize from '@/hooks/useResize';
import { ProductType } from '@/interfaces/product';

interface SelectBoxProps {
  type: string;
  selectedProduct: string | null;
  onClick: (product: ProductType['type']) => void;
}

const SelectBoxLayout = styled.div`
  width: 100%;
  height: 100%;

  .css-6hp17o-MuiList-root-MuiMenu-list {
    padding: 0px;
  }

  .expand {
    transform: rotate(180deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
    margin-top: 8px;
  }

  .collapse {
    transform: rotate(360deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
`;

const Type = styled.div`
  font-size: 15px;
  color: #383838;
  margin-bottom: 4px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  padding: 0 20px 0 16px;
`;

const ExpandIcon = styled.div``;

const SelectedProduct = styled.div`
  font-size: 17px;
  color: #777777;
`;

const MenuLayout = styled.div`
  background-color: #f5f5f5;
`;

const SelectBox: React.FC<SelectBoxProps> = ({
  type,
  selectedProduct,
  onClick,
}) => {
  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const [] = useResize()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectBoxLayout>
      <Type>{type}</Type>
      <Box id="fade-menu" onClick={handleClick}>
        <SelectedProduct>{selectedProduct ?? '-'}</SelectedProduct>
        <ExpandIcon className={Boolean(anchorEl) ? 'expand' : 'collapse'}>
          <Icon.ExpandArrowIcon />
        </ExpandIcon>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
          disablePadding: true,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: { width: 332 },
        }}
        variant="selectedMenu"
      >
        <MenuLayout>
          {PRDUCT_LIST.map((product) => (
            <MenuItem
              key={product.name}
              onClick={() => {
                handleClose();
                onClick(product.type);
              }}
              style={{ color: '#777777', height: 48, fontSize: 17 }}
            >
              {product.name}
            </MenuItem>
          ))}
        </MenuLayout>
      </Menu>
    </SelectBoxLayout>
  );
};

export default SelectBox;

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
  {
    imageSrc: '/image/main_nav/product_6.png',
    name: '송풍기',
    type: 'air-blower',
  },
];

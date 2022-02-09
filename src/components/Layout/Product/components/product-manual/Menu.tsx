import React from 'react';
import styled from 'styled-components';

const MenuLayout = styled.div`
  min-height: 135px;
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

const Menu: React.FC = () => {
  return <MenuLayout></MenuLayout>;
};

export default Menu;

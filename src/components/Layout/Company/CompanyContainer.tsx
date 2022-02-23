import React from 'react';
import styled, { css } from 'styled-components';

interface Iprops {
  menu: 'welcome' | 'history' | 'way-to-come';
}

const STDContainer = styled.main``;

const CompanyContainer: React.FC<Iprops> = (props) => {
  return (
    <STDContainer>
      <div>회사 컨테이너</div>
    </STDContainer>
  );
};

export default CompanyContainer;

import React from 'react';
import styled from 'styled-components';
import { ICertificationMenuType } from '@/interfaces';
import ContentsSlider from './ContentsSlider';

interface IProps {
  type: ICertificationMenuType;
  clickCertificationTypeMenu: (type: ICertificationMenuType) => void;
}

const SDTCertificateContentsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 841px;
  background-color: #555555;
  padding: 36px;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const LeftNavSide = styled.nav`
  width: 217px;
  height: 100%;
  border-right: 1px solid #777777;
`;

const MenuValue = styled.div<{ selected: boolean }>`
  font-size: 28px;
  color: ${(props) => (props.selected ? '#fff' : '#949494')};
  font-weight: 600;
  margin-bottom: 36px;
  cursor: pointer;
`;

const RightSide = styled.div`
  width: 100%;
`;

const CertificateContents: React.FC<IProps> = ({
  type,
  clickCertificationTypeMenu,
}) => {
  return (
    <SDTCertificateContentsLayout>
      <LeftNavSide>
        {MENU_LIST.map((menu) => (
          <MenuValue
            key={menu.value}
            selected={menu.type === type}
            onClick={() => clickCertificationTypeMenu(menu.type)}
          >
            {menu.value}
          </MenuValue>
        ))}
      </LeftNavSide>
      <RightSide>
        <ContentsSlider />
      </RightSide>
    </SDTCertificateContentsLayout>
  );
};

export default CertificateContents;

const MENU_LIST: { value: string; type: ICertificationMenuType }[] = [
  {
    value: '등록증',
    type: 'registration',
  },
  {
    value: '주요인증',
    type: 'key-certifications',
  },
  {
    value: '특허증',
    type: 'patent',
  },
  {
    value: '시험성적서',
    type: 'test-report',
  },
];

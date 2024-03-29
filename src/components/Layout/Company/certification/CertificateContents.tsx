import React from 'react';
import styled from 'styled-components';
import { ICertificationMenuType, ICertification } from '@/interfaces';
import ContentsSlider from './ContentsSlider';
import useResize from '@/hooks/useResize';

interface IProps {
  type: ICertificationMenuType;
  certificationList: ICertification[];
  clickCertificationTypeMenu: (type: ICertificationMenuType) => void;
}

const SDTCertificateContentsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 841px;
  background-color: #555555;
  padding: 24px 36px;
  border-radius: 20px;

  @media (max-width: 768px) {
    display: block;
    min-height: 920px;
    border-radius: 0px;
    padding: 0px;
  }
`;

const LeftNavSide = styled.nav`
  width: 217px;
  height: 100%;
  border-right: 1px solid #777777;

  @media (max-width: 1211px) {
    min-width: 159px;
  }
`;

const MenuValue = styled.div<{ selected: boolean }>`
  font-size: 28px;
  color: ${(props) => (props.selected ? '#fff' : '#949494')};
  font-weight: 600;
  margin-bottom: 36px;
  cursor: pointer;

  @media (max-width: 1920px) {
    font-size: 25px;
  }
`;

const RightSide = styled.div`
  overflow: hidden;

  width: 951px;

  @media (max-width: 1612px) {
    width: 882px;
  }

  @media (max-width: 1475px) {
    width: 801px;
  }

  @media (max-width: 1400px) {
    width: 726px;
  }

  @media (max-width: 1366px) {
    width: 594px;
  }

  @media (max-width: 1193px) {
    width: 526px;
  }

  @media (max-width: 1023px) {
    width: calc(100% - 217px);
  }
`;

const MobileNavList = styled.div`
  height: 72px;
  padding: 24px 0px;
  margin: 0 24px;
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom: 1px solid #777777;
`;

const MobileScrollLayout = styled.div`
  display: flex;
  width: 387px;
`;
const MobileMenu = styled.div<{ selected: boolean }>`
  font-size: 20px;
  color: ${(props) => (props.selected ? '#fff' : '#949494')};
  margin-right: 28px;

  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;

const MobileSliderLayout = styled.div`
  margin-top: 20px;
`;

const CertificateContents: React.FC<IProps> = ({
  type,
  certificationList,
  clickCertificationTypeMenu,
}) => {
  const { width } = useResize();

  return (
    <SDTCertificateContentsLayout>
      {width > 768 ? (
        <>
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
            <ContentsSlider type={type} certificationList={certificationList} />
          </RightSide>
        </>
      ) : (
        <>
          <MobileNavList>
            <MobileScrollLayout>
              {MENU_LIST.map((menu) => (
                <MobileMenu
                  key={menu.type}
                  selected={menu.type === type}
                  onClick={() => clickCertificationTypeMenu(menu.type)}
                >
                  {menu.value}
                </MobileMenu>
              ))}
            </MobileScrollLayout>
          </MobileNavList>
          <MobileSliderLayout>
            <ContentsSlider type={type} certificationList={certificationList} />
          </MobileSliderLayout>
        </>
      )}
    </SDTCertificateContentsLayout>
  );
};

export default CertificateContents;

const MENU_LIST: { value: string; type: ICertificationMenuType }[] = [
  {
    value: '등록증',
    type: 'license',
  },
  {
    value: '주요인증',
    type: 'core-certification',
  },
  {
    value: '특허증',
    type: 'patent',
  },
  // {
  //   value: '시험성적서',
  //   type: 'test-result',
  // },
];

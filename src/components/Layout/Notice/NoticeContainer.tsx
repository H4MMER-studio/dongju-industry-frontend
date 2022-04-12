import React from 'react';
import styled from 'styled-components';
import * as NoticeComponents from './components';
import { Images } from 'public/image';
import { propsToClassKey } from '@mui/styles';

interface IProps {
  title: string;
  clickNoticeItem: (id: string) => void;
}

const NoticeContainerLayout = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-right: 24px;

  @media (max-width: 1366px) {
    width: 100%;
  }

  @media (max-width: 1023px) {
    padding: 0 16px;
    height: calc(100vh - 64px);
    align-items: stretch;
  }
`;

const ContentsLayout = styled.div`
  width: 100%;

  @media (max-width: 1023px) {
    margin-top: 64px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #2979ff;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 32px;
    margin-bottom: 48px;
  }
`;

const ListLayout = styled.div`
  height: 304px;
  margin-bottom: 48px;
`;

const PageNationLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
`;

const PageNumber = styled.div<{ isSelected: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => (props.isSelected ? '#2979ff' : 'none')};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isSelected ? '#fff' : '#383838')};
  margin-right: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? 'none' : '#DFDFDF')};
  }
`;

const NoticeContainer: React.FC<IProps> = ({ title, clickNoticeItem }) => {
  return (
    <NoticeContainerLayout>
      <ContentsLayout>
        <Title>{title}</Title>
        <ListLayout>
          <NoticeComponents.Item
            title={'IFB동파 방지'}
            date={'2020.01.26'}
            clickNoticeItem={() => clickNoticeItem('id')}
          />
        </ListLayout>
        <PageNationLayout>
          <ArrowIcon src={Images.PagenationLeft} style={{ marginRight: 20 }} />
          <PageNumber isSelected={true}>1</PageNumber>
          <PageNumber isSelected={false}>2</PageNumber>
          <ArrowIcon src={Images.PagenationRight} style={{ marginLeft: 8 }} />
        </PageNationLayout>
      </ContentsLayout>
    </NoticeContainerLayout>
  );
};

export default NoticeContainer;

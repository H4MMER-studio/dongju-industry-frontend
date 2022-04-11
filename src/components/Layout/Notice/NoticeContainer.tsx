import React from 'react';
import styled from 'styled-components';
import * as NoticeComponents from './components';
import { Images } from 'public/image';

interface IProps {
  type: '';
  clickNoticeItem: (id: string) => void;
}

const NoticeContainerLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentsLayout = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #2979ff;
  text-align: center;
`;

const ListLayout = styled.div`
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

const NoticeContainer: React.FC<IProps> = ({ clickNoticeItem }) => {
  return (
    <NoticeContainerLayout>
      <ContentsLayout>
        <Title>공지사항</Title>
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

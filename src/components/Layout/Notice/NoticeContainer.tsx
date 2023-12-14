import React from 'react';
import styled from 'styled-components';
import * as NoticeComponents from './components';
import { IDataList } from '@/interfaces';
import { Images } from 'public/image';
import { propsToClassKey } from '@mui/styles';

interface IProps {
  page: number;
  title: string;
  dataList: IDataList;
  clickNoticeItem: (id: string) => void;
  onClickPageHandler(page: number): void;
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

const NoticeContainer: React.FC<IProps> = ({
  page,
  title,
  dataList,
  clickNoticeItem,
  onClickPageHandler,
}) => {
  return (
    <NoticeContainerLayout>
      <ContentsLayout>
        <Title>{title}</Title>
        <ListLayout>
          {dataList.list?.map(({ _id, notice_title, created_at }) => {
            const date = created_at.split('T')[0].split('-').join('.');

            return (
              <NoticeComponents.Item
                key={_id}
                title={notice_title}
                date={date}
                clickNoticeItem={() => clickNoticeItem(_id)}
              />
            );
          })}
        </ListLayout>
        <PageNationLayout>
          <ArrowIcon
            onClick={() => {
              if (page !== 1) {
                onClickPageHandler(page - 1);
              }
            }}
            src={Images.PagenationLeft}
            style={{ marginRight: 20 }}
          />
          {Array(Math.round(dataList.size / 4))
            .fill(0)
            .map((_, index) => (
              <PageNumber
                isSelected={page === index + 1}
                onClick={() => onClickPageHandler(index + 1)}
              >
                {index + 1}
              </PageNumber>
            ))}
          <ArrowIcon
            onClick={() => {
              if (page !== Math.round(dataList.size / 4)) {
                onClickPageHandler(page + 1);
              }
            }}
            src={Images.PagenationRight}
            style={{ marginLeft: 8 }}
          />
        </PageNationLayout>
      </ContentsLayout>
    </NoticeContainerLayout>
  );
};

export default NoticeContainer;

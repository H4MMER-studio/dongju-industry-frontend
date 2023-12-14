import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';
import { INoticeDetailCurrent } from '@/interfaces';
import parse from 'html-react-parser';

interface IProps {
  list: INoticeDetailCurrent[];
  onClickGoToList(): void;
  onClickGoToDetail(id: number | string): void;
}

const LatestNoticeLayout = styled.div`
  margin-bottom: 75px;

  @media (max-width: 1024px) {
    padding-bottom: 120px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  cursor: pointer;

  &:nth-last-child(2) {
    margin-bottom: 58px;
  }

  @media (max-width: 1024px) {
    justify-content: start;
    align-items: stretch;
    flex-direction: row-reverse;
  }
`;

const LeftSide = styled.div``;

const DateText = styled.div`
  color: #448aff;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  ${mixins.ellipsis()}

  @media (max-width: 1024px) {
    align-items: stretch;
    height: auto;
  }
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
  color: #555555;
  ${mixins.ellipsis(2)}

  @media (max-width: 1024px) {
    align-items: stretch;
  }
`;

const ContentImage = styled.img`
  width: 190px;
  height: 134px;
  border-radius: 12px;
  background-color: #c4c4c4;

  @media (max-width: 1024px) {
    min-width: 122px;
    min-height: 122px;
    max-height: 122px;
    margin-right: 16px;
  }
`;

const GoToList = styled.div`
  color: #777777;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const LatestNotice: React.FC<IProps> = ({
  list,
  onClickGoToDetail,
  onClickGoToList,
}) => {
  console.log(list);

  return (
    <LatestNoticeLayout>
      <Title>최신글</Title>
      {list.map(
        ({ _id, created_at, notice_title, notice_content, notice_images }) => (
          <ContentLayout
            key={_id}
            onClick={() => onClickGoToDetail(_id)}
          >
            <LeftSide>
              <DateText>
                {created_at.split('T')[0].replaceAll('-', '.')}
              </DateText>
              <ContentTitle>{notice_title}</ContentTitle>
              <ContentText>{parse(notice_content)}</ContentText>
            </LeftSide>
            {(notice_images?.length ?? 0) > 0 && (
              <ContentImage
                alt={notice_images[0].name}
                src={notice_images[0].url}
              />
            )}
          </ContentLayout>
        )
      )}
      <GoToList onClick={onClickGoToList}>목록으로</GoToList>
    </LatestNoticeLayout>
  );
};

export default LatestNotice;

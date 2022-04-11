import React from 'react';
import styled from 'styled-components';

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

const ContentTItle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    align-items: stretch;
    height: auto;
  }
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  font-size: 15px;
  color: #555555;

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

const LatestNotice: React.VFC = () => {
  return (
    <LatestNoticeLayout>
      <Title>최신글</Title>
      <ContentLayout>
        <LeftSide>
          <DateText>22.02.17</DateText>
          <ContentTItle>동파방지 댐퍼코일 카타로그 입니다.</ContentTItle>
          <ContentText>
            권사를 영어로 Brokerage Firm 이라고도 한다. 증권사가 고객과 투자처를
            이어주는 중개인(broker)
          </ContentText>
        </LeftSide>
        <ContentImage src={undefined} />
      </ContentLayout>
      <ContentLayout>
        <LeftSide>
          <DateText>22.02.17</DateText>
          <ContentTItle>동파방지 댐퍼코일 카타로그 입니다.</ContentTItle>
          <ContentText>
            권사를 영어로 Brokerage Firm 이라고도 한다. 증권사가 고객과 투자처를
            이어주는 중개인(broker)
          </ContentText>
        </LeftSide>
        <ContentImage src={undefined} />
      </ContentLayout>
      <GoToList>목록으로</GoToList>
    </LatestNoticeLayout>
  );
};

export default LatestNotice;

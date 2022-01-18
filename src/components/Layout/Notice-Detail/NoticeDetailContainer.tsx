import React from 'react';
import styled from 'styled-components';

const NoticeDetailContainer: React.FC = () => {
  return (
    <NoticeDetailContainerLayout>
      <Header>
        <Title>타이틀을 입력해 주세요</Title>
        <WriterLayout>
          <Writer>작성자: {`글쓴이`}</Writer>
          <DateText>2020.01.20</DateText>
        </WriterLayout>
      </Header>
      <ContentsContainer>{'내용 입니다.'}</ContentsContainer>
    </NoticeDetailContainerLayout>
  );
};

export default NoticeDetailContainer;

const NoticeDetailContainerLayout = styled.div`
  width: 100%;
  padding: 16px 32px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const WriterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Writer = styled.div`
  color: #b7b7b7;
  font-size: 15px;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #b7b7b7;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  min-height: 480px;
  background-color: #777777;
`;

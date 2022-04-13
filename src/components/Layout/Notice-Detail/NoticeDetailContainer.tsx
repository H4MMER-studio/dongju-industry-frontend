import React from 'react';
import styled from 'styled-components';
import * as NoticeDetailComponents from './components';
import { Icon } from 'public/image';
import { INoticeDetail } from '@/interfaces';

interface IProps {
  detail: INoticeDetail;
}

const ScrollLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    overflow-y: visible;
    height: auto;
  }
`;

const NoticeDetailContainerLayout = styled.div`
  max-width: 902px;
  padding-top: 60px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding-top: 64px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const WriterLayout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const WriterProfilImage = styled.img`
  width: 48px;
  height: 48px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-right: 16px;
`;

const Writer = styled.div`
  color: #555555;
  font-size: 17x;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: #555555;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const SubText = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 84px;
  color: #383838;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 446px;
  background-color: #383838;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    height: 490px;
  }

  @media (max-width: 375px) {
    height: 186px;
  }
`;

const DownloadFileLayout = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff;
  border-radius: 8px;
  padding: 0px 16px 0px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  cursor: pointer;
`;

const DownloadFileName = styled.div`
  font-size: 15px;
  color: #2979ff;
`;
const NoticeDetailContainer: React.FC<IProps> = ({ detail }) => {
  return (
    <ScrollLayout>
      <NoticeDetailContainerLayout>
        <Header>
          <Title>동파방지 댐퍼코일 관련 카타로그 입니다.</Title>
          <WriterLayout>
            <WriterProfilImage src={undefined} />
            <div>
              <Writer>{`글쓴이`}작성</Writer>
              <DateText>2020.01.20</DateText>
            </div>
          </WriterLayout>
        </Header>
        <ContentImage src={undefined} />
        <DownloadFileLayout>
          <DownloadFileName>첨부파일 명</DownloadFileName>
          <Icon.DownloadIconBlue />
        </DownloadFileLayout>

        <SubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim praesent
          velit turpis aenean vestibulum id lectus urna, in. Urna risus nulla
          nulla condimentum lorem nunc. Lectus in lobortis tellus tincidunt. At
          libero ultrices lorem sed felis gravida commodo eget integer.
        </SubText>

        <NoticeDetailComponents.LatestNotice />
      </NoticeDetailContainerLayout>
    </ScrollLayout>
  );
};

export default NoticeDetailContainer;

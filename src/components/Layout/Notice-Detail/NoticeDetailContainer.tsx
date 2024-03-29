import React from 'react';
import styled from 'styled-components';
import * as NoticeDetailComponents from './components';
import { Icon } from 'public/image';
import { INoticeDetail } from '@/interfaces';
import parse from 'html-react-parser';

interface IProps {
  detail: INoticeDetail;
  onClickGoToList(): void;
  onClickGoToDetail(id: number | string): void;
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
  padding: 8px;
  padding-left: 10px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  margin-right: 16px;
  object-fit: contain;
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
  background-color: #383838;
  margin-bottom: 32px;
`;

const DownloadFileLayout = styled.a`
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

const DownloadFileName = styled.p`
  font-size: 15px;
  color: #2979ff;
`;
const NoticeDetailContainer: React.FC<IProps> = ({
  detail,
  onClickGoToList,
  onClickGoToDetail,
}) => {
  const newDate = detail.current.created_at?.split('-').join('.');

  return (
    <ScrollLayout>
      <NoticeDetailContainerLayout>
        <Header>
          <Title>{detail.current.notice_title}</Title>
          <WriterLayout>
            <WriterProfilImage src={'/image/favi.png'} />
            <div>
              <Writer>동주산업</Writer>
              <DateText>{newDate}</DateText>
            </div>
          </WriterLayout>
        </Header>
        {(detail.current.notice_images?.length ?? 0) > 0 && (
          <ContentImage
            alt={detail.current.notice_images[0].name}
            src={detail.current.notice_images[0].url}
          />
        )}
        {(detail.current.notice_files?.length ?? 0) > 0 &&
          detail.current.notice_files.map(({ name, url }) => {
            return (
              <DownloadFileLayout
                href={url}
                download={name}
                target='_blank'
              >
                <DownloadFileName>
                  {detail.current.notice_files[0].name}
                </DownloadFileName>
                <Icon.DownloadIconBlue />
              </DownloadFileLayout>
            );
          })}

        <SubText>{parse(detail.current.notice_content)}</SubText>
        <NoticeDetailComponents.LatestNotice
          list={detail?.latest ?? []}
          onClickGoToDetail={onClickGoToDetail}
          onClickGoToList={onClickGoToList}
        />
      </NoticeDetailContainerLayout>
    </ScrollLayout>
  );
};

export default NoticeDetailContainer;

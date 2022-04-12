import React from 'react';
import Router from 'next/router';
import { Notice } from '@/components';

const NoticeView: React.FC = () => {
  const route = Router;

  const clickNoticeItem = (id: string) => {
    route.push(`/notice/list/${id}`);
  };

  return (
    <Notice.Container title="공지사항" clickNoticeItem={clickNoticeItem} />
  );
};

export default NoticeView;

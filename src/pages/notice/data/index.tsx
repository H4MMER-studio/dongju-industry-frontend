import React from 'react';
import Router from 'next/router';
import { Notice } from '@/components';

const NoticeView: React.FC = () => {
  const route = Router;

  const clickNoticeItem = (id: string) => {
    route.push(`/notice/data/${id}`);
  };

  return <Notice.Container title="자료실" clickNoticeItem={clickNoticeItem} />;
};

export default NoticeView;

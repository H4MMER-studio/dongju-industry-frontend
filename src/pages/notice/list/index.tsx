import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Notice } from '@/components';
import { useGetStore } from '@/hooks';
import { noticeActions } from '@/store';

const NoticeView: React.FC = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const { noticeList } = useGetStore.notice();

  useEffect(() => {
    dispatch(
      noticeActions.getNoticeDataList({
        skip: 5 * page - 4,
        limit: 5 * page,
        type: 'notification',
      })
    );
  }, [page]);

  const clickNoticeItem = (id: string) => {
    router.push(`/notice/list/${id}`);
  };

  return (
    <Notice.Container
      page={page}
      dataList={noticeList}
      title="공지사항"
      clickNoticeItem={clickNoticeItem}
    />
  );
};

export default NoticeView;

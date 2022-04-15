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
  const { dataList } = useGetStore.notice();

  useEffect(() => {
    dispatch(
      noticeActions.getNoticeDataList({
        skip: 4 * page - 3,
        limit: 4 * page,
        type: 'archive',
      })
    );
  }, [page]);

  const clickNoticeItem = (id: string) => {
    router.push(`/notice/data/${id}`);
  };

  const onClickPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <Notice.Container
      page={page}
      dataList={dataList}
      title="자료실"
      clickNoticeItem={clickNoticeItem}
      onClickPageHandler={onClickPageHandler}
    />
  );
};

export default NoticeView;

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { NoticeDetail } from '@/components';
import { noticeActions } from '@/store';
import { useGetStore } from '@/hooks';

const NoticeDetailView: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query as { id: string };
  const { noticeDetail } = useGetStore.notice();

  useEffect(() => {
    dispatch(noticeActions.getNoticeDataDetail({ id }));
  }, []);

  return <NoticeDetail.Container detail={noticeDetail} />;
};

export default NoticeDetailView;

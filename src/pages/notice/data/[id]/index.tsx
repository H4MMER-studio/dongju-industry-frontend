import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { NoticeDetail } from '@/components';
import { noticeActions, wrapper } from '@/store';
import { useGetStore } from '@/hooks';

interface IProps {
  currentId: number | string;
}

const NoticeDetailView: React.FC<IProps> = ({ currentId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query as { id: string };
  const { noticeDetail } = useGetStore.notice();

  useEffect(() => {
    dispatch(noticeActions.getNoticeDataDetail({ id: id ?? currentId }));
  }, [id]);

  const onClickGoToList = () => {
    router.push('/notice/data');
  };

  const onClickGoToDetail = (id: string | number) => {
    router.push(`/notice/data/${id}`);
  };

  return noticeDetail ? (
    <NoticeDetail.Container
      detail={noticeDetail}
      onClickGoToList={onClickGoToList}
      onClickGoToDetail={onClickGoToDetail}
    />
  ) : (
    <></>
  );
};

export default NoticeDetailView;

export const getServerSideProps = wrapper.getServerSideProps(
  (_) => async (ctx) => {
    return {
      props: {
        currentId: ctx.params.id,
      },
    };
  }
);

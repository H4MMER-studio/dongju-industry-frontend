import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface Iprops {
  title: string;
  date: string;
  clickNoticeItem: () => void;
}

const ItemLayout = styled.div`
  ${mixins.flexSet('space-between')}
  width: 100%;
  height: 64px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const NoticeText = styled.div`
  color: #448aff;
  font-size: 18px;
  font-weight: 600;
  margin-right: 8px;
`;

const NoticeTitle = styled.div`
  color: #383838;
  font-weight: 600;
  ${mixins.ellipsis()}
`;

const DateText = styled.div`
  font-size: 16px;
  font-weight: 400px;
  color: #555555;
`;

const Item: React.FC<Iprops> = ({ title, date, clickNoticeItem }) => {
  return (
    <ItemLayout onClick={clickNoticeItem}>
      <Left>
        <NoticeText>NOTICE</NoticeText>
        <NoticeTitle>{title}</NoticeTitle>
      </Left>
      <DateText>{date}</DateText>
    </ItemLayout>
  );
};

export default Item;

import React from 'react';
import styled from 'styled-components';

interface Iprops {
  title?: string;
  id?: string;
  applyList: string[];
  isSelected: boolean;
  containerStyle?: string;
}

type ApplyInfoCardLayoutProps = {
  containerStyle?: string;
  isSelected: boolean;
};

const ApplyInfoCardLayout = styled.div<ApplyInfoCardLayoutProps>`
  width: 100%;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.isSelected && '0px 0px 12px 4px rgba(41, 121, 255, 0.12)'};
  ${({ containerStyle }) => containerStyle}
`;
const Title = styled.div`
  color: #2979ff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const UnorderedList = styled.ul`
  list-style: inside;
`;

const List = styled.li`
  font-size: 19px;
  white-space: pre;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
`;

const ApplyInfoCard: React.FC<Iprops> = ({
  title,
  id,
  applyList,
  isSelected,
  containerStyle,
}) => {
  return (
    <ApplyInfoCardLayout
      id={id}
      containerStyle={containerStyle}
      isSelected={isSelected}
    >
      <Title>{title ?? '적용'}</Title>
      <UnorderedList>
        {applyList.map((value) => {
          return <List key={value}>{value}</List>;
        })}
      </UnorderedList>
    </ApplyInfoCardLayout>
  );
};
export default ApplyInfoCard;

import React from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
  state: 'active' | 'default';
}

const Primary: React.FC<IProps> = (props) => {
  return <PrimaryButton state={props.state}>{props.value}</PrimaryButton>;
};

export default Primary;

interface PrimaryButtonProps {
  state: 'active' | 'default';
}

const PrimaryButton = styled.button<PrimaryButtonProps>`
  padding: 6px 12px;
  border-radius: 18px;
  background-color: ${(props) => (props.state === 'active' ? '#2979FF' : '')};
  color: ${(props) => (props.state === 'active' ? '#fff' : '#fff')};
  font-size: 18px;
`;

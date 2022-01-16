import React from 'react';

interface IProps {
  onClickSetTest(test: string): void;
}

const HomeContainter: React.FC<IProps> = ({ onClickSetTest }) => {
  return (
    <div>
      <button onClick={() => onClickSetTest('change')}>click</button>
    </div>
  );
};

export default HomeContainter;

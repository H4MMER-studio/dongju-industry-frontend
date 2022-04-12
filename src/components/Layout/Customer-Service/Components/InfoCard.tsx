import React from 'react';
import styled from 'styled-components';

interface Iprops {
  backgroundImageSrc: string;
}

const InfoCard: React.FC<Iprops> = ({ backgroundImageSrc }) => {
  return (
    <InfoCardLayout style={{ backgroundImage: `url(${backgroundImageSrc})` }}>
      <InfoText>
        {
          'E-mail\ndongju91@hanmail.net\n\n전화\n032-579-8272\n\n팩스\n031-357-7462'
        }
      </InfoText>
    </InfoCardLayout>
  );
};

export default InfoCard;

const InfoCardLayout = styled.div`
  position: relative;
  width: 270px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  border-radius: 20px;
`;

const InfoText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
  font-size: 20px;
  color: #fff;
`;

import React from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@/styles';

const topH3Style = css`
  ${mixins.flexSet()}
  width: 76px;
  background-color: #c8c8c8;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
`;

const h3Style = css`
  ${mixins.flexSet()}
  width: 50px;
  padding: 0 8px;
  background-color: #dfdfdf;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  border-right: 1px solid #b7b7b7;
`;

const STDContainer = styled.div`
  overflow: auto;
  margin-bottom: 36px;
`;

const STDWrapper = styled.div`
  width: 1064px;
  border-radius: 12px;
  border: 1px solid #b7b7b7;
  background-color: white;
  overflow: hidden;
`;

const STDAirConditionWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #b7b7b7;

  > h3 {
    ${topH3Style}
  }
`;

const STDSeasonWapper = styled.div`
  flex: 1;
  border-right: 1px solid #b7b7b7;
`;

const STDSummerWinterWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #b7b7b7;

  &:last-child {
    border-bottom: 0;
  }

  > h3 {
    ${h3Style}
  }

  > div {
    flex: 1;
  }
`;

const STDCoilDetailContainer = styled.div`
  flex: 1;
`;

const STDCoilDetailWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #b7b7b7;

  &:last-child {
    border-bottom: 0;
  }

  > h3 {
    ${h3Style}
    width: 83px;
    background-color: #dfdfdf;
  }

  > div {
    flex: 1;
  }
`;

const STDMainContentWrapper = styled.div<{ cssStyle?: string }>`
  ${mixins.flexSet()}
  border-bottom: 1px solid #b7b7b7;

  &:last-child {
    border-bottom: 0;
  }

  h4 {
    padding: 10px 8px;
    font-weight: normal;
    font-size: 19px;
    line-height: 36px;
    background-color: #f5f5f5;
    border-right: 1px solid #b7b7b7;

    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }

  p {
    width: 100%;
    flex: 1;
    padding: 10px 0;
    font-weight: normal;
    font-size: 19px;
    line-height: 36px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }

  ${({ cssStyle }) => cssStyle}
`;

const STDVaporPressureWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #b7b7b7;

  > h3 {
    ${topH3Style}
  }

  p {
    flex: 1;
    padding: 4.5px 16px;
    font-size: 19px;
    line-height: 36px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }
`;

const STDWindSpeedWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #b7b7b7;

  > h3 {
    ${topH3Style}
    padding: 2.5px 10px;
    word-break: keep-all;
  }

  p {
    ${mixins.flexSet()}
    flex: 1;
    padding: 4.5px 16px;
    font-size: 19px;
    line-height: 36px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }
`;

const STDNoticeWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}

  > h3 {
    ${topH3Style}
    padding: 2.5px 10px;
    word-break: keep-all;
  }

  > div {
    flex: 1;
    padding: 10px 16px;

    ul {
      margin-left: 24px;
      li {
        list-style: disc;
        font-size: 19px;
        line-height: 36px;

        @media (max-width: 1024px) {
          font-size: 17px;
        }
      }
    }
  }
`;

const DesignCondition1 = () => {
  return (
    <STDContainer>
      <STDWrapper>
        <STDAirConditionWrapper>
          <h3>????????????</h3>
          <STDSeasonWapper>
            <STDSummerWinterWrapper>
              <h3>??????</h3>
              <div>
                <STDMainContentWrapper>
                  <h4>?????? ????????????</h4>
                  <p>27.8???</p>
                </STDMainContentWrapper>
                <STDMainContentWrapper>
                  <h4>?????? ????????????</h4>
                  <p>22.4???</p>
                </STDMainContentWrapper>
              </div>
            </STDSummerWinterWrapper>
            <STDSummerWinterWrapper>
              <h3>??????</h3>
              <div>
                <STDMainContentWrapper>
                  <h4>?????? ????????????</h4>
                  <p>15???</p>
                </STDMainContentWrapper>
                <STDMainContentWrapper>
                  <h4>?????? ????????????</h4>
                  <p></p>
                </STDMainContentWrapper>
              </div>
            </STDSummerWinterWrapper>
          </STDSeasonWapper>
          <STDCoilDetailContainer>
            <STDCoilDetailWrapper>
              <h3>Cooling Coil</h3>
              <div>
                <STDMainContentWrapper>
                  <h4>????????????</h4>
                  <p>7</p>
                </STDMainContentWrapper>
                <STDMainContentWrapper>
                  <h4>????????????</h4>
                  <p>12</p>
                </STDMainContentWrapper>
              </div>
            </STDCoilDetailWrapper>
            <STDCoilDetailWrapper>
              <h3>?????? Coil</h3>
              <div>
                <STDMainContentWrapper>
                  <h4>????????????</h4>
                  <p>60</p>
                </STDMainContentWrapper>
                <STDMainContentWrapper>
                  <h4>????????????</h4>
                  <p>50</p>
                </STDMainContentWrapper>
              </div>
            </STDCoilDetailWrapper>
          </STDCoilDetailContainer>
        </STDAirConditionWrapper>
        <STDVaporPressureWrapper>
          <h3>?????????</h3>
          <p>2???/???</p>
        </STDVaporPressureWrapper>
        <STDWindSpeedWrapper>
          <h3>?????? ?????? ??????</h3>
          <p>2.6m/sec</p>
        </STDWindSpeedWrapper>
        <STDNoticeWrapper>
          <h3>????????????</h3>
          <div>
            <ul>
              <li>????????????, ????????? ???????????? ??????</li>
              <li>COIL ?????? ????????? 2.5m/sec ~ 3m/sec??? ???????????? ????????????.</li>
              <li>????????????</li>
              <ul>
                <li>COIL ???????????? - ???????????? : 2???</li>
                <li>FAN??? BACKWARD FAN??? ???????????????.</li>
              </ul>
            </ul>
          </div>
        </STDNoticeWrapper>
      </STDWrapper>
    </STDContainer>
  );
};

export default DesignCondition1;

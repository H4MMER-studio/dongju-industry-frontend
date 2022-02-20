import React from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@/styles';

const h3Style = css`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 28.8px;
`;

const STDContainer = styled.article`
  flex: 1;
  padding: 8px 16px;
`;

const STDCommentContainer = styled.div`
  ${mixins.flexSet('center', 'stretch')}
`;

const STDCommentWrapper = styled.div`
  flex: 1;
  margin-right: 36px;
  padding-bottom: 24px;
  border-bottom: 1px solid #777777;

  &:last-child {
    margin-right: 0;
  }
  h3 {
    ${h3Style}
  }

  p {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const STDWayToComeContainer = styled.div`
  ${mixins.flexSet('center', 'stretch')}
  padding-bottom: 24px;
  border-bottom: 1px solid #777777;
`;

const STDWayToComeWrapper = styled.div`
  flex: 1;
  padding-top: 12px;
  margin-right: 36px;

  &:last-child {
    margin-right: 0;
  }
  h3 {
    ${h3Style}
    margin-bottom: 16px;
  }
`;

const STDWayToComeDetail = styled.ul`
  border: 1px solid black;

  li {
    ${mixins.flexSet('flex-start')}
    height: 44px;
    border-bottom: 1px solid black;

    &:last-child {
      border-bottom: none;
    }

    b {
      ${mixins.flexSet()}
      width: 76px;
      height: 100%;
      border-right: 1px solid black;
      font-size: 16px;
      font-weight: 600;
    }

    p {
      ${mixins.flexSet('flex-start')}
      padding-left: 16px;
      font-size: 15px;
    }
  }
`;

const STDCompanyStoryContainer = styled.div`
  padding-top: 12px;

  h3 {
    ${h3Style}
  }
`;

const CompanyContainer: React.FC = () => {
  return (
    <STDContainer>
      <STDCommentContainer>
        <STDCommentWrapper>
          <h3>인사말</h3>
          <p>
            고객 여러분, 안녕하십니까? 주식회사 동주산업을 찾아주셔서
            감사합니다.
            <br />
            <br />
            저희 회사는 1990년 창립이래 공조산업 분야를 비롯하여
            동파방지댐퍼코일이 국내에 첫발을 디딘 1998년부터 동파방지댐퍼코일을
            제공하며 국내 최고의 기술력과 경험을 축적하여 왔습니다.
            <br />
            <br />
            저희는 그러한 기술력과 경험을 바탕으로 여러분의 성공 비지니스에
            든든한 파트너로서 앞으로도 최고의 서비스를 제공하고자 합니다.
          </p>
        </STDCommentWrapper>
        <STDCommentWrapper>
          <h3>고객과 함께하는 성장</h3>
          <p>
            저희 회사는 '고객과 함께하는 성장'이라는 슬로건 아래 끊임없는
            경영혁신을 통한 대 고객 서비스 강화와 내실 경영을 구현하여 고객과
            함께 성공할 수 있는 비지니스를 창출해 나갈 것입니다.
            <br />
            <br />
            고객 여러분의 사업번창과 건승을 기원합니다. 감사합니다.
            <br />
            <br />
            주식회사 동주산업 대표이사 전춘식
          </p>
        </STDCommentWrapper>
      </STDCommentContainer>
      <STDWayToComeContainer>
        <STDWayToComeWrapper>
          <h3>오시는 길</h3>
        </STDWayToComeWrapper>
        <STDWayToComeWrapper>
          <h3>오시는 길</h3>
          <STDWayToComeDetail>
            <li>
              <b>본사</b>
              <p>경기도 화성시 남양읍 주석로 228-6 1층</p>
            </li>
            <li>
              <b>전화</b>
              <p>032-579-8272</p>
            </li>
            <li>
              <b>팩스</b>
              <p>031-357-7462</p>
            </li>
            <li>
              <b>이메일</b>
              <p>dongju97@hanmail.net</p>
            </li>
          </STDWayToComeDetail>
        </STDWayToComeWrapper>
      </STDWayToComeContainer>
      <STDCompanyStoryContainer>
        <h3>연혁</h3>
      </STDCompanyStoryContainer>
    </STDContainer>
  );
};

export default CompanyContainer;

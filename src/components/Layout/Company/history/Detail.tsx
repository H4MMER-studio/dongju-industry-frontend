import React from 'react';
import styled from 'styled-components';
import { useGetStore } from '@/hooks';
import { KeyOffTwoTone } from '@mui/icons-material';
import { IHistory } from '@/interfaces';

const STDDetailLayout = styled.div`
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c8c8c8;
`;

const YearRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 40px;
  background-color: #2979ff;
  color: #fff;
  border-radius: 20px;
  font-size: 20px;
  margin-bottom: 24px;
`;

const YearHistoryLayout = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 20px;
  padding: 16px 20px;
  margin-bottom: 12px;

  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LeftSection = styled.div`
  .year {
    height: 36px;
    font-weight: bold;
    font-size: 30px;
    color: #448aff;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      font-size: 24px;
    }
  }
`;

const RightSection = styled.div`
  margin-left: 32px;
`;

const MonthHistoryLayout = styled.div`
  margin-bottom: 20px;

  .month {
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    color: #383838;
    margin-bottom: 4px;

    @media (max-width: 1023px) {
      font-size: 17px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailContents = styled.div`
  font-size: 19px;
  margin-bottom: 12px;
  color: #555555;

  @media (max-width: 1023px) {
    font-size: 17px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Detail: React.FC = () => {
  const { historyList } = useGetStore.history();

  return (
    <>
      {historyList.map(({ start_year, value }) => {
        const newValue = {} as {
          [key: string]: (Omit<IHistory, 'history_content'> & {
            history_content: string[];
          })[];
        };
        value.forEach((v) => {
          if ((newValue[v.history_year]?.length ?? 0) > 0) {
            let isExist = false;
            newValue[v.history_year] = newValue[v.history_year].map((v2) => {
              if (v2.history_month === v.history_month) {
                isExist = true;

                return {
                  ...v2,
                  history_content: [...v2.history_content, v.history_content],
                };
              } else {
                return {
                  ...v2,
                };
              }
            });
            if (!isExist) {
              newValue[v.history_year].push({
                ...v,
                history_content: [v.history_content],
              });
            }
          } else {
            newValue[v.history_year] = [
              { ...v, history_content: [v.history_content] },
            ];
          }
        });

        return (
          <STDDetailLayout key={start_year}>
            <YearRange>
              {start_year}~{Number(start_year) + 9}
            </YearRange>
            {Object.keys(newValue)
              .reverse()
              .map((year) => {
                return (
                  <YearHistoryLayout key={year}>
                    <LeftSection>
                      <div className="year">{year}</div>
                    </LeftSection>
                    <RightSection>
                      {newValue[year]?.map(
                        ({ _id, history_month, history_content }) => (
                          <MonthHistoryLayout key={_id}>
                            <div className="month">{history_month}월</div>
                            {history_content.reverse().map((content) => (
                              <DetailContents>{content}</DetailContents>
                            ))}
                          </MonthHistoryLayout>
                        )
                      )}
                    </RightSection>
                  </YearHistoryLayout>
                );
              })}
          </STDDetailLayout>
        );
      })}
    </>
  );
};

export default Detail;

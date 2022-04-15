import React, { useState, useEffect } from 'react';
import * as S from './index.style';
import { useDispatch } from 'react-redux';
import { performanceActions } from '@/store';
import { useGetStore } from '@/hooks';
import { Images } from 'public/image';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';

const Performance: React.FC = () => {
  const [selectedSearchTitle, setSelectedSearchTitle] = useState('납품처');
  const [page, setPage] = useState(1);
  const [modalOnAt, setModalOnAt] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderModalOn, setOrderModalOn] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('new');
  const dispatch = useDispatch();
  const { deliveryList } = useGetStore.performance();

  useEffect(() => {
    document.onclick = onClickCloseModal;

    return () => {
      document.onmousedown = null;
    };
  }, []);

  useEffect(() => {
    dispatch(
      performanceActions.getDeliveryList({
        isAsc: selectedOrder !== 'new',
        skip: 10 * page - 9,
        limit: 10 * page,
      })
    );
  }, [selectedOrder, page]);

  const onClickCloseModal = () => {
    setModalOnAt('');
    setOrderModalOn(false);
  };

  const onClickPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.SearchBox>
          <S.DeliveryBox
            onClick={(e) => {
              e.stopPropagation();
              setModalOnAt(modalOnAt === 'searchTitle' ? '' : 'searchTitle');
            }}
          >
            {selectedSearchTitle}
            <div>
              <IconDownArrowSmall />
              <p />
            </div>
          </S.DeliveryBox>
          <S.SearchWrapper>
            <input
              onClick={(e) => {
                e.stopPropagation();
                setModalOnAt('searchText');
              }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="검색어를 입력하세요."
            />
            <IconSearch />
          </S.SearchWrapper>
          {modalOnAt === 'searchTitle' && (
            <S.DeliverySelectBox onClick={(e) => e.stopPropagation()}>
              <S.DeliverySelectText
                isSelected={selectedSearchTitle === '납품처'}
                onClick={() => {
                  setSelectedSearchTitle('납품처');
                  setModalOnAt('');
                }}
              >
                납품처
              </S.DeliverySelectText>
              <S.DeliverySelectText
                isSelected={selectedSearchTitle === '품명'}
                onClick={() => {
                  setSelectedSearchTitle('품명');
                  setModalOnAt('');
                }}
              >
                품명
              </S.DeliverySelectText>
            </S.DeliverySelectBox>
          )}
          {modalOnAt === 'searchText' && (
            <S.DeliverySearchTextBox onClick={(e) => e.stopPropagation()}>
              {['예시1', '예시2', '예시3', '예시4'].map((text) => (
                <S.DeliverySearchText
                  key={text}
                  onClick={() => {
                    setSearchText(text);
                    setModalOnAt('');
                  }}
                >
                  {text}
                </S.DeliverySearchText>
              ))}
            </S.DeliverySearchTextBox>
          )}
        </S.SearchBox>
        <S.OrderButton
          onClick={(e) => {
            e.stopPropagation();
            setOrderModalOn(orderModalOn ? false : true);
          }}
        >
          {selectedOrder === 'new' ? '최신순' : '오래된순'}
          <IconDownArrowGray />
          {orderModalOn && (
            <S.SelectOrderBox onClick={(e) => e.stopPropagation()}>
              <S.DeliverySelectText
                isSelected={selectedOrder === 'new'}
                onClick={(e) => {
                  setSelectedOrder('new');
                  setOrderModalOn(false);
                }}
              >
                최신순
              </S.DeliverySelectText>
              <S.DeliverySelectText
                isSelected={selectedOrder === 'old'}
                onClick={(e) => {
                  setSelectedOrder('old');
                  setOrderModalOn(false);
                }}
              >
                오래된순
              </S.DeliverySelectText>
            </S.SelectOrderBox>
          )}
        </S.OrderButton>
      </S.FilterWrapper>
      <S.TableContainer>
        <S.TitleWrapper>
          <S.LongTitle>납품처</S.LongTitle>
          <S.LongTitle>품명 및 규격</S.LongTitle>
          <S.ShortTitle>수량</S.ShortTitle>
          <S.ShortTitle>날짜</S.ShortTitle>
          <S.LongTitle>비고</S.LongTitle>
        </S.TitleWrapper>
        <div>
          {deliveryList?.list?.map(
            ({
              _id,
              delivery_amount,
              delivery_month,
              delivery_year,
              delivery_product,
              delivery_supplier,
              delivery_reference,
            }) => (
              <S.ContentWrapper key={_id}>
                <S.LongContent>{delivery_supplier}</S.LongContent>
                <S.LongContent>{delivery_product}</S.LongContent>
                <S.ShortContent>{delivery_amount}</S.ShortContent>
                <S.ShortContent>
                  {delivery_year}.{delivery_month}
                </S.ShortContent>
                <S.LongContent>{delivery_reference}</S.LongContent>
              </S.ContentWrapper>
            )
          )}
        </div>
      </S.TableContainer>
      <S.PageNationLayout>
        <S.ArrowIcon
          onClick={() => {
            if (page !== 1) {
              onClickPageHandler(page - 1);
            }
          }}
          src={Images.PagenationLeft}
          style={{ marginRight: 20 }}
        />
        {Array(Math.round(deliveryList.size / 10))
          .fill(0)
          .map((_, index) => (
            <S.PageNumber
              isSelected={page === index + 1}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </S.PageNumber>
          ))}

        <S.ArrowIcon
          onClick={() => {
            if (page !== Math.round(deliveryList.size / 10)) {
              onClickPageHandler(page + 1);
            }
          }}
          src={Images.PagenationRight}
          style={{ marginLeft: 8 }}
        />
      </S.PageNationLayout>
    </S.Container>
  );
};

export default Performance;

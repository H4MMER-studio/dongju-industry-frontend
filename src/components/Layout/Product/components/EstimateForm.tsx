import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'public/image';
import InputBox from './InputBox';
import SelectBox from './SelectBox';
import { ProductType, IForm } from '@/interfaces';

interface Iprops {
  selectedProduct: ProductType['type'];
  closeForm: () => void;
  clickSubmit: (form: IForm) => void;
}

const EstimateFormLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const CloseIconLayout = styled.div`
  cursor: pointer;
`;

const ContentsLayout = styled.div``;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;

  &:nth-last-child(1) {
    margin-bottom: 26px;
  }

  @media (max-width: 1023px) {
    display: block;
    margin-bottom: 22px;
  }
`;

const InputBoxLayout = styled.div`
  position: relative;
  margin-right: 16px;

  @media (max-width: 1023px) {
    margin-right: 0px;
    margin-bottom: 22px;
  }
`;

const TextAreaLayout = styled.div`
  position: relative;
  margin-bottom: 8px;

  @media (max-width: 1023px) {
    margin-bottom: 28px;
  }
`;

const TextAreaLabel = styled.div`
  color: #383838;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 328px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 17px;
`;

const SelectBoxLayout = styled.div`
  position: relative;
  width: 332px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    padding-bottom: 28px;
  }
`;

const SubmitButton = styled.button`
  width: 95px;
  height: 48px;
  background-color: #2979ff;
  border-radius: 16px;
  font-size: 18px;
  color: #fff;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const WarningMessage = styled.div`
  position: absolute;
  right: 0px;
  font-size: 13px;
  color: #ff334b;
`;

const Layouts = styled.div`
  position: relative;
`;

const EstimateForm: React.FC<Iprops> = ({
  selectedProduct,
  closeForm,
  clickSubmit,
}) => {
  const [form, setForm] = useState<IForm>({
    inquiry_type: 'estimate',
    inquiry_title: '',
    inquiry_content: '',
    inquiry_person_name: '',
    inquiry_company_name: '',
    inquiry_phone_number: '',
    inquiry_email: '',
    inquiry_product_type: selectedProduct,
  });

  const [isCheckValue, setIsCheckValue] = useState(false);

  const submitForm = () => {
    if (
      form.inquiry_title &&
      form.inquiry_content &&
      form.inquiry_person_name &&
      form.inquiry_company_name &&
      form.inquiry_phone_number &&
      form.inquiry_email &&
      form.inquiry_product_type
    ) {
      clickSubmit(form);
    } else {
      setIsCheckValue(true);
    }
  };

  return (
    <EstimateFormLayout>
      <Header>
        <Title>고객문의</Title>
        <CloseIconLayout onClick={closeForm}>
          <Icon.CloseIcon />
        </CloseIconLayout>
      </Header>
      <ContentsLayout>
        <Layout>
          <InputBoxLayout>
            <InputBox
              type="회사명"
              placeholder="회사명을 입력해주세요"
              onChange={(value) => {
                setForm({ ...form, inquiry_company_name: value });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_company_name && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </InputBoxLayout>
          <Layouts>
            <InputBox
              type="제목"
              placeholder="제목을 입력해주세요"
              onChange={(value) => {
                setForm({ ...form, inquiry_title: value });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_title && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </Layouts>
        </Layout>
        <Layout>
          <InputBoxLayout>
            <InputBox
              type="담당자 성함"
              placeholder="성함을 입력해 주세요"
              onChange={(value) => {
                setForm({ ...form, inquiry_person_name: value });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_person_name && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </InputBoxLayout>
          <Layouts>
            <InputBox
              type="연락처"
              placeholder="연락처를 입력해 주세요"
              onChange={(value) => {
                setForm({ ...form, inquiry_phone_number: value });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_phone_number && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </Layouts>
        </Layout>
        <Layout>
          <InputBoxLayout>
            <InputBox
              type="e-mail"
              placeholder="e-mail을 입력해주세요"
              onChange={(value) => {
                setForm({ ...form, inquiry_email: value });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_email && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </InputBoxLayout>
          <SelectBoxLayout>
            <SelectBox
              type="제품"
              selectedProduct={
                PRDUCT_LIST.find(
                  (product) => product.type === form.inquiry_product_type
                )?.name
              }
              onClick={(productType) => {
                setForm({ ...form, inquiry_product_type: productType });
                setIsCheckValue(false);
              }}
            />
            {isCheckValue && !form.inquiry_product_type && (
              <WarningMessage>답변을 입력해주세요.</WarningMessage>
            )}
          </SelectBoxLayout>
        </Layout>
        <TextAreaLayout>
          <TextAreaLabel>상세내용</TextAreaLabel>
          <TextArea
            placeholder="상세내용을 입력해 주세요"
            onChange={(e) => {
              setForm({ ...form, inquiry_content: e.target.value });
              setIsCheckValue(false);
            }}
          />
          {isCheckValue && !form.inquiry_content && (
            <WarningMessage>답변을 입력해주세요.</WarningMessage>
          )}
        </TextAreaLayout>
        <ButtonLayout>
          <SubmitButton onClick={submitForm}>제출하기</SubmitButton>
        </ButtonLayout>
      </ContentsLayout>
    </EstimateFormLayout>
  );
};

export default EstimateForm;

const PRDUCT_LIST: {
  imageSrc: string;
  name: string;
  type: ProductType['type'];
}[] = [
  {
    imageSrc: '/image/main_nav/product_1.png',
    name: '공기조화기',
    type: 'air-conditioner',
  },
  {
    imageSrc: '/image/main_nav/product_2.png',
    name: '동파방지댐퍼코일',
    type: 'freeze-protection-damper-coil',
  },
  {
    imageSrc: '/image/main_nav/product_3.png',
    name: '배기유니트',
    type: 'exhaust-unit',
  },
  {
    imageSrc: '/image/main_nav/product_4.png',
    name: '버블댐퍼',
    type: 'bubble-damper',
  },
  {
    imageSrc: '/image/main_nav/product_5.png',
    name: '완전밀폐도어',
    type: 'fully-sealed-door',
  },
  {
    imageSrc: '/image/main_nav/product_6.png',
    name: '송풍기',
    type: 'air-blower',
  },
];

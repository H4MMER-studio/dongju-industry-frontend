import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import EstimateForm from './EstimateForm';
import useResize from '@/hooks/useResize';
import { ProductType } from '@/interfaces/product';

interface Iprops {
  selectedProduct: ProductType['type'];
  questionType?: 'estimate';
  closeForm: () => void;
}

const FormModal: React.FC<Iprops> = ({
  selectedProduct,
  questionType,
  closeForm,
}) => {
  const { width } = useResize();

  const displayForm = (type?: 'estimate') => {
    return (
      <EstimateForm selectedProduct={selectedProduct} closeForm={closeForm} />
    );
    // switch (type) {
    //   case 'estimate':
    //     return <EstimateForm closeForm={closeForm} />;

    //   default:
    //     return null;
    // }
  };

  const setModalStyle = () => {
    if (width <= 1023) {
      return { width: '100%', margin: 0, height: '100%', maxHeight: 'none' };
    }
  };

  return (
    <Widgets.Layout.ModalLayout onClose={() => {}} paperStyle={setModalStyle()}>
      <FormLayout>{displayForm(questionType)}</FormLayout>
    </Widgets.Layout.ModalLayout>
  );
};

export default FormModal;

const FormLayout = styled.div`
  width: 720px;
  height: 795px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    padding-top: 84px;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import EstimateForm from './EstimateForm';

interface Iprops {
  questionType?: 'estimate' | 'A/S' | 'ETC';
  closeForm: () => void;
}

const FormModal: React.FC<Iprops> = ({ questionType, closeForm }) => {
  const displayForm = (type?: 'estimate' | 'A/S' | 'ETC') => {
    switch (type) {
      case 'estimate':
        return <EstimateForm closeForm={closeForm} />;

      default:
        return null;
    }
  };

  return (
    <Widgets.Layout.ModalLayout onClose={() => {}}>
      <FormLayout>{displayForm(questionType)}</FormLayout>
    </Widgets.Layout.ModalLayout>
  );
};

export default FormModal;

const FormLayout = styled.div`
  width: 720px;
  height: 722px;
  background-color: #383838;
  padding: 20px;
`;

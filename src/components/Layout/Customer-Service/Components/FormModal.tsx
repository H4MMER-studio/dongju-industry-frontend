import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';

interface Iprops {
  questionType?: 'estimate' | 'A/S' | 'ETC';
}

const FormModal: React.FC<Iprops> = ({ questionType }) => {
  const displayForm = (type?: 'estimate' | 'A/S' | 'ETC') => {
    switch (type) {
      case 'estimate':
        return <div>견적문의</div>;

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

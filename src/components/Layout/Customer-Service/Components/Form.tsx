import React from 'react';
import { Widgets } from '@/components';

interface Iprops {
  questionType?: 'estimate' | 'A/S' | 'ETC';
}

const Form: React.FC<Iprops> = ({ questionType }) => {
  const displayForm = (type?: 'estimate' | 'A/S' | 'ETC') => {
    switch (type) {
      case 'estimate':
        return (
          <Widgets.Layout.ModalLayout onClose={() => {}}>
            <div>견적문의</div>
          </Widgets.Layout.ModalLayout>
        );

      default:
        return null;
    }
  };

  return displayForm(questionType);
};

export default Form;

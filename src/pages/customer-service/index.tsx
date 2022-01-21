import React from 'react';
import Router, { useRouter } from 'next/router';
import { CustomerService } from '@/components';

const CustomerServiceView: React.FC = () => {
  const route = Router;
  const query = useRouter().query as { question: 'estimate' | 'A/S' | 'ETC' };

  const clickContact = (type: 'estimate' | 'A/S' | 'ETC') => {
    switch (type) {
      case 'estimate':
        route.push('/customer-service?question=estimate');
        break;

      case 'A/S':
        route.push('/customer-service?question=A/S');
        break;

      case 'ETC':
        route.push('/customer-service?question=ETC');
        break;

      default:
        break;
    }
  };

  return (
    <CustomerService.Container
      questionType={query.question}
      clickContact={clickContact}
    />
  );
};

export default CustomerServiceView;

import React from 'react';
import Router from 'next/router';
import { CustomerService } from '@/components';

const CustomerServiceView: React.FC = () => {
  const route = Router;

  const clickNoticeItem = (id: string) => {
    route.push(`/notice/${id}`);
  };

  return <CustomerService.Container />;
};

export default CustomerServiceView;

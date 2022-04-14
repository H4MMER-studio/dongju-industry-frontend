import { ProductType } from '@/interfaces';

export interface ICustomerServiceInitialState {}

export interface IForm {
  inquiry_type: 'estimate';
  inquiry_title: string;
  inquiry_content: string;
  inquiry_person_name: string;
  inquiry_company_name: string;
  inquiry_phone_number: string;
  inquiry_email: string;
  inquiry_product_type: ProductType['type'] | null;
}

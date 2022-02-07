//common
import MainNav from './common/MainNav';

export { MainNav };

// Home
import HomeContainter from './Layout/Home/HomeContainter';

//product
import ProductContainer from './Layout/Product/ProductContainer';

export const Home = {
  Container: HomeContainter,
};

//Notice
import NoticeContainer from './Layout/Notice/NoticeContainer';

export const Notice = {
  Container: NoticeContainer,
};

//Notice Detail
import NoticeDetailContainer from './Layout/Notice-Detail/NoticeDetailContainer';

export const NoticeDetail = {
  Container: NoticeDetailContainer,
};

//Customer-Service
import CustomerServiceContainer from './Layout/Customer-Service/CustomerServiceContainer';

export const CustomerService = {
  Container: CustomerServiceContainer,
};

export const Product = {
  Container: ProductContainer,
};

//Company
import CompanyContainer from './Layout/Company/CompanyContainer';

export const Company = {
  Container: CompanyContainer,
};

//Wigets
import * as Widgets from './widgets';

export { Widgets };

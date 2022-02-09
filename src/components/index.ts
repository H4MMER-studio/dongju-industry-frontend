//common
import MainNav from './common/MainNav';

export { MainNav };

// Home
import HomeContainter from './Layout/Home/HomeContainter';

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

//Company
import CompanyContainer from './Layout/Company/CompanyContainer';

export const Company = {
  Container: CompanyContainer,
};

//Product
import ProductContainer from './Layout/Product/ProductContainer';
import DamperCoilDetail from './Layout/Product/DamperCoilDetail';
import AirConditioner from './Layout/Product/AirConditioner';

export const Product = {
  Container: ProductContainer,
  DamperCoilDetail,
  AirConditioner,
};
//Wigets
import * as Widgets from './widgets';

export { Widgets };

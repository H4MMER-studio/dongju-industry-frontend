// Home
import HomeContainter from './Layout/Home/HomeContainter';

//Notice
import NoticeContainer from './Layout/Notice/NoticeContainer';

//Notice Detail
import NoticeDetailContainer from './Layout/Notice-Detail/NoticeDetailContainer';

//Customer-Service
import CustomerServiceContainer from './Layout/Customer-Service/CustomerServiceContainer';

export const Home = {
  Container: HomeContainter,
};

export const Notice = {
  Container: NoticeContainer,
};

export const NoticeDetail = {
  Container: NoticeDetailContainer,
};

export const CustomerService = {
  Container: CustomerServiceContainer,
};

//Wigets
import * as Widgets from './widgets';

export { Widgets };

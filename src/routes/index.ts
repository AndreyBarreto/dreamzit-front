import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));

const OrderForm = lazy(() => import('../pages/DreamForm'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/create/order',
    title: 'Pedido',
    component: OrderForm,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  // {
  //   path: '/settings',
  //   title: 'Settings',
  //   component: Settings,
  // },
];

const routes = [...coreRoutes];
export default routes;

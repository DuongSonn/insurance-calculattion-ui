import React from 'react';

const Home = React.lazy(() => import('./views/Home/Home'));
const ListUser = React.lazy(() => import('./views/User/ListUser'));
const AddUser = React.lazy(() => import('./views/User/AddUser'));

const routes = [
  { path: '/', exact: true, component: Home, name: 'Home' },
  { path: '/users', exact: true, component: ListUser, name: 'User'},
  { path: '/users/create', exact: true, component: AddUser, name: 'User'},
];

export default routes;
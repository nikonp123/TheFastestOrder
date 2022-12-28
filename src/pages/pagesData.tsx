import { routerType } from '../types/router.types';

import About from './About';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Main from './Main';

const pagesData: routerType[] = [
  {
    path: '/',
    element: <Main />,
    title: 'main',
    exact: true,
  },
  {
    path: 'home',
    element: <Home />,
    title: 'home',
    exact: true,
  },
  {
    path: 'about',
    element: <About />,
    title: 'about',
    exact: true,
  },
  {
    path: 'error',
    element: <ErrorPage />,
    title: 'error',
    exact: true,
  },
  {
    path: '*',
    element: <ErrorPage />,
    title: 'error',
    exact: true,
  },
];

export default pagesData;

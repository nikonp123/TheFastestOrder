import { routerType } from '../types/router.types';

import About from './About';
import ErrorPage from './ErrorPage';
import Home from './Home';

const pagesData: routerType[] = [
  {
    path: '',
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

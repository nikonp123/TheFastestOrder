import { routerType } from '../types/router.types';

import About from './About';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Main from './Main';

export const privatePagesData: routerType[] = [
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
    element: <ErrorPage errorTitle="Немає такої сторінки" />,
    title: 'error',
    exact: true,
  },
  {
    path: '*',
    element: <ErrorPage errorTitle="Немає такої сторінки" />,
    title: 'error',
    exact: true,
  },
];

export const publicPagesData: routerType[] = [
  {
    path: '/',
    element: <About />,
    title: 'about',
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
    element: <ErrorPage errorTitle="Немає такої сторінки" />,
    title: 'error',
    exact: true,
  },
  {
    path: '*',
    element: <ErrorPage errorTitle="Немає такої сторінки" />,
    title: 'error',
    exact: true,
  },
];

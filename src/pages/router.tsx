import { Route, Routes, Navigate } from 'react-router-dom';

import pagesData from './pagesData';
import { routerType } from '../types/router.types';

const Router = () => {
  const pageRoutes = pagesData.map(({ path, element, title }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;

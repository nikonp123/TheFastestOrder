import { Route, Routes } from 'react-router-dom';

import { privatePagesData, publicPagesData } from './pagesData';
import { routerType } from '../types/router.types';
import useUserAuth from '../hooks/use-auth';

const Router = () => {
  let pagesData: routerType[] = [];
  const { userIsAuth } = useUserAuth();

  if (userIsAuth) {
    pagesData = privatePagesData;
  } else {
    pagesData = publicPagesData;
  }

  const pageRoutes = pagesData.map(({ path, element, title }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;

import { useAppSelector } from '../hooks';

const useUserAuth = () => {
  const currentAuth = useAppSelector((state) => state.auth);
  const userIsAuth = currentAuth.isAuth;
  const accessUserRight = currentAuth.accessRight;
  return { userIsAuth, accessUserRight };
};

export default useUserAuth;

import './style.scss';

export interface IAppProps {
  children: JSX.Element;
}

export default function Container({ children }: IAppProps) {
  return <div className="container">{children}</div>;
}

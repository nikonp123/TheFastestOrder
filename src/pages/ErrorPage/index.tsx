export interface IErrorPageProps {
  errorTitle: string;
}

export default function ErrorPage({ errorTitle }: IErrorPageProps) {
  return (
    <div>
      <h1>Error:</h1>
      <h1>{errorTitle}</h1>
    </div>
  );
}

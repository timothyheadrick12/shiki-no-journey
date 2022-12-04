import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, Shiki hasn't told this story yet.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

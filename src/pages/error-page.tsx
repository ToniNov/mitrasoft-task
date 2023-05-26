import { FC } from 'react';

import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span>
            Page {error.statusText || error.message}.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-link">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

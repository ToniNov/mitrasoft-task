import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components/Header';
import { AboutMe } from '../pages/about-me';
import { ErrorPage } from '../pages/error-page';
import { Home } from '../pages/home';
import { UserPage } from '../pages/user-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'me',
        element: <AboutMe />,
      },
      {
        path: 'user/:id',
        element: <UserPage />,
      },
    ],
  },
]);

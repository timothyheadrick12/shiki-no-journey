import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import './index.css';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

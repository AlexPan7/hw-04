import { createBrowserRouter } from 'react-router-dom';

import { PublicLayout } from '../layouts';
import { Home, Login, Dashboard, NotFound } from '../pages'

export const routes = createBrowserRouter ([
 {
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
 },
])
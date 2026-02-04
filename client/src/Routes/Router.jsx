import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import {
  AddJob,
  ApplyJob,
  HomePage,
  JobDetails,
  MyApplications,
  SignIn,
  SignUp,
} from '../Pages/Index';
import AuthProvider from '../Provider/AuthProvider';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/jobs/:id',
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: '/applications/:id',

        element: (
          <PrivateRoute>
            <ApplyJob />
          </PrivateRoute>
        ),
      },
      {
        path: 'myApplications',
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: 'addJob',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'signin',
        Component: SignIn,
      },
    ],
  },
]);

/** App Router */
const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  );
};
export { AppRouter };

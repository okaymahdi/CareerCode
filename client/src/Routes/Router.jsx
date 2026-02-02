import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import { HomePage, SignIn, SignUp } from '../Pages/Index';
import AuthProvider from '../Provider/AuthProvider';
import { JobDetails } from '../Components/Index';

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
        Component: JobDetails,
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

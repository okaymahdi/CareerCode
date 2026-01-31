import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../Layouts/RootLayout';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
  },
]);

/** App Router */
const AppRouter = () => {
  return <RouterProvider router={Router} />;
};
export { AppRouter };

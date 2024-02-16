import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Cart,
  CompanyDetails,
  DeliveryAreas,
  Disclosure,
  Home,
  Landing,
  PrivacyPolicy,
  SecondHome,
  SecondLanding,
  Terms,
} from './Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/customer-support',
    element: <SecondHome />,
    children: [
      {
        index: true,
        element: <SecondLanding />,
      },

      {
        path: '/customer-support/del-areas',
        element: <DeliveryAreas />,
      },
      {
        path: '/customer-support/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/customer-support/terms-use',
        element: <Terms />,
      },
      {
        path: '/customer-support/disclosure',
        element: <Disclosure />,
      },
      {
        path: '/customer-support/company',
        element: <CompanyDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

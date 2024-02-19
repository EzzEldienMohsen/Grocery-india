import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Cart,
  CompanyDetails,
  DeliveryAreas,
  Disclosure,
  Home,
  Landing,
  Press,
  PrivacyPolicy,
  SecondHome,
  SecondLanding,
  Terms,
} from './Pages';
import { MaualLocationInput } from './components';
import Error from './Pages/Error';

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
      {
        path: '/error',
        element: <Error />,
      },
      {
        path: '/manual',
        element: <MaualLocationInput />,
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
        path: '/customer-support/press',
        element: <Press />,
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

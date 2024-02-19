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
  SingleProduct,
  Terms,
} from './Pages';
import { MaualLocationInput } from './components';
import { loader as productsLoader } from './Pages/Products';
import { loader as SingleProductLoader } from './Pages/SingleProduct';

import Error from './Pages/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: productsLoader(queryCLient),
      },

      {
        path: '/products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader(queryCLient),
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
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

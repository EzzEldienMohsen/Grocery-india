import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  DeliveryAreas,
  Home,
  Landing,
  PrivacyPolicy,
  SecondHome,
  SecondLanding,
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

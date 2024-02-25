import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Atta,
  AttaRiceOilDals,
  BabyFood,
  Birds,
  Biscuits,
  Bread,
  Cart,
  CleaningEssentials,
  Coffee,
  CompanyDetails,
  Dairy,
  DairyBreadEggs,
  Dals,
  DeliveryAreas,
  Disclosure,
  DryFruits,
  Eggs,
  Electronics,
  Fish,
  FrozenFood,
  FrozenFoodIceCream,
  Fruits,
  FruitsAndVegetables,
  Grooming,
  Home,
  Hygiene,
  HygieneGrooming,
  IceCream,
  Landing,
  Masala,
  MasalaDryFruit,
  Meat,
  MeatFishBirds,
  Munchies,
  Oil,
  Paan,
  Press,
  PrivacyPolicy,
  Rice,
  SecondHome,
  SecondLanding,
  Sweets,
  Tea,
  TeaCoffeeMore,
  TeaMore,
  Terms,
  Vegetables,
} from './Pages';
import { MaualLocationInput } from './components';
import Error from './Pages/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryCLient = new QueryClient();
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
        path: '/fruitsAndVegetables',
        element: <FruitsAndVegetables />,
      },
      {
        path: '/fruits',
        element: <Fruits />,
      },
      {
        path: '/vegetables',
        element: <Vegetables />,
      },
      {
        path: '/babyFood',
        element: <BabyFood />,
      },
      {
        path: '/attaRiceOilDals',
        element: <AttaRiceOilDals />,
      },
      {
        path: '/atta',
        element: <Atta />,
      },
      {
        path: '/rice',
        element: <Rice />,
      },
      {
        path: '/oil',
        element: <Oil />,
      },
      {
        path: '/dals',
        element: <Dals />,
      },
      {
        path: '/teaCoffeeMore',
        element: <TeaCoffeeMore />,
      },
      {
        path: '/tea',
        element: <Tea />,
      },
      {
        path: '/coffee',
        element: <Coffee />,
      },
      {
        path: '/more',
        element: <TeaMore />,
      },
      {
        path: '/paan',
        element: <Paan />,
      },
      {
        path: '/masalaDryFruits',
        element: <MasalaDryFruit />,
      },
      {
        path: '/masala',
        element: <Masala />,
      },
      {
        path: '/dryFruits',
        element: <DryFruits />,
      },
      {
        path: '/sweets',
        element: <Sweets />,
      },
      {
        path: '/frozenFoodIceCreams',
        element: <FrozenFoodIceCream />,
      },
      {
        path: '/frozenFood',
        element: <FrozenFood />,
      },
      {
        path: '/IceCream',
        element: <IceCream />,
      },
      {
        path: '/dairyBreadEggs',
        element: <DairyBreadEggs />,
      },
      {
        path: '/dairy',
        element: <Dairy />,
      },
      {
        path: '/bread',
        element: <Bread />,
      },
      {
        path: '/eggs',
        element: <Eggs />,
      },
      {
        path: '/munchies',
        element: <Munchies />,
      },
      {
        path: '/meatFishBirds',
        element: <MeatFishBirds />,
      },
      {
        path: '/meat',
        element: <Meat />,
      },
      {
        path: '/fish',
        element: <Fish />,
      },
      {
        path: '/birds',
        element: <Birds />,
      },
      {
        path: '/biscuits',
        element: <Biscuits />,
      },
      {
        path: '/cleaningEssentials',
        element: <CleaningEssentials />,
      },
      {
        path: '/electronics',
        element: <Electronics />,
      },
      {
        path: '/hygieneGrooming',
        element: <HygieneGrooming />,
      },
      {
        path: '/hygiene',
        element: <Hygiene />,
      },
      {
        path: '/grooming',
        element: <Grooming />,
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

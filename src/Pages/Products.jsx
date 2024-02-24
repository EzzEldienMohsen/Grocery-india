/* eslint-disable react-refresh/only-export-components */
import { autoFetch } from '../utilities';
import { ProductsContainer, SidebarMenu } from '../components';
import { useQuery } from '@tanstack/react-query';

const Products = () => {
  const {
    data: products,
    status,
    isFetching,
  } = useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      try {
        const response = await autoFetch('/all.json');
        const products = response.data;
        console.log(products);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(products);
  return status === 'pending' || isFetching ? (
    <section className="image-container">
      <h4>Loading...</h4>
    </section>
  ) : status === 'error' ? (
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  ) : (
    <div className="w-full flex justify-between">
      <SidebarMenu />
      <ProductsContainer products={products} />
    </div>
  );
};

export default Products;

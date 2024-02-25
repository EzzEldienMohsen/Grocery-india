import { autoFetch } from '../utilities';
import { ProductsContainer } from '../components';
import { useQuery } from '@tanstack/react-query';

const FrozenFoodIceCream = () => {
  const {
    data: products,
    status,
    isFetching,
  } = useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      try {
        const response = await autoFetch('/frozenFoodIceCream.json');

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return status === 'pending' || isFetching ? (
    <section className="image-container">
      <h4>Loading...</h4>
    </section>
  ) : status === 'error' ? (
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  ) : (
    <div>
      <ProductsContainer products={products} />
    </div>
  );
};

export default FrozenFoodIceCream;

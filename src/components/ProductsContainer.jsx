/* eslint-disable react/prop-types */
import { ProductsGrid } from '../components';

const ProductsContainer = ({ products }) => {
  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
};

export default ProductsContainer;

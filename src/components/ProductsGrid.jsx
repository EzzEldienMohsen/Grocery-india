/* eslint-disable react/prop-types */
import { formatPrice } from '../utilities';
import { useGlobalContext } from '../utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import React from 'react';

const ProductsGrid = ({ products }) => {
  const { setIsHidden } = useGlobalContext();
  var [amount, setAmount] = React.useState(1);

  var dispatch = useDispatch();

  return (
    <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3  items-center justify-between gap-8 ">
      {products.map((prod) => {
        const cartProduct = {
          cartID: prod.id + prod.colors[0],
          productID: prod.id,
          image: prod.image,
          title: 'a products',
          productColor: prod.colors[0],
          price: prod.price,
          amount,
          company: prod.company,
        };
        return (
          <div
            key={prod.id}
            onClick={setIsHidden(() => true)}
            className="bg-base-300 rounded-box shadow-lg p-4 hover:shadow-2xl duration-300 group"
          >
            <figure className="flex flex-col items-center justify-center px-4 pt-4">
              <img
                src={prod.image}
                alt={prod.title || 'null'}
                className="w-96 h-96 justify-center shadow-xl rounded-t-md object-cover group-hover:scale-95 transition duration-300"
              />
              <div className="card-body items-center text-center flex flex-col">
                <h2 className="text-2xl text-center font-bold text-primary capitalize mt-4 tracking-wide">
                  a product
                </h2>
                <span className="rounded-box p-4 text-2xl fond-bold text-secondary text-center">
                  {formatPrice(prod.price)}
                </span>
              </div>
            </figure>
            <div className="mb-5 w-full justify-center-items-center">
              <button
                className="btn btn-secondary w-full"
                onClick={() => {
                  dispatch(addItem({ product: cartProduct }));
                }}
              >
                Add to bag
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

/* eslint-disable react/prop-types */
import { amountGeneration, formatPrice } from '../utilities';
import { useGlobalContext } from '../utils';
import { useDispatch } from 'react-redux';
import React from 'react';
import { addItem } from '../features/cart/CartSlice';

const ProductsList = ({ products }) => {
  const { setIsHidden } = useGlobalContext();
  var [amount, setAmount] = React.useState(1);

  var dispatch = useDispatch();

  return (
    <div className="mt-12 grid gap-y-8 w-4/g">
      {products.map((prod) => {
        const handleAmount = (e) => {
          setAmount(parseInt(e.target.value));
        };
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
            to={`/products/${prod.id}`}
            className="bg-base-300 rounded-box items-center justify-between shadow-xl hover:shadow-2xl group duration-300 p-4 flex flex-col gap-y-4  sm:flex-row"
          >
            <img
              src={prod.image}
              alt={prod.attributes?.title || 'null'}
              className="transition duration-300 w-36 h-36 rounded-lg object-cover sm:h-48 sm:w-48 group-hover:scale-105"
            />
            <div className="lg:ml-4 lg:mr-4">
              <h2 className="text-xl text-center font-bold text-primary capitalize tracking-wide">
                a product
              </h2>

              <h2 className="text-md mt-8 text-center font-bold text-accent capitalize tracking-wide">
                {prod.company}
              </h2>
            </div>
            <p className="rounded-box  mt-8 text-xl fond-medium text-secondary ">
              {prod.description}
            </p>
            <p className="rounded-box  mt-8 text-xl fond-medium text-secondary ">
              {formatPrice(prod.price)}
            </p>
            <div className="ml-3 flex flex-col">
              <label className="label " htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                id="amount"
                className="select select-secondary select-md select-bordered"
                value={amount}
                onChange={handleAmount}
              >
                {amountGeneration(10)}
              </select>
              <div className="mt-10 ">
                <button
                  className="btn btn-secondary btn-md"
                  onClick={() => {
                    dispatch(addItem({ product: cartProduct }));
                  }}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;

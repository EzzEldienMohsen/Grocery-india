import { useSelector } from 'react-redux';

const Cart = () => {
  var numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart < 1) {
    return (
      <div className="w-full h-[1000px] flex justify-center items-center bg-inherit">
        <div className="w-3/5 h-[100px] flex flex-col justify-center items-center">
          <h1 className="mb-4text-black text-2xl font-bold tracking-wide capitalize">
            Please Login
          </h1>
          <h2 className="mb-4 text-xl text-black capitalize">
            Please login to access the cart.
          </h2>
          <button className="manual-button w-3/5 p-4 rounded-md text-xl font-bold tracking-wide">
            Login
          </button>
        </div>
      </div>
    );
  }
  return <>something will be here</>;
};

export default Cart;

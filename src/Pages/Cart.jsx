import { useSelector } from 'react-redux';

const Cart = () => {
  var numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart < 1) {
    return <h1>Your cart is empty</h1>;
  }
  return <>something will be here</>;
};

export default Cart;

import axios from 'axios';
var url = '/api';
export var autoFetch = axios.create({
  baseURL: url,
});

export var formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price / 100);
  return dollarsAmount;
};

export var amountGeneration = (number) => {
  return Array.from({ length: number }, (_, index) => {
    var amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

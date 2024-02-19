import { useGlobalContext } from '../utils';

const Error = () => {
  const { isClicked } = useGlobalContext();
  return (
    <div
      className={`${
        isClicked ? 'pt-[137px]' : 'pt-[233px]'
      } w-full flex justify-center items-center `}
    >
      <div
        className={`card  bg-white shadow-2xl w-96 flex justify-center items-center`}
      >
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

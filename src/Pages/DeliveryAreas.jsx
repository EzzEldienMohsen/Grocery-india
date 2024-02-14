import { deliveryAreas } from '../assets';

const DeliveryAreas = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center px-10">
      <h3 className="-mt-24 underline text-white font-extrabold text-4xl capitalize">
        delivery areas
      </h3>
      <div className="w-full mb-16 p-16 lg:px-10 flex flex-col justify-center items-start lg:grid lg:grid-cols-2 lg:justify-between lg:items-start">
        {deliveryAreas.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col justify-center items-start p-5 "
            >
              <div className="flex justify-between items-center my-5">
                <img
                  src={post.img}
                  alt="img"
                  className="w-10 h-10 lg:w-16 lg:h-16 mr-4"
                />
                <h2 className="text-2xl lg:text-3xl text-white font-semibold ">
                  {post.title}
                </h2>
              </div>
              <p className="text-white text-xl font-normal">{post.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryAreas;

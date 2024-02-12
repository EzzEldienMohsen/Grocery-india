import { data } from '../assets';

const CardsFooter = () => {
  return (
    <div className="w-full bg-inherit flex flex-col justify-start items-start p-2 lg:justify-center lg:items-center">
      <h1 className="text-black text-xl mb-2 lg:text-2xl capitalize font-bold">
        How it Works
      </h1>
      <div className="flex flex-col w-full justify-start items center mb-2 lg:justify-center lg:flex-row">
        {data.map((card) => {
          return (
            <div
              key={card.id}
              className="flex justify-between items-center mx-2 rounded-md my-2 w-full bg-white lg:flex-col lg:w-1/2 lg:justify-center"
            >
              <img
                src={card.img}
                alt="logo"
                className="w-24 h-24 m-2 ml-0 lg:w-40 lg:h-40 lg:ml-2"
              />
              <div className="flex flex-col ml-8 mb-2 lg:items-center lg:justify-center">
                <h3 className="text-black font-black text-4xl">{card.title}</h3>
                <p className="text-black text-2xl">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsFooter;

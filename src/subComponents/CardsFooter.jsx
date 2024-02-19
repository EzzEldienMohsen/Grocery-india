import { data } from '../assets';

const CardsFooter = () => {
  return (
    <div className="w-full bg-inherit flex mt-2 flex-col justify-start items-start p-2 md:justify-center md:items-center">
      <h1 className="text-black text-xl mb-2 md:text-2xl capitalize font-bold">
        How it Works
      </h1>
      <div className="flex flex-col w-full justify-start items center mb-2 md:justify-center md:w-4/5 md:flex-row">
        {data.map((card) => {
          return (
            <div
              key={card.id}
              className="flex justify-between items-center mx-2 rounded-md my-2 w-full bg-white md:flex-col md:w-2/6 md:justify-center"
            >
              <img
                src={card.img}
                alt="logo"
                className="w-20 h-20 m-2 ml-0 md:w-24 md:h-24 md:ml-4"
              />
              <div className="flex flex-col ml-8 mb-2 items-start justify-start md:items-center md:justify-center">
                <h3 className="text-black font-black text-2xl">{card.title}</h3>
                <p className="text-black text-xl">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsFooter;

import { FetchCategory } from '../assets';

const CategoryFooter = () => {
  return (
    <div className="w-inherit flex flex-col justify-start items-start my-2  border-y-2 border-slate-400">
      <h2 className="text-3xl font-extrabold mb-2">Category</h2>
      <div className="flex justify-start items-center w-full  bg-inherit flex-1 flex-wrap">
        {FetchCategory.map((cat) => {
          return (
            <h1 key={cat.id} className="m-3 text-xl ">
              {cat.text}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFooter;

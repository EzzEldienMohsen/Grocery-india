import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryFooter = () => {
  const { data, status, isFetching } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => {
      try {
        const data = await axios('/api/categories.json');
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return status === 'pending' || isFetching ? (
    <section className="image-container">
      <h4>Loading...</h4>
    </section>
  ) : status === 'error' ? (
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  ) : (
    <div className="w-inherit flex flex-col justify-start items-start my-2  border-y-2 border-slate-400">
      <h2 className="text-3xl font-extrabold mb-2">Category</h2>
      <div className="grid md:grid-cols-5 grid-cols-2  w-full  bg-inherit ">
        {data.data.map((cat, index) => {
          return (
            <Link to={cat.url} key={index} className="m-3 text-xl ">
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFooter;

import { useSelector } from "react-redux";
import Card from "../Card";
import Paginations from "../Paginations";

const Articles = () => {
  const { isLoading, items } = useSelector((state) => state.posts);

  return (
    <div className=" mt-20 mb-10 lg:mx-24 mx-10">
      <div className="flex mb-20 justify-center">
        <span className="w-fit  pb-2 pr-5 text-3xl text-black font-black  border-b-4 border-primary-2">
          Articles récents
        </span>
      </div>
      {isLoading ? (
        <div className="flex justify-center text-xl items-center">
          <div className="loader mx-2"></div>
          <span>Loading</span>
        </div>
      ) : (
        <>
          <div className=" grid grid-cols-12 md:space-x-4 justify-center items-center ">
            {items?.map((post) => {
              return (
                <div key={post.article_id} className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
                  <Card post={post} />
                </div>
              );
            }) }
          </div>
          <Paginations totals={150} maxItems={30} page={1} />
        </>
      )}
    </div>
  );
};
export default Articles;

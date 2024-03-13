import { useSelector } from "react-redux";
import Card from "../Card";
import { Link } from "react-router-dom";

const Articles = () => {
  const { isLoading, items } = useSelector((state) => state.posts);

  return (
    <div className="sm:mx-24 mx-10 mt-20 mb-10">
      <div className="flex mb-20 justify-center">
        <span className="w-fit  pb-2 px-5 text-2xl  md:text-4xl text-black font-black  border-b-4 border-primary-2">
          Articles récents
        </span>
      </div>
      {!isLoading ? (
        <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {items?.slice(0, 3).map((post) => {
            return <Card post={post} />;
          }) ?? (
            <div className="flex justify-center text-xl items-center text-red-400">
              {/* <div className="loader mx-2"></div> */}
              <div>Message d'erreur,Vérifier si le back est connecté</div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center text-xl items-center">
          <div className="loader mx-2"></div>
          <span>Loading</span>
        </div>
      )}
      <div className="flex justify-center mt-12">
        <Link to={"/blogs"}>
          <div className="px-10 py-1 border-2 text-lg font-semibold w-fit cursor-pointer border-black hover:text-white hover:bg-black hover:rounded-full ">
            VOIR PLUS
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Articles;

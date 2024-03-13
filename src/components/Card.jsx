import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const monthLongs = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  const convertStringToHTML = htmlString => {
    // const parser = new DOMParser();
    // const html = parser.parseFromString(htmlString, 'text/html');


    return <div>{htmlString}</div>;
}
  return (
    <div className="h-fit pb-0 shadow-2xl rounded-xl z-[5] my-10 bg-white relative">
      <div className="h-56 bg-article relative bg-center rounded-xl p-5">
        <div className="bg-primary w-24 text-center -top-10 absolute rounded-md ">
          <div className="px-1 py-1">
            <div className="text-2xl text-white font-bold">{post.created_at?.split('T')[0]?.split("-")[2] ?? ''}</div>
            <div className="text-lg text-white font-bold">{monthLongs[post.created_at?.split('T')[0]?.split("-")[1][1] ?? ""]}</div>
            <div className="text-2xl text-white font-bold">{post.created_at?.split('T')[0]?.split("-")[0] ?? ''}</div>
          </div>
        </div>
        {/* <img src="/banner_8.jpg" alt="" className="" /> */}
      </div>
      <div className=" py-2 px-3 h-48">
        <span className="text-xl font-bold">{post.article_title}</span>
        <br />
        <span className="text-primary text-sm font-semibold ">
          Tutoriel | Reseau Informatique
        </span>
        <div className="text-ellipsis text-gray-400  line-clamp-6 text-[0.8rem] font-normal  mt-5">
          {convertStringToHTML(post.article_contenu)}
        </div>
        
      </div>

      <div className="flex justify-between items-center bg-secondary/25  px-5  rounded-b-xl py-3 ">
        <div className="flex items-center">
          <img
            src="/layout.png"
            alt=""
            className="rounded-full w-10 h-10 mr-2 hover:shadow-xl cursor-pointer"
          />
          <div>
            <div className="text-sm font-light text-black cursor-pointer">
              LAB 7
            </div>
            <div className="text-[0.78rem] font-light">Membres</div>
          </div>
        </div>
        <div className="">
          <Link to={`/blog/${post.article_id}`}>
            <span className="text-md font-semibold text-primary cursor-pointer hover:border-b-2 hover:border-gray-900 border-b-primary border-b-2">
              Lire l'artcile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

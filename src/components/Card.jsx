import { Link } from "react-router-dom"

const Card = () => {
    return (
        <div className="h-fit pb-0 shadow-2xl rounded-xl z-10 my-10 bg-white">
            <div className="h-56 bg-article bg-center rounded-t-xl p-5">
                <div className="bg-primary w-24 text-center absolute rounded-md -mt-14 ">
                    <div className="px-1 py-1">
                        <div className="text-2xl text-white font-bold">24</div>
                        <div className="text-lg text-white font-bold">Juillet</div>
                        <div className="text-2xl text-white font-bold">2023</div>
                    </div>
                </div>
                {/* <img src="/banner_8.jpg" alt="" className="" /> */}
            </div>
            <div className=" py-2 px-3 h-48">
                <span className="text-xl font-bold">Configuation softfane</span>
                <br />
                <span className="text-primary text-sm font-thin ">Tutoriel | Reseau Informatique</span>
                <div className="text-ellipsis text-gray-400  line-clamp-6 text-[0.8rem] font-thin  mt-5">
                    Lorem ipsuum dolor sit amet consectetur adipisicing elit. Molestias, minus impedit quo deleniti ipsam doloremque libero dolore culpa maiores molestiae quis facilis inventore sequi error asperiores corporis necessitatibus, dolorum sint?
                </div>
            </div>

            <div className="flex justify-between items-center  px-5  rounded-b-2xl py-3 shadow-inner ">
                <div className="flex items-center">
                    <img src="/layout.png" alt="" className="rounded-full w-10 h-10 mr-2 hover:shadow-xl cursor-pointer" />
                    <div>
                        <div className="text-sm font-light text-primary cursor-pointer">KPONSO Albericq</div>
                        <div className="text-[0.78rem] font-light">Membres</div>
                    </div>
                </div>
                <div className="">
                    <Link to={"/blog"}>
                    <span className="text-md font-semibold text-primary cursor-pointer hover:border-b-2 hover:border-gray-900">Voir plus</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Card
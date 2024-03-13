
import Footer from "../components/layouts/Footer"
import Navbar from "../components/layouts/Navbar"
import { FaWhatsapp } from "react-icons/fa";

import { CiLinkedin } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";


const Contact = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen h-1/3 bg-cover pb-10">
                <Navbar />
                <div className="flex justify-center py-[10rem] ">
                    <span className="text-[5rem] md:text-[8rem] font-extrabold text-white">Contacts</span>

                </div>
                {/* <Bannier /> */}

            </div>
            {/* <div className="  relative h-[100vh]  ">
                <div className=" z-0 w-full h-[60vh] ">
                    <img src="/plan1.png" alt="" className=" w-full h-full rounded-r-lg z-0" />
                </div>
                <div className="absolute bg-white/30 backdrop-blur-xl z-10 top-[25%] left-[25%] col-span-4 rounded-md shadow-xl flex flex-col w-[40%]  py-28 px-5">
                    <div className="py-1 mt-5   w-fit  border-primary text-primary text-3xl font-bold text-center">
                        CONTACT
                    </div>
                    <div className="my-4 mt-5 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none  " placeholder="Nom & Prénoms" />
                    </div>
                    <div className="my-4 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none  " placeholder="Votre adress mail" />
                    </div>

                    <div className="my-4 px-1">
                        <textarea type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none " placeholder="Votre message" />
                    </div>
                    <div className="flex item-center justify-center">

                        <div className="px-10 py-2 rounded-full cursor-pointer shadow-primary text-white text-2xl mt-3 bg-primary hover:shadow-xl font-thin ">Envoyer</div>
                    </div>

                </div>
            </div>
            <div className="mx-2 lg:mx-24 my-40 grid grid-cols-12  h-[600px]  ">
                <div className="bg-primary flex flex-col items-center col-span-1 shadow-lg border-white border-t-2 border-l-2  border-b-2 justify-center space-y-7 my-10 rounded-l-lg ">
                    <div className="rounded-full p-3 text-3xl cursor-pointer  bg-slate-300/50 text-white font-extrabold">
                        <CiLinkedin />
                    </div>
                    <div className="rounded-full p-3 text-3xl cursor-pointer  bg-slate-300/50 text-white font-extrabold">
                        <BiPhoneCall />
                    </div>
                    <div className="rounded-full p-3 text-3xl cursor-pointer  bg-slate-300/50 text-white font-extrabold">
                        <FaWhatsapp />
                        
                    </div>
                </div>


                <div className="bg-white col-span-4 rounded-md shadow-xl flex flex-col justify-center  py-5 px-5">
                    <div className="py-1 mt-5   w-fit  border-primary text-primary text-3xl font-bold text-center">
                        CONTACT
                    </div>
                    <div className="my-4 mt-5 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 font-thin placeholder:text-md focus:outline-none  " placeholder="Nom & Prénoms" />
                    </div>
                    <div className="my-4 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 font-thin placeholder:text-md focus:outline-none  " placeholder="Votre adress mail" />
                    </div>

                    <div className="my-4 px-1">
                        <textarea type="text" className=" w-full border-b-2 border-primary text-lg py-1 font-thin placeholder:text-md focus:outline-none " placeholder="Votre message" />
                    </div>
                    <div className="flex item-center justify-center">

                        <div className="px-10 py-2 rounded-full cursor-pointer shadow-primary text-white text-2xl mt-3 bg-primary hover:shadow-xl font-thin ">Envoyer</div>
                    </div>

                </div>
                <div className="bg-white/80 flex flex-col items-center justify-center space-y-7 my-10 rounded-r-lg col-span-7 p-2 pl-0 ">
                    <img src="/plan1.png" alt="" className=" w-full h-full rounded-r-lg" />
                </div>



            </div> */}
            <div className="w-full min-h-screen pb-52 relative bg-primary/5">
                <img src="/plan1.png" alt="" className=" w-full h-[500px] rounded-r-lg z-0" />
               <div className="flex justify-center">
               <div className=" -mt-[350px] bg-white/30 backdrop-blur-xl col-span-4 rounded-md shadow-xl flex flex-col w-10/12 md:w-1/2  py-28 px-5">
                    <div className="py-1 mt-5   w-fit  border-primary text-primary text-3xl font-bold text-center">
                        CONTACT
                    </div>
                    <div className="my-4 mt-5 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none  " placeholder="Nom & Prénoms" />
                    </div>
                    <div className="my-4 px-1">
                        <input type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none  " placeholder="Votre adress mail" />
                    </div>

                    <div className="my-4 px-1">
                        <textarea type="text" className=" w-full border-b-2 border-primary text-lg py-1 bg-transparent font-thin placeholder:text-md focus:outline-none " placeholder="Votre message" />
                    </div>
                    <div className="flex item-center justify-center">

                        <div className="px-10 py-2 rounded-full cursor-pointer shadow-primary text-white text-2xl mt-3 bg-primary hover:shadow-xl font-thin ">Envoyer</div>
                    </div>

                </div>
               </div>
            </div>
            <Footer abonnement={false} />
        </>
    )
}

export default Contact
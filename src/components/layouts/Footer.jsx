const Footer = ({ abonnement = true }) => {
    return (
        < >
            {abonnement ? (
                <div className=" shadow-2xl bg-secondary/25  text-black text-center pt-5 overflow-hidden ">
                    <div className="my-5 text-2xl font-black">ABONNEZ-VOUS POUR NE PLUS RIEN RATER DE NOS ACTUALITÉS</div>
                    <div className="mb-5 font-normal ">Abonnez-vous pour recevoir des informations, les dernières actualités et d'autres offres intéressantes concernant le Lab7</div>
                    <div className=" hidden  md:flex items-center justify-center mb-10 mx-20 ">
                        <div className="flex w-fit border-[2px]  border-primary py-1 px-2 rounded-3xl">
                            <input type="text" placeholder="johndoe@gmail.com" className=" px-2 caret-red-200 bg-transparent border-none focus:border-none focus:outline-none outline-none placeholder:text-sm placeholder:text-gray-400 text-primary" />
                            <button className="border-none  text-white  bg-primary  px-10 py-1 rounded-3xl">SOUMETTRE</button>
                        </div>
                    </div>
                    <div className=" md:hidden grid grid-cols-12">

                        <div className="  col-span-12 md:col-start-4 md:col-span-6 items-center mx-2 border-[2px] rounded-full border-primary bottom-3 py-1 flex justify-between">
                            <input type="text" placeholder="johndoe@gmail.com" className=" w-full px-2 caret-red-200 bg-transparent border-none focus:border-none focus:outline-none outline-none placeholder:text-sm placeholder:text-gray-400 text-primary" />

                            <button className="border-none mx-2 text-white  bg-primary  px-2 py-1 rounded-3xl">SOUMETTRE</button>

                        </div>
                    </div>
                    <div className=" bg-[#07171f] mt-5 ">
                        <div className="py-3 text-white">&copy; 2023 LAB7</div>
                    </div>
                </div>
            ) : (<div className=" bg-[#07171f] mt-5 text-center ">
                <div className="py-3 text-white">&copy; 2023 LAB7</div>
            </div>)}

        </>
    )
}

export default Footer
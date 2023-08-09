const Footer = () => {
    return (
        <div className="bg-white shadow-2xl  text-black text-center py-20">
            <div className="my-5 text-2xl font-black">ABONNEZ-VOUS POUR NE PLUS RIEN RATER DE NOS ACTUALITÉS</div>
            <div className="mb-5 font-light ">Abonnez-vous pour recevoir des informations, les dernières actualités et d'autres offres intéressantes concernant le Lab7</div>
            <div className="flex items-center justify-center">
                <div className="flex w-fit border-[2px] border-primary py-1 px-2 rounded-3xl">
                    <input type="text" placeholder="johndoe@gmail.com" className="w-64 px-2 caret-red-200 bg-transparent border-none focus:border-none focus:outline-none outline-none placeholder:text-sm placeholder:text-gray-400 text-primary" />
                    <button className="border-none  text-white  bg-primary  px-10 py-1 rounded-3xl">SOUMETTRE</button>
                </div>
            </div>
            <div className="mt-5"> &copy; 2023 LAB7</div>
        </div>
    )
}

export default Footer

const Communaute = () => {
    return (
        <div className="md:mx-20 mx-2 my-20">
       
            <img src="/lampe_mission.svg" alt="" className=" w-full h-36 col-span-12 mb-10" />

            <img src="/layout.png" alt="" className="w-7/12  h-10/11 px-10 mx-auto" />
            <div className="rounded-3xl bg-black/90 text-white font-thin p-10  lg:pt-10 lg:px-20 -mt-6 italic">
                <div className="text-prrimary font-medium"> Chez Lab7, nous considérons notre communauté comme le cœur de notre plateforme. Notre espace
                    collaboratif favorise les interactions, les échanges d'idées et la coopération entre les membres. Rejoignez
                    notre communauté dynamique et inspirante pour partager votre passion pour la technologie et créer des
                    liens durables avec des personnes partageant les mêmes intérêts</div>
                <div className="flex justify-center py-4">
                    <button className="rounded-lg bg-secondary font-extrabold px-5 py-2 text-black">Rejoingnez-nous</button>
                </div>
            </div>
        </div>
    )
}

export default Communaute
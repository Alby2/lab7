
const Communaute = () => {
    return (
        <div className="mx-20 my-20">
            <img src="/layout.png" alt="" className="w-full h-1/6 px-20" />
            <div className="rounded-3xl bg-black/90 text-white font-thin pt-10 px-20 -mt-6 italic">
                <div className="text-secondary font-thin"> Chez Lab7, nous considérons notre communauté comme le cœur de notre plateforme. Notre espace
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

const Apropos = () => {
    return (
        <div className="lg:mx-20 my-10">
            <div className="grid grid-cols-12  items-center">
                <div className="xl:col-span-7 lg:col-span-8 md:col-span-8 col-span-12 mt-3  mx-3">
                    <span className="w-fit  pb-2 pr-5 text-2xl md:text-4xl text-black font-black  border-b-4 border-primary-2">
                        Pourquoi nous ?
                    </span>
                    <br />
                    <p className="text-md  xl:text-lg  2xl:text-3xl font-normal px-2 mt-10 text-gray-700">
                        Lab7 est bien plus qu'une plateforme en ligne, c'est une
                        communauté dynamique où les esprits créatifs se réunissent
                        pour repousser les limites de la technologie. Nous croyons en
                        la force de la collaboration et de la diversité des talents pour
                        façonner un futur prometteur. Que vous soyez passionné par la
                        conception de circuits électroniques, le développement
                        d'applications web ou la mise en place de réseaux
                        sophistiqués, Lab7 est un espace où vous pouvez apprendre,
                        partager et grandir ensemble.
                    </p>
                </div>
                <div className="xl:col-span-5 lg:col-span-4 md:col-span-4 col-span-12  ">
                    <img src="/hosting3.svg" className="w-full h-full" alt="" />
                </div>
            </div>
            <div className="flex justify-center mt-5 ">
                <div className="px-10 py-1 border-2 text-md font-semibold w-fit cursor-pointer border-black hover:text-white hover:font-semibold hover:bg-black uppercase ">En savoir plus sur nous</div>
            </div>
        </div>
    )
}

export default Apropos
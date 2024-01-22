
const Services = () => {
    return (
        <div className="  mt-20 ">
            <div className="grid grid-cols-12 mb-20">
               
                <div className="col-span-12  md:col-span-6 lg:col-span-4 2xl:col-span-4 p-10 pb-2 text-center w-full hover:shadow-2xl hover:bg-white  cursor-pointer ">
                    <div className="flex justify-center">
                        <img src="/icon/file.png" alt="file" className="w-1/5" />
                    </div>
                    <div className="mt-4 text-2xl font-black">Projets Prêts à l'Emploi </div>
                    <div className="mt-5 text-lg text-gray-500"> Sélection de réalisations clés en main pour des applications spécifiques, prêtes à être déployées.</div>
                    <div className="flex justify-center mt-5 mb-10"><button className="bg-primary cursor-pointer px-9 py-2 text-white rounded-lg">Voir plus</button></div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-4 p-10 pb-2 text-center w-full  hover:shadow-2xl hover:bg-white  cursor-pointer hover:transition-shadow ">
                    <div className="flex justify-center">
                        <img src="/icon/star.png" alt="file" className="w-1/5" />
                    </div>
                    <div className="mt-4 text-2xl font-black">Tutoriels Électroniques,
                        Programmation et réseau </div>
                    <div className="mt-5 text-lg text-gray-500"> Guides pas à pas pour créer des
                        projets captivants avec Arduino,
                        ESP8266, Raspberry Pi, etc et
                        maîtriser les réseaux
                        informatiques et la sécurité, avec
                        des stratégies pour protéger vos
                        données et vos appareils.
                    </div>
                    <div className="flex justify-center mt-5 mb-10"><button className="bg-primary cursor-pointer px-9 py-2 text-white rounded-lg">Voir plus</button></div>
                </div>
                <div className="col-span-12  md:col-span-6 lg:col-span-4  2xl:col-span-4 p-10 pb-2 text-center w-full hover:shadow-2xl hover:bg-white  cursor-pointer hover:transition-shadow ">
                    <div className="flex justify-center">
                        <img src="/icon/clock.png" alt="file" className="w-1/5" />
                    </div>
                    <div className="mt-4 text-2xl font-black">Accompagnement et Support
                        Technique </div>
                    <div className="mt-5 text-lg text-gray-500">Assistance personnalisée pour
                        vos projets électroniques et de
                        programmation, avec une
                        équipe d'experts disponible
                    </div>
                    <div className="flex justify-center mt-5 mb-10"><button className="bg-primary cursor-pointer px-9 py-2 text-white rounded-lg">Voir plus</button></div>
                </div>

            </div>
        </div>
    )
}

export default Services
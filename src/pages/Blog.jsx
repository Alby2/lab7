
import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"
import BannierBlog from "../components/Blog/BannierBlog"
import Card from "../components/Blog/Card"
import MiniCard from "../components/Blog/MiniCard"
import Box from "../components/Box"
import Paginations from "../components/Paginations"
import Comment from "../components/Comment"

const Blog = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen h-1/3 bg-cover pb-10">
                <Navbar />
                <div className="flex justify-center pt-20 ">
                    <div className="  ">
                        <BannierBlog description={``} title={'Blog Lab7'} />
                    </div>

                </div>
                {/* <Bannier /> */}

            </div>
            <div className="mx-2 lg:mx-24 py-10  grid grid-cols-12 space-x-5">

                <div className="col-span-12 lg:col-span-8 mb-10">
                    <Card />
                    <Box title="INTRODUCTION" soustitle="" content={`L'ESP8266 est un microcontrôleur Wi-Fi populaire utilisé dans de nombreux projets IoT et d'électronique. Outre ses capacités de contrôle et de collecte de données, l'ESP8266 peut également être utilisé en tant que répéteur WiFi pour étendre la portée de votre réseau sans fil. Dans cet article, nous vous guiderons étape par étape pour configurer votre ESP8266 en tant que répéteur WiFi, vous permettant ainsi d' améliorer la couverture de votre réseau domestique.`} />
                    <Box title="MATÉRIEL REQUIS" soustitle="" content={"* Module ESP8266 (comme NodeMCU ou Wemos D1 Mini) \t * Câble Micro USB * Ordinateur avec le logiciel Arduino IDE installé"} />
                    <Box soustitle="PRÉPARATION DE L'ENVIRONNEMENT DE DÉVELOPPEMENT" title="Etape 1" content={`1- Connectez votre ESP8266 à votre ordinateur à l'aide d'un câble Micro USB.\t 2 Ouvrez le logiciel Arduino IDE et assurez-vous que le bon type de carte ESP8266 est sélectionné dans le menu "Outils > Type de carte"`} />
                    <Paginations />
                    <div className="mt-16"></div>
                    <Box soustitle=" " title="12 Commetaires"
                        content={<div>
                            <Comment />
                            <Comment isAuthor={true} />
                            <Comment isAuthor={true} message="lorem lorem lorem" />
                            <Comment />
                            <Comment />
                        </div>


                        } 
                        footer={
                            <>
                                <div className="text-primary text-lg mt-4 mb-3 py-2 border-b-2 w-fit border-primary font-bold" htmlFor="">Laissez un commentaire</div>
                                <label htmlFor="">Votre nom</label>
                                <input type="text" className=" mb-5 outline-none border-[1px] py-2 px-3 text-sm border-gray-200 w-full " />
                                <label htmlFor="">Votre commentaire</label>
                                <textarea type="text" className=" outline-none border-[1px] py-2 px-3 text-sm border-gray-200 w-full " />
                                <div className="flex justify-end ">
                                    <button className="py-3 px-5 bg-primary text-white rounded-sm mt-5 ">Envoyez</button>
                                </div>
                                </>
                        }/>
                </div>

                <div className="col-span-12 lg:col-span-4">
                    <div className="shadow  bg-secondary/20 p-10 rounded-md mt-10">
                        <div className="w-14 h-1 mb-5 rounded-sm bg-primary"></div>
                        <div className="border-b-[1px] pb-3 border-primary text-primary font-thin">
                            Article recents
                        </div>
                        <MiniCard author={"T.Hairath"} title={"POO avec JAVA"} category={"Programmation"} />
                        <MiniCard author={"Saad"} title={"Framework DJANGO Débutant"} category={"Programmation"} />
                        <MiniCard author={"Schekina"} title={"Arduino et les microprocesseur"} category={"Programmation/Electronique"} />
                        <MiniCard author={"Michael"} title={"Cisco "} category={"Reseaux"} />
                        <MiniCard author={"Majoie"} title={"VueJs/Laravel  "} category={"Programmation"} />
                        <MiniCard author={"Dionel"} title={"Symfony  "} category={"Programmation"} />
                        <MiniCard author={"Hilkiah"} title={"Anglais  "} category={"Langue"} />
                        <MiniCard author={"Charlie"} title={"Symfony"} category={"Programmation"} />
                    </div>
                    <div className="shadow  bg-secondary/20 p-10 rounded-md mt-10">
                        <div className="w-14 h-1 mb-5 rounded-sm bg-primary"></div>
                        <div className="border-b-[1px] pb-3 border-primary text-primary font-thin">
                            Catégories
                        </div>

                        <div className="border-b-[1px] pb-2 my-3 cursor-pointer">
                            <div className="flex px-5 line-clamp-1 ">
                                <span className="font-bold text-md text-primary">17</span>
                                <div className="font-thin text-md mx-2 ">Reseaux</div>
                            </div>
                        </div>
                        <div className="border-b-[1px] pb-2 my-3 cursor-pointer">
                            <div className="flex px-5 line-clamp-1 ">
                                <span className="font-bold text-md text-primary">5</span>
                                <div className="font-thin text-md mx-2 ">Programmations</div>
                            </div>
                        </div>
                        <div className="border-b-[1px] pb-2 my-3 cursor-pointer">
                            <div className="flex px-5 line-clamp-1 ">
                                <span className="font-bold text-md text-primary">9</span>
                                <div className="font-thin text-md mx-2 ">Anglais</div>
                            </div>
                        </div>

                    </div>
                    <div className="shadow bg-secondary/20 p-10 rounded-md mt-10">
                        <div className="w-14 h-1 mb-5 rounded-sm bg-primary"></div>
                        <div className="border-b-[1px] pb-3 border-primary text-primary font-thin">
                            Tags
                        </div>

                        <div className="flex flex-wrap my-3 ">
                            <div className=" px-5 py-3 bg-white mx-1 line-clamp-1 mt-2 cursor-pointer hover:bg-primary hover:text-white">DEVELOPPEMENT</div>
                            <div className=" px-5 py-3 bg-white mx-1 line-clamp-1 mt-2 cursor-pointer hover:bg-primary hover:text-white">DESIGN</div>
                            <div className=" px-5 py-3 bg-white mx-1 line-clamp-1 mt-2 cursor-pointer hover:bg-primary hover:text-white">Y</div>
                            <div className=" px-5 py-3 bg-white mx-1 line-clamp-1 mt-2 cursor-pointer hover:bg-primary hover:text-white">BUSINESS</div>
                        </div>

                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}



export default Blog
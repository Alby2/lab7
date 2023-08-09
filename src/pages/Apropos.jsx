import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Bannier from '../components/Apropos/Bannier'
import Card from '../components/Apropos/Card'
import Services from '../components/Apropos/Services'
import Communaute from '../components/Apropos/Communaute'
import Footer from '../components/layouts/Footer'

const Apropos = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen min-h-screen bg-cover pb-10">
                <Navbar />
                <div className="grid grid-cols-9 pt-28 ">
                    <div className="col-span-4 max-md:col-span-9 -mt-28 ">
                        <Bannier description={`Chez Lab7, nous croyons que la technologie est le moteur de l'avenir. Nous sommes passionnés par l'innovation et déterminés à façonner un monde numérique captivant. Notre plateforme est conçue pour les esprits curieux, les créateurs et les passionnés de nouvelles technologies, de l'électronique, de la programmation et des réseaux.`} title={'A propos'} />
                    </div>
                    <div className="col-span-5 max-md:col-span-9">
                        <img src="/robot.png" className="w-full bg-center bg-cover" alt="" />
                    </div>

                </div>
                {/* <Bannier /> */}

            </div>
            <div className="mx-24">
                <img src="/lampe_text.svg" className="-mt-10" />

                <Card image={"vision_text.svg"} textafterimage={true} title="Nos visions" description={`Chez Lab7, nous aspirons à devenir la référence en matière de ressources technologiques, offrant un environnement d' apprentissage novateur et une communauté d' experts passionnés. Nous visons à créer un espace où la créativité et l'innovation florissent, propulsant ainsi notre communauté vers un futur prometteur et durable. Chez Lab7, notre passion pour l'innovation est contagieuse.`} />

                <Card image={"mission_text.svg"} textafterimage={false} title="NOTRE MISSION" description={`Notre mission est de réunir une communauté dynamique d'apprenants et d'experts, pour explorer ensemble lesfrontières de la technologie. Nous sommes dédiés à offrirun environnement d'apprentissage interactif etollaboratif, où chacun peut développer sescompétences, partager des idées et contribuer à l'essortechnologique. Nous croyons que chaque idée, aussipetite soit-elle, peut avoir un impact majeur sur lemonde`} />
                <Services />
                <Communaute />
            </div>
            <Footer />

            {/* <Apropos /> */}
        </>
    )
}

export default Apropos
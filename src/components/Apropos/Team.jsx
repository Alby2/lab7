import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Team = () => {
    const [nextMember, setNextMember] = useState(null);
    const [previousMember, setPreviousMember] = useState(null);
    const [actuMember, setActuMember] = useState(null);
    const [actuIndexMember, setActuIndexMember] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const members = [{
        id: 1,
        firstname: "Michael",
        lastname: "KODJI",
        post: "Art Director, CEO",
        description: "Our team of designers, developers",
        image: "/person/img (4).png",
    }, {
        id: 2,
        firstname: "Hairath",
        lastname: "CHABI",
        post: "Art Director, CEO",
        description: "Our team of designers, developers",
        image: "/person/img (6).png",

    },
    {
        id: 3,
        firstname: "Majoie",
        lastname: "SAGBOHAN",
        post: "Art Director, CEO",
        description: "Our team of designers, developers",
        image: "/person/img (3).png",

    },
    {
        id: 4,
        firstname: "Dionel",
        lastname: "KAKPO",
        post: "Art Director, CEO",
        description: "Our team of designers, developers",
        image: "/person/img (4).png",

    },
    {
        id: 5,
        firstname: "Sheckina",
        lastname: "AMOUSSOU",
        post: "Art Director, CEO",
        description: "Our team of designers, developers",
        image: "/person/img (3).png",

    },];
    useEffect(() => {
        setIsLoading(true)
        setActuMember(members[actuIndexMember]);
        setNextMember(members[actuIndexMember + 1]);
        setIsLoading(false);

        return () => {
            setNextMember(null);
            setPreviousMember(null);
            setActuIndexMember(0);
            setIsLoading(true);
        }
    }, [""]);
    const slide = (previous = true) => {
        if (previous) {
            let acu = actuIndexMember - 1;
            setNextMember(actuMember);
            setActuIndexMember(acu);
            setActuMember(previousMember);
            setPreviousMember(members[acu - 1]);
        } else {
            let acu = actuIndexMember + 1;
            setPreviousMember(actuMember);
            setActuIndexMember(acu);
            setActuMember(nextMember);
            setNextMember(members[acu + 1]);
        }
    }

    return (
        <div className="mb-60 grid grid-cols-12 items-center ">
            <img src="/lampe_service.svg" className=" w-full col-span-12" />
            {/* <div className="col-span-1"></div> */}

            <div className="lg:col-span-5 col-span-12 col-start-2 mt-16">
                <p className="text-xl  font-medium  text-gray-700">
                    Chez Lab7, nous considérons notre communauté comme le cœur de notre plateforme. Notre espace
                    collaboratif favorise les interactions, les échanges d'idées et la coopération entre les membres. Rejoignez
                    notre communauté dynamique et inspirante pour partager votre passion pour la technologie et créer des
                    liens durables avec des personnes partageant les mêmes intérêts.
                </p>
            </div>
            <div className="lg:col-span-5 md:col-span-7 col-span-11 md:col-start-3 lg:col-start-8 mt-16 ">
                {isLoading ? null : (
                    <div className="flex justify-end relative mx-12">

                        <div className="h-[450px] w-full    ">
                            <img src={actuMember.image} alt="" className="w-full h-full rounded-lg" />
                        </div>
                        {actuIndexMember > 0 && (<div className="p-3 rounded-[100%] bg-white/80 text-2xl absolute shadow-lg -left-5 top-1/2 cursor-pointer" onClick={() => { slide() }}> <FaAngleLeft /> </div>)}
                        {actuIndexMember < members.length - 1 && (<div className="px-3 py-3 text-2xl rounded-[100%] bg-white/80 absolute shadow-lg -right-5 top-1/2 cursor-pointer" onClick={() => { slide(false) }}> <FaAngleRight />  </div>)}

                        <div className="bg-white absolute w-full -bottom-20 left-20  rounded-lg shadow-lg border-l-8 border-l-primary p-9 ">

                            <div className="flex flex-col">
                                <p className="text-gray-600 font-normal  text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores itaque ipsa doloribus reprehenderit ad sint unde fugit? Quas itaque eos totam. Nesciunt praesentium eligendi dolores quidem maxime officia odio?
                                </p>
                                <div className="flex mt-5 justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-md "> {actuMember.firstname + " " + actuMember.lastname}</span>
                                        <span className="font-light text-xs"> {actuMember.post}</span>
                                    </div>
                                        <span className="font-light text-xs"> 5 étoiles </span>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>



        </div>
    )
}

export default Team
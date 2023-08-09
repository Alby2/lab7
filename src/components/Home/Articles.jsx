import Card from "../Card"

const Articles = () => {
    return (
        <div className="mx-14 mt-20 mb-10">
            <div className="flex mb-20 justify-center">
                <span className="w-fit  pb-2 pr-5 text-xl text-primary font-extrabold  border-b-2 border-yellow-500">
                    Articles récents
                </span>
            </div>
            <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
       
                <Card />
                <Card />
                <Card />

            </div>
            <div className="flex justify-center mt-12">
                <div className="px-10 py-1 border-2 text-lg font-semibold w-fit cursor-pointer border-black hover:text-black hover:font-semibold hover:rounded-xl ">En savoir plus sur nous</div>
            </div>
        </div>
    )
}

export default Articles
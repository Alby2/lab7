import Card from "../Card"

const Articles = () => {
    return (
        <div className="sm:mx-24 mx-10 mt-20 mb-10">
            <div className="flex mb-20 justify-center">
                <span className="w-fit  pb-2 px-5 text-2xl  md:text-4xl text-black font-black  border-b-4 border-primary-2">
                    Articles récents
                </span>
            </div>
            <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-center mt-12">
                <div className="px-10 py-1 border-2 text-lg font-semibold w-fit cursor-pointer border-black hover:text-white hover:bg-black hover:rounded-full ">VOIR PLUS</div>
            </div>
        </div>
    )
}

export default Articles
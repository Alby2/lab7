import Card from "../Card"
import Paginations from "../Paginations"

const Articles = () => {
    return (
        <div className=" mt-20 mb-10">
            <div className="flex mb-20 justify-center">
                <span className="w-fit  pb-2 pr-5 text-3xl text-black font-black  border-b-2 border-yellow-500">
                    Articles récents
                </span>
            </div>
            <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
       
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Paginations totals={150} maxItems={30} page={1} />
        </div>
    )
}

export default Articles
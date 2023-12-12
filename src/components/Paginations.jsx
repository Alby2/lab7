
const Paginations = ({totals=0,page=0,maxItems=0}) => {
  return (
    <div className='flex justify-end mr-5 items-center'>
        <button className="border-2 border-primary px-5 py-2 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">Précédent</button>
        <button className="border-2 border-primary px-5 py-2 mx-1 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">1</button>
        <button className="border-2 border-primary px-5 py-2 mx-1 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">2</button>
        <button className="border-2 border-primary px-5 py-2 mx-1 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out bg-primary text-white">3</button>
        <div className="mx-1">...</div>
        <button className="border-2 border-primary px-5 py-2 mx-1 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">60</button>
        <button className="border-2 border-primary px-5 py-2 mx-1 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">61</button>
      <button className="border-2 border-primary px-5 py-2 rounded-full hover:bg-primary hover:text-white hover:transition hover:duration-150 hover:ease-in-out">Suivant</button>
    </div>
  )
}

export default Paginations


const Etiquette = ({text,action}) => {
  return (
    <div onClick={action} className="bg-white/10 rounded-lg cursor-pointer px-5 py-2 mx-3 text-sm font-thin text-gray-200/70 hover:text-secondary ">{text}</div>

  )
}

export default Etiquette
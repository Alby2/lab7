

const Comment = ({ isAuthor = false,message }) => {
    return (
        <div className="flex items-end my-5">
            <div className={isAuthor ? " bg-primary w-14 rounded-full  order-2" : "bg-primary w-14 rounded-full order-1"}>
                <img src="/layout.png" className="w-full h-12 rounded-full p-[2px]" alt=""/>
            </div>
            <div className={isAuthor ?" w-full bg-secondary/30 rounded-e-3xl mx-2 cursor-pointer rounded-3xl  px-10 py-5 order-1":" w-full bg-gray-50 rounded-e-3xl mx-2 cursor-pointer rounded-ss-3xl  px-10 py-5 order-2"}>
                <div className='flex justify-between mb-3 items-center '>
                    <div className='text-primary font-extrabold'>{isAuthor ? "Moi":"LAB 7"} </div>
                    <span className='text-gray-500 text-sm no-italic '>12 heures</span>
                </div>
                <div className=" line-clamp-4 hover:line-clamp-none">
                    {message ?? `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.luptate unde officiis, doloribus excepturi dolorem aperiam iure harum quaerat! Minus ex hic minima alias. Dolorem, in eum minus quas odit sit libero quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.luptate unde officiis, doloribus excepturi dolorem aperiam iure harum quaerat! Minus ex hic minima alias. Dolorem, in eum minus quas odit sit libero quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.luptate unde officiis, doloribus excepturi dolorem aperiam iure harum quaerat! Minus ex hic minima alias. Dolorem, in eum minus quas odit sit libero quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.luptate unde officiis, doloribus excepturi dolorem aperiam iure harum quaerat! Minus ex hic minima alias. Dolorem, in eum minus quas odit sit libero quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.luptate unde officiis, doloribus excepturi dolorem aperiam iure harum quaerat! Minus ex hic minima alias. Dolorem, in eum minus quas odit sit libero quod?
`}
                </div>
            </div>
        </div>
    )
}

export default Comment
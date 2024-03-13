
import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"

const Forums = () => {
    return (
        <>
            <div className="bg-home bg-fixed min-w-screen h-1/3 bg-cover pb-10">
                <Navbar />
                <div className="flex justify-center py-[10rem] ">
                    <span className="text-[5rem] md:text-[8rem] font-extrabold text-white">Forums</span>

                </div>
                {/* <Bannier /> */}

            </div>
            <div className="mx-2 lg:mx-24 py-10  grid grid-cols-12 space-x-5">

                <div className="col-span-12 lg:col-span-8 mb-10 ">
                    {/* <Card /> */}
                    <div className="grid grid-cols-12 space-x-4 mb-10 ">
                        <div className=" col-span-6 mt-3  md:col-span-3 pr-2 shadow-sm   bg-white ">
                            <select name="" id="" className="w-full h-full px-4 outline-none focus:border-none " placeholder="All Catégories">
                                <option value="" selected>All Catégories</option>
                                <option value="">Categories 1</option>
                                <option value="">Categories 2</option>
                                <option value="">Categories 3</option>
                                <option value="">Categories 4</option>
                                <option value="">Categories 5</option>
                            </select>
                            {/* <input type="text" className="w-full" placeholder="" /> */}
                        </div>
                        <div className=" col-span-6 mt-3  md:col-span-3 pr-2   bg-white shadow-sm ">
                            <select name="" id="" className="w-full h-full px-4 outline-none focus:border-none " placeholder="All Catégories">
                                <option value="" selected>Today</option>
                                <option value="" >Month</option>
                                <option value="">Last 3 month</option>
                                <option value="">Last Year</option>
                            </select>
                            {/* <input type="text" className="w-full" placeholder="" /> */}
                        </div>
                        <div className=" col-span-6 mt-3  md:col-span-4 px-2    bg-white shadow-sm ">
                            <input type="text" className="w-full h-full outline-none" placeholder="Enter Keyword" />
                            {/* <input type="text" className="w-full" placeholder="" /> */}
                        </div>
                        <div className=" col-span-6  mt-3 md:col-span-2 px-3 py-3 shadow-sm  bg-primary text-white rounded-md text-center">
                            Search
                        </div>

                    </div>
                    <div className="w-full py-5 bg-white shadow-sm rounded-sm border-l-2 border-primary grid grid-cols-12 ">
                        <div className="col-span-8 px-5">Category</div>
                        <div className="col-span-2 text-center">Topics</div>
                        <div className="col-span-2 text-center">Posts</div>

                    </div>
                    <>
                        <div className="w-full mt-3 px-5 py-5 bg-primary text-white shadow-sm rounded-sm flex items-center ">
                            <span className="text-xl font-light">Général</span>
                            <span className="text-sm font-extralight mx-2"> - </span>
                            <span className="text-sm font-light mx-2">  The General Forum</span>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50  py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>News & Announcements</div>
                                <span className="text-sm text-gray-400 font-normal">
                                    At first please make sure that you have unpacked the whole para normal
                                    lorem</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  25 </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  54 </div>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50 py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div> Sales & Suggestion</div>
                                <span className="text-sm text-gray-400 font-normal">
                                    At first please make sure that you have unpacked the whole para normal
                                    lorem</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  32 </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  68 </div>
                        </div>
                    </>
                    <>
                        <div className="w-full mt-3 px-5 py-5 bg-primary text-white shadow-sm rounded-sm flex items-center ">
                            <span className="text-xl font-light">Product Support</span>
                            <span className="text-sm font-extralight mx-2"> - </span>
                            <span className="text-sm font-light mx-2">Forums for individual product support topics</span>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50  py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>Restored - WordPress theme</div>
                                <span className="text-sm text-gray-400 font-normal">At first please make sure that you have unpacked the whole package</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">112</div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">253</div>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50 py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>Gideon300 - WordPress theme</div>
                                <span className="text-sm text-gray-400 font-normal">Gregor then turned to look out the window at the dull weather</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  136 </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  279 </div>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50 py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>Gideon300 - WordPress theme</div>
                                <span className="text-sm text-gray-400 font-normal">Gregor then turned to look out the window at the dull weather</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  136 </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  279 </div>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50  py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>Restored - WordPress theme</div>
                                <span className="text-sm text-gray-400 font-normal">At first please make sure that you have unpacked the whole package</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">112</div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">253</div>
                        </div>
                        <div className="w-full cursor-pointer hover:bg-slate-50 py-5 mt-[1px] bg-white  shadow-sm rounded-sm grid grid-cols-12 items-center ">
                            <div className=" col-span-8 text-xl font-light px-5 ">
                                <div>Gideon300 - WordPress theme</div>
                                <span className="text-sm text-gray-400 font-normal">Gregor then turned to look out the window at the dull weather</span>
                            </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  136 </div>
                            <div className="text-sm font-light mx-2 col-span-2 text-center">  279 </div>
                        </div>
                    </>
                </div>

                <div className="col-span-12 lg:col-span-4">

                    <div className="shadow  bg-white p-10 rounded-md ">
                        <div className="border-b-2 w-fit border-primary text-primary text-xl font-normal pb-1">Login</div>
                        {/* <div className="w-full min-h-[2px] bg-gray-200 mt-2"></div> */}

                        <div className="my-8 px-1">
                            <input type="text" className=" w-full border-[0.5px] border-gray-500 text-md p-3 bg-transparent font-light placeholder:text-gray-500 focus:outline-none  " placeholder="User Name" />
                        </div>
                        <div className="my-8 px-1">
                            <input type="password" className=" w-full border-[0.5px] border-gray-500 text-md p-3 bg-transparent font-light placeholder:text-gray-500 focus:outline-none  " placeholder="Password" />
                        </div>
                        <div className="flex items-center mx-2 mb-5">
                            <input type="checkbox" name="" id="" className="mr-2" />
                            <span className="text-sm font-light text-black">Remember me</span>
                        </div>


                        <div className="flex item-center justify-center">
                            <div className="px-10 py-2 rounded-full cursor-pointer shadow-primary text-white text-lg mt-3 bg-primary/75 hover:shadow-xl font-light ">Connexion</div>
                        </div>
                        <div className="flex items-center mx-2 mb-5 justify-center mt-5">
                            <span className="text-sm font-light text-gray-500 mr-2">Forgot Password ?</span>
                            <span className="text-sm font-light text-black mr-2"> | </span>
                            <span className="text-sm font-light text-gray-500 mr-2">Register</span>
                        </div>

                    </div>
                    <div className="shadow  bg-white p-10 rounded-md mt-10 ">
                        <div className="border-b-2 w-fit border-primary text-primary text-xl font-normal pb-1 mb-3 ">Newsletter</div>
                        {/* <div className="w-full min-h-[2px] bg-gray-200 mt-2"></div> */}
                        <div className="text-sm text-gray-300">At first please make sure thath you have unpacked the whole package</div>

                        <div className="my-8 px-1">
                            <input type="text" className=" w-full border-[0.5px] border-gray-500 text-md p-3 bg-transparent font-light placeholder:text-gray-500 focus:outline-none  " placeholder="Full Name" />
                        </div>
                        <div className="my-8 px-1">
                            <input type="email" className=" w-full border-[0.5px] border-gray-500 text-md p-3 bg-transparent font-light placeholder:text-gray-500 focus:outline-none  " placeholder="Email Address " />
                        </div>



                        <div className="flex  items-center justify-center bg-primary rounded-full">
                            <div className=" pb-4  cursor-pointer shadow-primary text-white text-lg mt-3 hover:shadow-xl font-light ">Subscribe Now</div>
                        </div>


                    </div>

                </div>




            </div>
            <Footer />
        </>
    )
}

export default Forums
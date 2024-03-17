import Carousal from "./Carousal"

export default function Dsa(){
    return(
        <div id="dsa" className=" font-poppins py-5 px-20">
            <div className="font-poppins flex flex-col items-center">
                <p className="text-gray-300 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins font-bold">Some problem solving skills</p>
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">DSA Journey.</h1>
            </div>
            <div id="window" className="flex">
                <div id="card" className="flex flex-col bg-white text-white h-fit m-5 rounded-xl">
                    <div className="bg-green-300 rounded-xl border-black m-5 flex justify-center">
                        <img width="200" height="200" src="https://img.icons8.com/color/480/microsoft-excel-2019--v1.png" alt="microsoft-excel-2019--v1"/>
                    </div>
                    <span className="text-black font-bold size-2xl m-5 mb-0">Problems</span>
                    <p className="text-black m-5 mb-0">This is the list of problems that I have been solving.</p>
                    <button className="text-black m-5 p-2 bg-blue-400 rounded-full hover:bg-blue-700 hover:text-white"><a href="https://docs.google.com/spreadsheets/d/1LJy969JWJwnaLv9ziXTkf8DHl7QSo42SVKWH_xZnJzI/edit#gid=0https://docs.google.com/spreadsheets/d/1LJy969JWJwnaLv9ziXTkf8DHl7QSo42SVKWH_xZnJzI/edit?usp=sharing">Take a look</a></button>
                </div>

                <div id="corousal" className="flex flex-col bg-white text-white w-full h-full m-5 rounded-xl">
                    <div className="w-full rounded-xl p-4 text-orange-600 text-center font-poppins">
                       <span className="font-extrabold text-[40px] shadow-md shadow-gray-300">Online platform profiles</span>
                    </div>
                    <Carousal/>
                </div>
            </div>
    </div>
    )
}
import Stroke from "./Scroll"
import Bullets from "./Bullets"

export default function Intro(){
    return (
        <div className="flex px-20 pt-20 h-screen gap-x-8">
            <Stroke/>
            <div className="flex flex-col w-full">
                <h1 className="text-white font-poppins  tracking-wide font-extrabold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">Hi, I'm
                  <span className=" font-poppins tracking-wide bg-gradient-to-r from-violet-900 via-red-500 to-orange-500 text-transparent bg-clip-text"> YASH</span>
                </h1>
                <p className="font-poppins tracking-wide text-white font-bold lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] my-2">Software Developer</p>
                <Bullets/>
            </div>

            <div className="h-300 w-full bg-no-repeat bg-contain" style={{ backgroundImage: 'url(../src/assets/role.png)' }}/>
        </div>
    )
}
import { GoDownload } from "react-icons/go";

export default function Navbar(){
    return (
        <div className="flex justify-between">
            <div className="font-poppins text-2xl text-white p-10 flex justify-center items-center">
            <div className="h-10 w-10 rounded-full bg-center bg-cover"><img src="/assets/Y.svg" alt="logo" /></div>
                <span className="font-poppins text-2xl text-white"> | Portfolio</span>
            </div>
            <ul className="font-poppins text-gray-500 font-bold text-lg flex items-center gap-5 p-10 ">
                <li className="hover:text-white flex gap-2 items-center">Resume <a href="Yash_Resume_July25.pdf" download="Resume.pdf"><GoDownload/></a></li>
                <li className="hover:text-white"><a href= "mailto:yashkvk7@gmail.com">Email</a></li>
            </ul>
        </div>
    )
}
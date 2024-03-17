export default function Navbar(){
    return (
        <div className="flex justify-between">
            <div className="font-poppins text-2xl text-white p-10 flex justify-center items-center">
            <div className="h-10 w-10 rounded-full bg-center bg-cover"><img src="../public/assets/Y.svg" alt="logo" /></div>
                <span className="font-poppins text-2xl text-white"> | Portfolio</span>
            </div>
            <ul className="font-poppins text-gray-500 font-bold text-lg flex items-center gap-10 p-10 ">
                <li className="hover:text-white"><a href="#overview">About</a></li>
                <li className="hover:text-white"><a href="#work">Work</a></li>
            </ul>
        </div>
    )
}
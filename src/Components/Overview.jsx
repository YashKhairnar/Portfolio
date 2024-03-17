import Cards from "./Cards"

export default function Overview(){
    return (
        <div id="overview" className="py-5 px-20">
            <div className="font-poppins flex flex-col items-center">
                <p className="text-gray-300 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins font-bold">Introduction</p>
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h1>
            </div>
            <p className="font-poppins text-gray-400 text-[20px]">
            Hello! I'm a final year undergraduate student passionate about machine learning,
            artificial intelligence, and full-stack development. With a solid grasp of AI & ML
            technologies and proficiency in both frontend and backend development, I'm actively 
            exploring opportunities to apply my skills. 
            As I approach graduation, I'm focused on academic excellence while building a diverse 
            portfolio through hands-on projects.
            </p>
        </div>
    )
}
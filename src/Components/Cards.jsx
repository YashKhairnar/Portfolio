export default function Cards(){
    return (
        <div className="h-200 mt-10 flex gap-[10px] items-center">
           <div className="h-full w-full bg-gradient-b from-green-500 to-pink-500 p-[1px] rounded-[20px] text-white">
                <div>1</div>
            </div>
            <div className="w-full green-pink-gradient rounded-md text-white">2</div>
            <div className="w-full green-pink-gradient rounded-md text-white">3</div>
            <div className="w-full green-pink-gradient rounded-md text-white">4</div>
        </div>
    )
}
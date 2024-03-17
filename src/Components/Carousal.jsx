import { useState } from "react"
import gfg from "../assets/gfg.png";
import cn from "../assets/cn.png";
import cf from "../assets/cf.webp";
import lc from "../assets/lc.png"

export default function Carousal(){
    const slides = [
        {  
            "path":cn,
            "name":"coding ninjas",
            "link":"https://www.codingninjas.com/studio/profile/6b5f9065-d52b-4e49-9617-6d292c7aeb5d"
        },
        {  
            "path": gfg,
            "name":"Geeks for Geeks",
            "link": "https://auth.geeksforgeeks.org/user/yashk11/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
        },
        {  
            "path":lc,
            "name":"Leetcode",
            "link":"https://leetcode.com/esotericyoda_11/"
        },
        {  
            "path":cf,
            "name":"Codeforces",
            "link":"https://codeforces.com/profile/Zeus_11"
        }
    ]
    const [index, setSlide] = useState(0);
    function nextSlide(){
        setSlide((index) => (index===slides.length-1 ? 0:index+1))
    }
    function prevSlide(){
        setSlide((index) => (index===0? slides.length-1: index-1))
    }

    return(
        <div className="text-black p-5 w-full flex gap-4 justify-center relative">
                <button onClick={prevSlide} className="relative top-1/2 "><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/circled-chevron-left.png" alt="circled-chevron-left"/></button>
                <div className="flex flex-col justify-center items-center w-fit h-[300px]">
                    <img key={index} src={slides[index].path} width="200" height="200" alt={`slide-${index + 1}`} />
                    <a className="p-4 text-2xl" href={slides[index].link}>{slides[index].name}</a>
                </div>
                <button onClick={nextSlide} className="relative top-1/2 right-0 "><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png" alt="circled-chevron-right"/></button>
        </div>
    )
}
import Navbar from "../Components/Navbar"
import Intro from "../Components/Intro"
import Overview from "../Components/Overview"
import Work from "../Components/work"
import Stack from "../Components/TechStack"
import Connect from "../Components/Connect"
import Dsa from "../Components/Dsa"

export default function LandingPage(){
    return (
        <div className="z-0 bg-neutral-950 h-contain">
            <Navbar/>
            <Intro/>
            <Overview/>
            <Work/>
            <Stack/>
            <Connect/>
            <Dsa/>
        </div>
    )
}
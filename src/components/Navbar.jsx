import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { about_icon, home_icon, nav_pic, phone_icon, project_icon } from '../assets/images/assets'
import { IoMenu } from "react-icons/io5";
import { Player } from '@lordicon/react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const timeline1=gsap.timeline({})
    useGSAP(() => {
        timeline1.fromTo(".NavGsap1", { opacity: 0, y: -10 }, { delay: 0.5, opacity: 1, y: 0, duration: 0.2, ease: "power1.inOut" })
        gsap.fromTo(".NavGsap2", { opacity: 0}, { opacity: 1, y: 0, duration: 0.2, stagger: 0.3, ease: "power1.inOut" })

    }, [])
    const [visibility,setVisibility]=useState(false)

    const toggleVisibility=()=>{
        setVisibility(!visibility)
    }

    const playerRef = useRef({});

    const onMouseEnter = (i) => {
        playerRef.current[i]?.play()
    }
    const onMouseLeave = (i) => {
        playerRef.current[i]?.pause()
        playerRef.current[i]?.goToFirstFrame()
    }
    return (
        <div className='max-[530px]:flex flex-col max-[530px]:bg-black'>
            <header className='navbar w-full h-20 flex items-center justify-between max-[900px]:gap-2'>
                <div className='NavGsap1 flex w-1/5 justify-center items-center '>
                    <Link to={"/"}><img className='cursor-pointer object-cover object-top rounded-full h-14 w-14 max-[530px]:h-11 max-[530px]:w-11' src={nav_pic} alt="" /></Link>
                </div>
                <nav className='NavGsap2 navlink flex items-center justify-around w-3/5 max-[900px]:w-4/5 max-[530px]:hidden'>
                    <Link className='NavGsap2' to={"/"}>Home</Link>
                    <Link className='NavGsap2' to={"/about"} >About</Link>
                    <Link className='NavGsap2' to={"/myprojects"}>Projects</Link>
                    <Link className='NavGsap2' to={"/contact"}>Contact Me</Link>
                </nav>
                <IoMenu onClick={toggleVisibility} className='hidden text-5xl cursor-pointer mr-2 max-[530px]:flex' />
            </header>
            {visibility &&
            <div className={`hidden max-[530px]:flex flex-col items-center text-xl font-medium w-[90%] mx-auto pb-4 transition-all duration-[5s] opacity-0 ${visibility && "opacity-100"} `}>
                <Link id='home_icon' onMouseEnter={()=>onMouseEnter("home_icon")} onMouseLeave={()=>onMouseLeave("home_icon")} className='flex items-center justify-between w-full cursor-pointer' to={"/"}>
                    <span>Home</span>
                    <Player
                        ref={(player)=>(playerRef.current["home_icon"]=player)}
                        icon={home_icon}
                        colorize="#fff"
                        size={"28px"}
                        onComplete={() => playerRef.current["home_icon"]?.playFromBeginning()}
                    />
                </Link>
                <hr className='border-[#383838] my-2 w-full' />
                <Link id='about_icon' onMouseEnter={()=>onMouseEnter("about_icon")} onMouseLeave={()=>onMouseLeave("about_icon")} className='flex items-center justify-between w-full cursor-pointer' to={"/about"} >
                    <span>About</span>
                    <Player
                        ref={(player)=>(playerRef.current["about_icon"]=player)}
                        icon={about_icon}
                        colorize="#fff"
                        size={"28px"}
                        onComplete={() => playerRef.current["about_icon"]?.playFromBeginning()}
                    />
                </Link>
                <hr className='border-[#383838] my-2 w-full' />
                <Link id='project_icon' onMouseEnter={()=>onMouseEnter("project_icon")} onMouseLeave={()=>onMouseLeave("project_icon")} className='flex items-center justify-between w-full cursor-pointer' to={"/myprojects"}>
                    <span>Projects</span>
                    <Player
                        ref={(player)=>(playerRef.current["project_icon"]=player)}
                        icon={project_icon}
                        colorize="#fff"
                        size={"28px"}
                        onComplete={() => playerRef.current["project_icon"]?.playFromBeginning()}
                    />
                </Link>
                <hr className='border-[#383838] my-2 w-full' />
                <Link id='phone_icon' onMouseEnter={()=>onMouseEnter("phone_icon")} onMouseLeave={()=>onMouseLeave("phone_icon")} className='flex items-center justify-between w-full cursor-pointer' to={"/contact"}>
                    <span>Contact Me</span>
                    <Player
                        ref={(player)=>(playerRef.current["phone_icon"]=player)}
                        icon={phone_icon}
                        colorize="#fff"
                        size={"28px"}
                        onComplete={() => playerRef.current["phone_icon"]?.playFromBeginning()}
                    />
                </Link>
            </div>
}
        </div>
    )
}

export default Navbar

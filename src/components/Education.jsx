import React, { useRef } from 'react'
import { Player } from '@lordicon/react';
import ICON from "../assets/gifs/profile_icon.json"
import { educationData } from "../assets/images/assets"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Education = () => {
    gsap.registerPlugin(useGSAP,ScrollTrigger);

    const timeline7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#EducationGsap",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    })
    useGSAP(() => {
        timeline7.fromTo(".EducationGsap1", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.inOut" })
        timeline7.fromTo("dotlottie-player", { x: -600, y: 200, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 5, ease: "power1.inOut" })
        // timeline7.fromTo(".EducationGsap2", { x: 600, y: 200, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 2, ease: "power1.inOut", stagger: 2 })
    })

    const playerRef = useRef({});

    const onMouseEnter = (i) => {
        playerRef.current[i]?.play()
    }
    const onMouseLeave = (i) => {
        playerRef.current[i]?.pause()
        playerRef.current[i]?.goToFirstFrame()
    }

    return (
        <section id='EducationGsap' className='flex flex-col mb-40 max-[700px]:mb-20 max-[530px]:px-2'>
            <h2 className='EducationGsap1 section-titles'>Education</h2>
            <div className='flex w-full mt-10'>
                <div className='w-1/2 flex self-center justify-center max-[1185px]:hidden max-[1185px]:w-0 '>
                    <dotlottie-player className="" src="https://lottie.host/a47cf697-b05f-45ac-a421-21532b0d3e2c/gKPmitHN6w.json" background="transparent" speed="1" style={{ width: "80%", height: "80%" }} loop autoplay></dotlottie-player>
                </div>
                <div className='w-1/2 flex flex-col gap-5 self-center justify-center max-[1185px]:w-4/5 max-[1185px]:mx-auto max-[700px]:w-full'>
                    {educationData.map((education, i) => (
                        <div key={i} onMouseEnter={() => onMouseEnter(education.id)} onMouseLeave={() => onMouseLeave(education.id)} className=" relative eduaction_bg_grad_custom rounded-xl w-[90%] h-40 max-[1185px]:w-full max-[530px]:h-28 max-[360px]:h-36">
                            <div id={`ed_hover${i}`} onMouseMove={(e) => {
                                let { left, top } = e.target.getBoundingClientRect()
                                let x = e.clientX - left
                                let y = e.clientY - top
                                let card = document.getElementById(`ed_hover${i}`)
                                card.style.setProperty("--x", x + "px")
                                card.style.setProperty("--y", y + "px")
                            }} className='ed_hover' >
                                <div className='flex flex-col gap-4 absolute z-[100] box-border w-[100%] h-40 py-4 max-[530px]:py-3 max-[530px]:gap-1 max-[530px]:'>
                                    <h4 className='text-center text-[#14ffa9] max-[530px]:text-[11px]'>{education.startYear} - {education.endYear}</h4>
                                    <div className='flex gap-5 pl-8 max-[700px]:px-5 max-[530px]:gap-2 max-[530px]:px-3'>
                                        <Player
                                            ref={(player) => (playerRef.current[education.id] = player)}
                                            icon={ICON}
                                            colorize="#e8308c"
                                            size={"3.75rem"}
                                            onComplete={() => playerRef.current[education.id]?.playFromBeginning()}
                                        />
                                        <div className='flex flex-col gap-1 max-[530px]:'>
                                            <div className=' text-2xl font-semibold max-[530px]:text-base'>{education.degree}</div>
                                            <div className=' text-base max-[530px]:text-[11px]'>{education.institute}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education

import React, { useState } from 'react'
import { profile_pic } from '../assets/images/assets'
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const Intro = () => {
  // gsap.registerPlugin(useGSAP,ScrollTrigger);

  // const timeline5=gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".introGsap",
  //     toggleActions: "restart pause resume pause",
  //     endTrigger: ".endIntroGsap",
  //     start: "10px 100%",
  //     end: "+=400", 
  //     scrub: true,
  //     // markers:true
  //   }
  // })
  // useGSAP(()=>{
  //   timeline5.fromTo(".introGsap1",{opacity:0,y:100},{opacity:1,y:0, duration:0.7, ease: "power2.inOut"})
  //   timeline5.fromTo(".introGsap2",{opacity:0,x:500},{opacity:1,x:0, duration:0.1, ease: "power1.inOut"})
  //   timeline5.fromTo(".introGsap3", { opacity: 0, x: -500 }, { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" })
  //   timeline5.fromTo(".introGsap4", { opacity: 0, y: 500 }, { opacity: 1, y: 0, duration: 0.7, ease: "expo.inOut" })
  // })

  const [expandText, setExpandText] = useState(false)
  const toggleExpand = () => {
    setExpandText(!expandText)
  }
  return (
    <section className='introGsap md:h-[100vh] overflow-hidden flex flex-col gap-16 mb-40 max-[700px]:gap-5  max-[700px]:mb-20 max-[530px]:px-4'>
      <h2 className='introGsap1 section-titles'>About Me</h2>
      <div className='flex flex-row-reverse justify-between items-center gap-5 max-[700px]:items-start max-[700px]:inline max-[530px]:flex max-[530px]:flex-col max-[530px]:items-center'>
        <div className='w-1/2 relative flex justify-center max-[700px]:inline  max-[700px]:w-full max-[530px]:flex '>
          <img className='introGsap2 w-[300px] h-[350px] object-cover object-top rounded-xl saturate-0 hover:saturate-100 hover:scale-110 transition-all duration-1000 cursor-pointer max-[700px]:float-right max-[700px]:w-[210px]  max-[700px]:h-[270px]  max-[700px]:ml-8 max-[530px]:ml-0 max-[530px]:w-[250px] max-[530px]:h-[310px]' src={profile_pic} alt="" />
        </div>
        <div className='w-1/2 flex flex-col gap-5 max-[700px]:w-full max-[700px]:inline max-[530px]:flex max-[530px]:flex-col max-[530px]:gap-2'>
          <h3 className='introGsap3  text-[#14ffa9] text-3xl transition-all'>Who am I?</h3>
          <div className='introGsap4 text-lg'>
            <p>My name is Zulqarnain Sikander, and I am a self-taught web developer. I embarked on my website development journey at the end of 2023, leveraging free online resources to expand my skills. Currently, I am pursuing a degree in BS Software Engineering from Islamia University of Bahawalpur.
              I am passionate about acquiring new skills and staying updated with the latest technologies. In the future, I plan to explore app development once I feel confident in my proficiency in web development.</p>
            {expandText
              ? <p>I am highly self-motivated and enjoy the challenges that come with exploring new technologies and pushing the boundaries of my knowledge. I look forward to contributing my skills and expertise to meaningful projects and continuing my journey of growth and learning in the world of technology.</p>
              : ""
            }
            <span className='cursor-pointer hover:text-blue-800 text-[#e8308c]' onClick={() => toggleExpand()}>{expandText ? "show less" : "show more"}</span>
          </div>
        </div>
      </div>
      <div className='endIntroGsap hidden'></div>
    </section>
  )
}

export default Intro

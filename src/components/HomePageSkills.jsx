import React from 'react'
import { skillsLogo } from '../assets/images/assets'
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePageSkills = () => {
  // gsap.registerPlugin(useGSAP,ScrollTrigger);

  // const timeline6=gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".skillsGsap",
  //     start: "top 80%",
  //     end: "top 30%", 
  //     scrub: true,
  //   }
  // })
  // useGSAP(()=>{
  //   timeline6.fromTo(".skillsGsap1",{opacity:0,y:100},{opacity:1,y:0, duration:0.7, ease: "power2.inOut"})
  //   timeline6.fromTo(".skillsGsap2",{opacity:0},{opacity:1, duration:2, ease: "power1.inOut"})
  // })

  const duplicatedSkillsLogo = [...skillsLogo, ...skillsLogo];

  return (
    <section id='skills' className='skillsGsap flex flex-col gap-10 max-[530px]:gap-4'>
      <h2 className='skillsGsap1 section-titles'>Skills</h2>
      <div className='w-[90%] overflow-hidden h-[40vh] mx-auto max-[530px]:h-[25vh] '>
        <div className='flex w-[calc(11rem*20)] h-full items-center gap-16 infinite-scroll max-[530px]:w-[calc(8rem*20)] max-[530px]:gap-8'>
        {duplicatedSkillsLogo.map((skill, i) => (
          <div className='' key={i}>
          <div className='skillsGsap2 bg-grad-custom flex flex-col items-center justify-center gap-3 text-2xl w-44 h-40 rounded-xl hover:border-violet-500 hover:scale-[1.15] transition-all duration-500 cursor-pointer max-[530px]:w-32 max-[530px]:h-28 max-[530px]:text-lg '>
            <div className='relative w-10 h-10 max-[530px]:w-7 max-[530px]:h-7 '>
              <img className='absolute w-full h-full object-fill' src={skill.img} alt="" />
            </div>
            <p>{skill.lang}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default HomePageSkills


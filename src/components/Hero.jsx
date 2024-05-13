import React, { useState } from 'react'
// import { profile_pic } from '../assets/images/assets'
import HeroCodeBar from './HeroCodeBar'
import { IoLogoGithub } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { FaUpwork } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const timeline2 = gsap.timeline({})
  const timeline3 = gsap.timeline({})
  useGSAP(() => {
    timeline2.fromTo(".heroGsap1", { opacity: 0, y: 10 }, { delay: 0.3, opacity: 1, y: 0, duration: 0.2, stagger: 0.6, ease: "power1.inOut" })
    timeline2.fromTo(".heroGsap2", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.1, stagger: { amount: 1, from: "end" } })
    timeline2.fromTo(".heroGsap3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 })
    timeline3.fromTo(".heroGsap4", { opacity: 0, x: 500 }, { opacity: 1, x: 0, duration: 1.2 })
    timeline3.fromTo(".heroGsap5", { opacity: 0, x: 500 }, { opacity: 1, x: 0, duration: 1, stagger: 0.3 })
  }, [])

  const [isHovered, setIsHovered] = useState(null)
  const handleMouseEnter = (btn_id) => {
    setIsHovered(btn_id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <section className='overflow-hidden w-full h-[90vh] flex gap-10 items-center mt-10 max-[900px]:h-full max-[700px]:flex-col max-[530px]:px-4 '>
      <div className='flex mt-[-80px] w-1/2 flex-col gap-3 max-[900px]:mt-0 max-[700px]:w-full'>
        <h4 className='heroGsap1 text-3xl max-[530px]:text-2xl'>Assalam o alaikum!</h4>
        <div className='font-bold'>
          <h1 className='heroGsap1 mb-1  text-[34px]'>I'm <span className='text-[36px] text-[#f44545]'>Zulqarnain Sikander,</span></h1>
          <h2 className='heroGsap1 text-2xl'>A Junior <span>Full Stack Web Developer</span></h2>
        </div>
        <div className="flex items-center gap-7 mt-5 mb-2">
          <Link to={"https://github.com/mahersiyal1122"} target='_blank' className='heroGsap2 text-5xl hover:text-[#e8308c] hover:scale-125 hover:transition-all'><IoLogoGithub /></Link>
          <Link to={"https://www.linkedin.com/in/zulqarnain-sikander-65b7372b1"} target='_blank' className='heroGsap2 text-[39px] hover:text-[#e8308c] hover:scale-125 hover:transition-all'><ImLinkedin /></Link>
          <Link to={"https://www.upwork.com/freelancers/~0187a7466a1b6abf12"} target='_blank' className='heroGsap2 text-[44px] hover:text-[#e8308c] hover:scale-125 hover:transition-all'><FaUpwork /></Link>
          <Link to={"https://wa.me/+923277169982?text=Hello!%20Welcome%20from%20our%20website!"} target='_blank' className='heroGsap2 text-5xl hover:text-[#e8308c] hover:scale-125 hover:transition-all'><FaWhatsapp /></Link>
        </div>
        <div className='hero-btn flex gap-8 mt-5 max-[830px]:gap-4'>
          <button className='heroGsap3 flex items-center gap-2 max-[830px]:gap-1'
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <span>Contact Me</span>
            <span><lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger={isHovered === 1 ? "loop" : ""}
              style={{ "width": "20px" }}
              colors={isHovered === 1 ? "primary:#fff" : "primary:#e8308c"}
            >
            </lord-icon></span>
          </button>
          <button className='heroGsap3 flex items-center gap-2 max-[830px]:gap-1'
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <span>Get Resume</span>
            <span><lord-icon
              src="https://cdn.lordicon.com/xljvqlng.json"
              trigger={isHovered === 2 ? "loop" : ""}
              style={{ "width": "20px" }}
              colors={isHovered === 2 ? "primary:#fff" : "primary:#e8308c"}
            >
            </lord-icon></span>

          </button>
        </div>
      </div>

      <div className='heroGsap4 w-1/2 self-start border rounded-md from-[#2800ab4a] border-[#1b2c68a0] bg-gradient-to-r  to-[#0000009f]  via-[#f445450d] max-[700px]:w-full'>
        <div className='flex gap-3 my-[18px] px-8 max-[530px]:px-4'>
          <div className='heroGsap5 w-3 h-3 bg-[#14ffa9] rounded-full'></div>
          <div className='heroGsap5 w-3 h-3 bg-[#fb923c] rounded-full'></div>
          <div className='heroGsap5 w-3 h-3 bg-[#f44545] rounded-full'></div>
        </div>
        <HeroCodeBar />
      </div>
    </section>
  )
}

export default Hero

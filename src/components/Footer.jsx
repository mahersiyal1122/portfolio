import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { FaUpwork } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 justify-center items-center pb-20 max-[730px]:gap-6 max-[530px]:gap-4 max-[530px]:pb-10 max-[530px]:px-4'>
      <h2 className='font-semibold text-[#14ffa9] max-[530px]:text-xs'>Feel Free to visit my Social Accounts</h2>
      <div className="flex items-center gap-20 mt-5 mb-2 max-[730px]:gap-10 max-[530px]:gap-8">
        <Link to={"https://github.com/mahersiyal1122"} target='_blank' className='text-[55px] hover:text-[#e8308c] hover:scale-125 hover:transition-all max-[730px]:text-4xl max-[530px]:text-3xl'><IoLogoGithub /></Link>
        <Link to={"https://www.linkedin.com/in/zulqarnain-sikander-65b7372b1"} target='_blank' className='text-[59px] hover:text-[#e8308c] hover:scale-125 hover:transition-all max-[730px]:text-3xl max-[530px]:text-2xl'><ImLinkedin /></Link>
        <Link to={"https://www.instagram.com/mz_siyal04?igsh=Z3M2emg4YjNhZXBx"} target='_blank' className='text-8xl hover:text-[#e8308c] hover:scale-125 hover:transition-all max-[730px]:text-4xl max-[530px]:text-3xl'><IoLogoInstagram /></Link>
        <Link to={"https://www.upwork.com/freelancers/~0187a7466a1b6abf12"} target='_blank' className='text-[65px] hover:text-[#e8308c] hover:scale-125 hover:transition-all max-[730px]:text-4xl max-[530px]:text-3xl'><FaUpwork /></Link>
        <Link to={"https://wa.me/+923277169982?text=Hello!%20Welcome%20from%20our%20website!"} target='_blank' className='text-[55px] hover:text-[#e8308c] hover:scale-125 hover:transition-all max-[730px]:text-4xl max-[530px]:text-3xl'><FaWhatsapp /></Link>
      </div>
      <p className='font-semibold max-[730px]:text-center max-[530px]:text-sm '>Copyright &copy; 2024  <span className='px-1'>|</span>  Portfolio by <span className='text-[#f44545] text-lg max-[530px]:text-base'>Zulqarnain Sikander</span></p>
    </footer>
  )
}

export default Footer

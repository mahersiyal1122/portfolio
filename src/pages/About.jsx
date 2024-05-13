import React from 'react'
import { about_pic1 } from '../assets/images/assets'
import Line from '../components/Line'

const About = () => {
  return (
    <section className='flex flex-col max-[530px]:px-4'>
      <div className='flex justify-center items-center mt-5 mb-16 max-[700px]:gap-2 max-[700px]:mb-10'>
        <h2 className='text-5xl font-semibold max-[1000px]:text-4xl max-[530px]:text-[26px]'>Everything</h2>
        <div className="max-[700px]:hidden">
        <dotlottie-player src="https://lottie.host/f5a36573-5614-447b-b094-bf37ef137c10/1Vaq1WrQKa.json" background="transparent" speed="1" style={{ width: "200px", height: "150px" }} loop autoplay></dotlottie-player>
        </div>
        <h2 className='text-5xl font-semibold max-[1000px]:text-4xl max-[530px]:text-[26px]'>About Me</h2>
      </div>
      <div className='flex gap-16 mb-14 max-[1000px]:gap-10 max-[1000px]:mb-5 max-[700px]:flex-col max-[530px]:gap-0'>
        <div className='w-[350px] h-[350px] max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[700px]:w-full max-[700px]:flex max-[700px]:justify-center'>
          <img className='rounded-full object-cover object-top w-[350px] h-[350px] max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[530px]:w-[200px] max-[530px]:h-[200px]' src={about_pic1} alt="" />
        </div>
        <div className='w-[65%] text-4xl font-[450] flex flex-col justify-center max-[1000px]:text-xl max-[1000px]:w-[60%] max-[700px]:w-full max-[700px]:text-center max-[530px]:text-base'>
          <h3 className='text-5xl font-medium max-[1000px]:text-3xl max-[530px]:text-xl'>Hello!</h3>
          <h2 className='text-5xl font-medium text-[#f44545] max-[1000px]:text-3xl max-[530px]:text-2xl'>I'm Zulqarnain Sikander,</h2>
          <h3 className=''>a Junior Full Stack Web Developer,</h3>
          <p>currently pursuing a BS degree in Software Engineering from the from <span className='text-[#f44545]'>The ISLAMIA UNIVERSITY OF BAHAWALPUR</span>, located in Bahawalpur, Punjab, <span className='text-[#f44545]'>Pakistan.</span></p>
        </div>
      </div>
      <Line />
      <div className='flex gap-20 max-[1000px]:flex-col-reverse max-[1000px]:gap-5 max-[1000px]:mt-[-60px]'>
        <div className='text-3xl w-[55%] font-[450] flex flex-col justify-center max-[1000px]:w-full max-[1000px]:text-xl max-[530px]:text-base'>
          <p>My coding journey began in late 2022 with <span className='text-[#f44545]'>Python</span>. Since then, I've been immersed in the world of web development, learning from various online resources. Throughout my journey, I've built <span className='text-[#f44545]'>13+ projects</span> using <span className='text-[#f44545]'>Reactjs</span>, <span className='text-[#f44545]'>Tailwindcss</span>, <span className='text-[#f44545]'>Expressjs</span>, <span className='text-[#f44545]'>MongoDB</span>, <span className='text-[#f44545]'>JavaScript</span>, <span className='text-[#f44545]'>GSAP</span>, <span className='text-[#f44545]'>and more.</span>
          </p>
        </div>
        <div className='w-[400px] h-[400px] flex self-end max-[1000px]:w-full max-[1000px]:h-full max-[1000px]:justify-center'>
          <dotlottie-player src="https://lottie.host/24679a87-2b2d-4cd5-8882-9f1d6c58f3ae/8SITYsQCLw.json" background="transparent" speed="1" style={{ maxWidth: "400px", minWidth: "200px", maxHeight: "400px",minHight: "200px", }} loop autoplay></dotlottie-player>
        </div>
      </div>
      <Line />
      <div className='flex gap-20 max-[1000px]:flex-col max-[1000px]:gap-5 max-[1000px]:mt-[-60px]'>
        <div className='w-[400px] h-[400px] flex self-end max-[1000px]:w-full max-[1000px]:h-full max-[1000px]:justify-center'>
          <dotlottie-player src="https://lottie.host/973ee898-fb72-4e3c-98c7-fb0d5627e36f/pbabF7QRl9.json" background="transparent" speed="1" style={{ maxWidth: "400px", minWidth: "200px", maxHeight: "400px",minHight: "200px", }} loop autoplay></dotlottie-player>
        </div>
        <div className='text-3xl w-[55%] font-[450] flex flex-col justify-center max-[1000px]:w-full max-[1000px]:text-xl max-[530px]:text-base'>
          <p>These projects have been instrumental in sharpening my skills and allowing me to explore a wide array of cutting-edge technologies. My dedication to coding drives me to <span className='text-[#f44545]'>solve real-world problems</span> through coding-related activities, constantly seeking new challenges and opportunities for growth.
          </p>
        </div>
      </div>
      <Line />
      <div className='text-center w-[80%] mx-auto my-16 text-3xl font-semibold text-[#f44545] max-[1000px]:w-[90%] max-[1000px]:text-xl max-[1000px]:my-4 max-[530px]:text-base max-[530px]:my-0'>
        Thank you for visiting my portfolio. Feel free to reach out if you have any questions or opportunities for collaboration.
      </div>
      <Line />
    </section>
  )
}

export default About

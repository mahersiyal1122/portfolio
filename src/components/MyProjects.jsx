import React from 'react'
import { myProjectData } from '../assets/images/assets';
import { Link } from 'react-router-dom';
const MyProjects = () => {

    const truncateText = (text) => {
        if (text.length > 80) {
          return text.substring(0, 80) + "...";
        }
        return text;
      };


    return (
        <div className='mb-40 mt-14 max-[610px]:mt-5 max-[610px]:mb-20'>
            <h2 className='font-bold text-[max(3.2vw,32px)] text-center mb-16 max-[610px]:mb-10'>My Projects</h2>
            <div className='grid grid-cols-3 gap-10 gap-y-14 w-full justify-items-center max-[990px]:grid-cols-2 max-[610px]:grid-cols-1 max-[610px]:gap-y-9'>
                {myProjectData.map((data)=>(                
                <Link to={`/myprojects/${data.title}`} key={data.id}><div className='flex flex-col w-[18.1rem] h-[360px] gap-5 bg-black border border-[#1b2c68a0] rounded-xl max-[1024]:'>
                    <div className='relative w-[18rem] h-[11rem] rounded-[0.75rem_0.75rem_0_0] overflow-hidden cursor-pointer max-[1024]:'>
                        <img className='absolute w-full h-full hover:scale-110 transition-all duration-[400ms] ' src={data.img} alt="" />
                    </div>
                    <div className='flex flex-col gap-1 px-4 pb-8'>
                        <h3 className='text-xl font-semibold'>{data.title}</h3>
                        <p className={`text-[#d3d8e8] w-full text-[15px]`}>{truncateText(data.description)}</p>
                    </div>
                </div></Link>
                ))}
            </div>
        </div>
    )
}

export default MyProjects

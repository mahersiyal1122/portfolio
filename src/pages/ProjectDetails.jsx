import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { myProjectData } from '../assets/images/assets'
import Line from '../components/Line'

const ProjectDetails = () => {

    const all_projects = myProjectData
    const { projectName } = useParams()
    const project = all_projects.find((e) => e.title === projectName)

    return (
        <>
            <div className='flex flex-col mb-32 max-[530px]:px-4 max-[700px]:mb-20 max-[530px]:mb-16'>
                <h2 className='text-center w-[80%] mx-auto text-[max(3vw,25px)] font-semibold my-8 max-[600px]:w-[90%] max-[500px]:w-[97%]'>{project.title}</h2>
                <div className='projectDetail_images pl-5 flex gap-20 h-[70vh] overflow-x-auto mb-20 max-[700px]:h-[55vh] max-[700px]:gap-10 max-[650px]:mb-12 max-[530px]:h-[40vh] max-[530px]:gap-7 max-[530px]:mb-8 max-[400px]:h-[35vh]'>
                    <img src={project.i1} alt="" />
                    <img src={project.i2} alt="" />
                    <img src={project.i3} alt="" />
                    <img src={project.i4} alt="" />
                    <img src={project.i5} alt="" />
                </div>
                <h3 className='text-[max(2.5vw,18px)] font-semibold mb-5 max-[700px]:mb-3'>Details</h3>
                <p className='text-[max(1.2vw,11px)]'>{project.description}</p>
                <div className='my-5'>
                    <h4 className='text-[max(2.2vw,18px)] font-semibold mb-4 max-[700px]:mb-1'>Github Link</h4>
                    <Link target='_blank' className='hover:text-[#ec4899] transition-all text-[max(1.2vw,11px)]  break-all' to={`${project.github}`}>{project.github}</Link>
                </div>
                {project.liveDemo && <div>
                    <h4 className='text-[max(2.2vw,18px)] font-semibold mb-4 max-[700px]:mb-1'>Live Demo</h4>
                    <Link target='_blank' className='hover:text-[#ec4899] transition-all text-[max(1.2vw,11px)]  break-all' to={`${project.liveDemo}`}>{project.liveDemo}</Link>
                </div>
                }
            </div>
            <Line />
        </>
    )
}

export default ProjectDetails

import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroCodeBar = () => {
    gsap.registerPlugin(useGSAP);
    const timeline4 = gsap.timeline({})
    useGSAP(() => {
        timeline4.fromTo(".heroCodeGsap1", { opacity: 0, x: 1000 }, { delay: 2.4, opacity: 1, x: 0, duration: 0.2, stagger: 0.15, ease: "power1.inOut" })
    }, [])
    return (
        <div className='font-["Consolas"] p-8 pt-7 text-base border-[#312e81]  border-t-2 max-[1200px]:text-sm max-[530px]:p-4  max-[530px]:w-full max-[530px]:'>
            <div className='heroCodeGsap1'>
                <span className='pink'>import </span><span className='mid-green'>React </span>,<span className='pink'>{" { "}</span><span className='mid-green'>useRef</span><span className='pink'>{" }"}</span><span className='pink'> from </span><span className='light-brown'>'react'</span><span>;</span>
            </div>
            <div className='heroCodeGsap1'>
                <span className='pink'>import</span><span className='pink'>{" { "}</span><span className='mid-green'>useGSAP</span><span className='pink'>{" }"}</span><span className='pink'> from </span><span className='light-brown'>"@gsap/react"</span><span>;</span>
            </div>
            <div className='heroCodeGsap1'>
                <span className='pink'>import</span><span className='mid-green'> gsap </span><span className='pink'> from </span><span className='light-brown'>"gsap"</span><span>;</span>
            </div>
            <div className='heroCodeGsap1'>
                <span className='text-[#00ccff]'>const </span><span className='vibrant-yellow'>HeroCodeBar </span>=<span className='vib-dark-yellow'>{" () "}</span><span className='dark-blue'>{"=> "}</span><span className='vib-dark-yellow'>{"{"}</span>
            </div>
            <div className='ml-6 heroCodeGsap1'>
                <span className='mid-green'>gsap</span>.<span className='vibrant-yellow'>registerPlugin</span><span className='pink'>{"("}</span><span className='mid-green'>useGSAP</span><span className='pink'>{")"}</span><span>;</span>
            </div>
            <div className='ml-6 heroCodeGsap1'>
                <span className='text-[#00ccff]'>const</span><span className='text-[#52b9e8]'> container</span><span> =</span><span className='vibrant-yellow'> useRef</span><span className='pink'>{"()"}</span><span>;</span>
            </div>
            <div className='text-[#049e0f] ml-6 heroCodeGsap1'>// gsap code here...</div>
            <div className='ml-6 heroCodeGsap1'>
                <span className='vibrant-yellow'>useGSAP</span><span className='pink'>{"("}</span><span className='dark-blue'>{"() => {"}</span>
            </div>
            <div className='ml-12 heroCodeGsap1'>
                <span className='mid-green'>gsap</span>.<span className='vibrant-yellow'>to</span><span className='vib-dark-yellow'>{"("}</span><span className='light-brown'>"#codebar"</span>,<span className='pink'>{" { "}</span>
            </div>
            <div className='ml-[72px] heroCodeGsap1'>
                <span className='mid-green'>x:</span><span> -210</span>,
            </div>
            <div className='ml-[72px] heroCodeGsap1'>
                <span className='mid-green'>opacity:</span><span> 1</span>,
            </div>
            <div className='ml-12 heroCodeGsap1'>
                <span className='pink'>{"}"}</span><span className='vib-dark-yellow'>{")"}</span><span>;</span>
            </div>
            <div className='ml-6 heroCodeGsap1'>
                <span className='dark-blue'>{"}"}</span>,<span className='dark-blue'>{" { "}</span><span className='mid-green'>scope:</span><span className='text-[#52b9e8]'> container</span><span className='dark-blue'>{" }"}</span><span className='pink'>{")"}</span><span>;</span>
            </div>
            <div className='pink ml-6 heroCodeGsap1'>return {"("} <span className='dark-blue'>{"<div></div>"}</span></div>
            <div className='ml-6 heroCodeGsap1'>
                <span className='pink'>{")"}</span>
            </div>
            <div className='heroCodeGsap1'>
                <span className='vib-dark-yellow'>{"}"}</span>;
            </div>
            <div className='heroCodeGsap1'>
                <span className='pink'>export default</span>
                <span className='vibrant-yellow'> HeroCoderBar</span>;
            </div>
        </div>
    )
}

export default HeroCodeBar

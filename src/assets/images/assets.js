import profilePic from "./myprofile.jpg"
import htmlLogo from "./html_logo.svg"
import cssLogo from "./css_logo.svg"
import jsLogo from "./javascript_logo.svg"
import reactLogo from "./react.svg"
import tailwindLogo from "./tailwindcss_logo.svg"
import mognodbLogo from "./mongodb_logo.svg"
import expressjsLogo from "./expressjs_logo.svg"
import nodejsLogo from "./nodejs_logo.svg"
import nextjsLogo from "./nextjs_logo.svg"
import gsapLogo from "./gsap_logo.svg"

import aboutPic1 from "./pic1.jpg"
import aboutPic2 from "./pic2.jpg"
import navPic from "./nav_pic.jpg"

import homeIcon from "../gifs/home_icon.json"
import aboutIcon from "../gifs/about_icon.json"
import projectIcon from "../gifs/project_icon.json"
import phoneIcon from "../gifs/phone_icon.json"

import p1_i1 from "../images/projectPics/p1_i1.png"
import p1_i2 from "../images/projectPics/p1_i2.png"
import p1_i3 from "../images/projectPics/p1_i3.png"
import p1_i4 from "../images/projectPics/p1_i4.png"
import p1_i5 from "../images/projectPics/p1_i5.png"
import p2_i1 from "../images/projectPics/p2_i1.png"
import p2_i2 from "../images/projectPics/p2_i2.png"
import p2_i3 from "../images/projectPics/p2_i3.png"
import p2_i4 from "../images/projectPics/p2_i4.png"
import p2_i5 from "../images/projectPics/p2_i5.png"
import p3_i1 from "../images/projectPics/p3_i1.png"
import p3_i2 from "../images/projectPics/p3_i2.png"
import p3_i3 from "../images/projectPics/p3_i3.png"
import p3_i4 from "../images/projectPics/p3_i4.png"
import p3_i5 from "../images/projectPics/p3_i5.png"
import p4_i1 from "../images/projectPics/p4_i1.png"
import p4_i2 from "../images/projectPics/p4_i2.png"
import p4_i3 from "../images/projectPics/p4_i3.png"
import p4_i4 from "../images/projectPics/p4_i4.png"
import p4_i5 from "../images/projectPics/p4_i5.png"
import p5_i1 from "../images/projectPics/p5_i1.png"
import p5_i2 from "../images/projectPics/p5_i2.png"
import p5_i3 from "../images/projectPics/p5_i3.png"
import p5_i4 from "../images/projectPics/p5_i4.png"
import p5_i5 from "../images/projectPics/p5_i5.png"
import p6_i1 from "../images/projectPics/p6_i1.png"
import p6_i2 from "../images/projectPics/p6_i2.png"
import p6_i3 from "../images/projectPics/p6_i3.png"
import p6_i4 from "../images/projectPics/p6_i4.png"
import p6_i5 from "../images/projectPics/p6_i5.png"
import p7_i1 from "../images/projectPics/p7_i1.png"
import p7_i2 from "../images/projectPics/p7_i2.png"
import p7_i3 from "../images/projectPics/p7_i3.png"
import p7_i4 from "../images/projectPics/p7_i4.png"
import p7_i5 from "../images/projectPics/p7_i5.png"
import p8_i1 from "../images/projectPics/p8_i1.png"
import p8_i2 from "../images/projectPics/p8_i2.png"
import p8_i3 from "../images/projectPics/p8_i3.png"
import p8_i4 from "../images/projectPics/p8_i4.png"
import p8_i5 from "../images/projectPics/p8_i5.png"

const assets = {
    profile_pic: profilePic,
    about_pic1: aboutPic1,
    about_pic2: aboutPic2,
    nav_pic: navPic,
    home_icon: homeIcon,
    about_icon: aboutIcon,
    project_icon: projectIcon,
    phone_icon: phoneIcon
}

const skillsLogo = [
    {
        lang: "HTML",
        img: htmlLogo
    },
    {
        lang: "CSS",
        img: cssLogo
    },
    {
        lang: "Javascript",
        img: jsLogo
    },
    {
        lang: "React",
        img: reactLogo
    },
    {
        lang: "MongoDB",
        img: mognodbLogo
    },
    {
        lang: "Expressjs",
        img: expressjsLogo
    },
    {
        lang: "Nodejs",
        img: nodejsLogo
    },
    {
        lang: "Tailwindcss",
        img: tailwindLogo
    },
    {
        lang: "Nextjs",
        img: nextjsLogo
    },
    {
        lang: "GSAP",
        img: gsapLogo
    }
]


const educationData = [
    {
        id: 1,
        startYear: "2018",
        endYear: "2020",
        degree: "Secondary School Certificate",
        institute: "Sardar Kaurey K.P.H.S. School, Muzaffargarh"
    },
    {
        id: 2,
        startYear: "2020",
        endYear: "2022",
        degree: "Higher Secondary Certificate",
        institute: "Govt. Post Graduate College, Muzaffargarh"
    },
    {
        id: 3,
        startYear: "2022",
        endYear: "on going",
        degree: "Undergraduate Certificate",
        institute: "Islamia University of Bahawalpur"
    },
]
const myProjectData = [
    {
        id: 1,
        title: "Youtube Clone",
        description: `I'm thrilled to share my YouTube Clone project, crafted with React.js, Tailwind CSS, JavaScript, React Router DOM, Axios API, and more. Leveraging the YouTube Data API v3 from Google Cloud, it fetches comprehensive video data including likes, comments, views, thumbnails, and channel details such as profile, name, and subscribers.This website is fully responsive, ensuring a seamless experience across all devices.`,
        img: p8_i1,
        i1: p8_i1,
        i2: p8_i2,
        i3: p8_i3,
        i4: p8_i4,
        i5: p8_i5,
        github: `https://github.com/mahersiyal1122/Youtube-Clone`,
        liveDemo: `https://youtube-mrzee.vercel.app/`
    },
    {
        id: 2,
        title: "Gemini Clone",
        description: `This project showcases my frontend skills with a Gemini clone. Using React.js, Tailwind CSS, HTML5, CSS3, JavaScript, and Axios API, I've built a website that integrates Google Gemini API for smooth data handling. It offers both dark and light themes that users can switch between using a button in the navbar. The site is designed to work perfectly on any device, ensuring a seamless experience. Explore this project to see how I combine technical know-how with user-friendly design for a polished result.`,
        img: p7_i1,
        i1: p7_i1,
        i2: p7_i2,
        i3: p7_i3,
        i4: p7_i4,
        i5: p7_i5,
        github: `https://github.com/mahersiyal1122/Gemini-Clone`,
        liveDemo: `https://gemini-mrzee.vercel.app/`
    },
    {
        id: 3,
        title: "My Portfolio",
        description: `My portfolio showcases my expertise in frontend development, leveraging React.js, Tailwind CSS, HTML5, CSS3, JavaScript, and GSAP. It features 4 main pages: Home, About, Projects, and Contact Me. The About page introduces me briefly along with my skills and educational background. In the Projects section, I highlight projects I've developed, providing GitHub links for code access and website links where applicable. The entire site is designed to be fully responsive, ensuring optimal viewing on all devices.`,
        img: p6_i1,
        i1: p6_i1,
        i2: p6_i2,
        i3: p6_i3,
        i4: p6_i4,
        i5: p6_i5,
        github: `https://github.com/mahersiyal1122/portfolio`,
        liveDemo: `https://portfolio-mrzee.vercel.app/`
    },
    {
        id: 4,
        title: "Food Delivery App E-commerce Website",
        description: "Introducing my innovative food delivery application, built on the robust Full MERN (Mongoose, Expressjs, Reactjs, Nodejs) Stack and featuring the secure and convenient Stripe payment method made on Vite frameworkIntroducing my innovative food delivery application, built on the robust Full MERN (Mongoose, Expressjs, Reactjs, Nodejs) Stack and featuring the secure and convenient Stripe payment method made on Vite framework. This app is designed to offer a seamless experience across various devices, ensuring full responsiveness across different screen sizes.",
        img: p2_i1,
        i1: p2_i1,
        i2: p2_i2,
        i3: p2_i3,
        i4: p2_i4,
        i5: p2_i5,
        github: `https://github.com/mahersiyal1122/Food-Delivery-app-Using-full-MERN-stack-with-stripe-payment-method`,
        liveDemo: `https://food-del-app-mrzee.vercel.app/`
    },
    {
        id: 5,
        title: "E-commerce Shopping Website",
        description: " Introducing my ecommerce shopping website, meticulously crafted on the Full MERN StackIntroducing my ecommerce shopping website, meticulously crafted on the Full MERN Stack. Boasting full responsiveness across various screen sizes, our platform offers users the convenience of ordering food from home. Central to our platform is the intuitive admin panel, allowing administrators to seamlessly add new products and remove existing ones. Our system automatically updates new collections whenever fresh products/outfits are added, ensuring a dynamic and engaging shopping experience.",
        img: p1_i1,
        i1: p1_i1,
        i2: p1_i2,
        i3: p1_i3,
        i4: p1_i4,
        i5: p1_i5,
        github: `https://github.com/mahersiyal1122/E-commerce-full-MERN-stack-project`,
    },
    {
        id: 6,
        title: "Netflix Landing Page UI Design",
        description: `This project is based solely on HTML and CSS. It serves as a landing page for Netflix.
        This project demonstrates my skills in using HTML and CSS to create attractive UI web designs and web pages. I've focused on emulating the design of a popular platform like Netflix, showing my ability to recreate complex layouts and styles effectively.`,
        img: p3_i1,
        i1: p3_i1,
        i2: p3_i2,
        i3: p3_i3,
        i4: p3_i4,
        i5: p3_i5,
        github: `https://github.com/mahersiyal1122/Netflix-UI-Clone-Using-Html-CSS`,
        liveDemo: `https://netflix-mrzee.vercel.app/`
    },
    {
        id: 7,
        title: "X.com Twitter UI Design",
        description: `This project shows my early progress in web development using HTML and Tailwind CSS. It highlights my skill in organizing web content with HTML and creating clean styles with Tailwind CSS.
        The focus of the project is on simplicity and user-friendly design, demonstrating my ability to make attractive and functional web interfaces. It reflects my commitment to delivering top-notch work in web development.`,
        img: p4_i1,
        i1: p4_i1,
        i2: p4_i2,
        i3: p4_i3,
        i4: p4_i4,
        i5: p4_i5,
        github: `https://github.com/mahersiyal1122/X.com-Twitter-UI-tailwindCSS`,
        liveDemo: `https://x-twitter-mrzee.vercel.app/`
    },
    {
        id: 8,
        title: "Spotify Player",
        description: `This project is based on HTML, CSS, and JavaScript. It allows users to play songs from different albums. New song albums can be added by creating a new folder inside the "songs" directory. Within this new album's song folder, a JSON file is used to provide the album's name and description.
        The website is responsive, ensuring usability across various screen sizes. The minimum responsive width is set to 415px.`,
        img: p5_i1,
        i1: p5_i1,
        i2: p5_i2,
        i3: p5_i3,
        i4: p5_i4,
        i5: p5_i5,
        github: `https://github.com/mahersiyal1122/Spotify-Clone-Using-HTML-CSS-JS`,
    },
]

export const { profile_pic, about_pic1, about_pic2, nav_pic, home_icon, about_icon, project_icon, phone_icon } = assets
export { skillsLogo, educationData, myProjectData }
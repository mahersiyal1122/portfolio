import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDetails from './pages/ProjectDetails'
import About from './pages/About'


const App = () => {
  return (
    <>
      <div className="relative h-full min-h-screen w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <main className='relative z-30 w-[85vw] mx-auto max-[900px]:w-[90vw] max-[530px]:w-screen max-[530px]:mx-0'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/myprojects" element={<Projects />} />
            <Route path='myprojects/:projectName' element={<ProjectDetails/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App

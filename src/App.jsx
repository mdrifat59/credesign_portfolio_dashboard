import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Banner from './components/Banner'

function App() {
const [activeMenu, setActiveMenu]=useState('Navbar')
  const handleActive =(data)=>{
    setActiveMenu(data)  
  } 
  
  return (
    <>
      <div className='flex'>
        <div className='w-[20%] h-screen bg-gray-300 px-5 '>
          <h2 className='font-Jost-Medium text-3xl py-5 text-center uppercase'>Dash Board <hr className='border-black mt-1' /> </h2>
          <ul>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Navbar")}>Navbar</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive('About')}>About</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Services")}>Services</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Resume")}>Resume</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Portfolio")}>Portfolio</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Testimonial")}>Testimonial</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Blog")}>Blog</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={()=>handleActive("Footer")}>Footer</li>
          </ul>
        </div>
        <div className='w-[80%] h-screen'>
          {activeMenu == "Navbar" &&  <Navbar/> }
          {activeMenu == "About" &&  <Banner/> }
          {activeMenu == "Services" && <h1>Services</h1> }
          {activeMenu == "Resume" && <h1>Resume</h1> }
          {activeMenu == "Portfolio" && <h1>Portfolio</h1> }
          {activeMenu == "Testimonial" && <h1>Testimonial</h1> }
          {activeMenu == "Blog" && <h1>Blog</h1> }
          {activeMenu == "Footer" && <h1>Footer</h1> } 
        </div>
      </div>
    </>
  )
}

export default App

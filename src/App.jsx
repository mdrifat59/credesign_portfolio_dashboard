import React from 'react'
import './App.css'

function App() {

  const handleActive = () => {

  }
  return (
    <>
      <div className='flex'>
        <div className='w-[20%] h-screen bg-gray-300 px-5 '>
          <h2 className='font-Jost-Medium text-3xl py-5 text-center uppercase'>Dash Board <hr className='border-black mt-1' /> </h2>
          <ul>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Navbar</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>About</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Services</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Resume</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Portfolio</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Testimonial</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Blog</li>
            <li className='font-Jost-Regular text-xl p-2 border-b border-black hover:text-white hover:bg-gray-500' onClick={handleActive()}>Footer</li>
          </ul>
        </div>
        <div className='w-[80%] h-screen bg-red-500'></div>
      </div>
    </>
  )
}

export default App

import React from 'react'

const Navbar = () => {
   return (
      <div>
         <h2 className='font-Jost-Regular text-3xl text-center py-5'>Navbar</h2>
         <div className='grid grid-cols-2 gap-4 px-4 items-center'>
            <div className='w-full py-2 border-2 border-black text-center'>
               <h3 className='font-Jost-Regular text-2xl text-center border-black border-2 py-2'>Image Upload</h3>
               <input type="file" className='my-7' name="" id="" /> <br />
            </div>
            <div className='w-full py-2 border-2 border-black text-center'>
               <h3 className='font-Jost-Regular text-2xl text-center border-black border-2 py-2'>Menu Item</h3>
               <input type="text" className='w-3/4 border border-black outline-none px-4 py-2 my-5 rounded-xl' placeholder='Home, About, Contact' name="" id="" />
            </div>
            <div className='w-full py-2 border-2 border-black text-center'>
               <h3 className='font-Jost-Regular text-2xl text-center border-black border-2 py-2'>Button Text</h3>
               <input type="text" className='w-3/4 border border-black outline-none px-4 py-2 my-5 rounded-xl' placeholder='Button Text Change' name="" id="" />
            </div>
            <div className='w-full py-2 border-2 text-center  border-black '>
               <h3 className='font-Jost-Regular text-2xl text-center border-black border-2 py-2'>Button Use Or Not</h3>
               <input type="checkbox" className='w-5 h-5 my-8 mr-3' name="check" id="" /><label htmlFor='check' className='font-Jost-Regular text-xl ' >Button show</label>
            </div>
         </div>
      </div>
   )
}

export default Navbar
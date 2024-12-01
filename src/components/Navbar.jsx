import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
   const [menuItem, setMenuitem] = useState('');
   const [buttonText, setButtonText] = useState('');
   const [buttonShow, setButtonShow] = useState(false);
   const [id, setId] = useState('');

   const handleSubmit = () => {
      if (id) {
         axios
            .put('http://localhost:8000/navbar/' + id, {
               menuItem: menuItem,
               buttonText: buttonText,
               buttonShow: buttonShow,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
      } else {
         axios
            .post('http://localhost:8000/navbar', {
               menuItem: menuItem,
               buttonText: buttonText,
               buttonShow: buttonShow,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
      }
   };

   const handleMenuChange = (e) => {
      setMenuitem(e.target.value);
   };

   const handleButtonText = (e) => {
      setButtonText(e.target.value);
   };

   const handleButtonShow = (e) => {
      setButtonShow(e.target.checked);
   };

   useEffect(() => {
      async function getData() {
         const { data } = await axios.get('http://localhost:8000/navbaritem');
         setMenuitem(data.menuItem);
         setButtonText(data.buttonText);
         setButtonShow(data.buttonShow);
         setId(data._id);
      }
      getData();
   }, []);

   return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
         <h2 className="text-4xl font-bold text-gray-800 mb-8">Navbar Settings</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Image Upload */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Image Upload</h3>
               <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
               />
            </div>

            {/* Menu Item */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu Item</h3>
               <input
                  value={menuItem}
                  onChange={handleMenuChange}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Home, About, Contact"
               />
            </div>

            {/* Button Text */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Text</h3>
               <input
                  value={buttonText}
                  onChange={handleButtonText}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Button Text Change"
               />
            </div>

            {/* Button Visibility */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Visibility</h3>
               <div className="flex items-center space-x-4">
                  <input
                     checked={buttonShow}
                     onChange={handleButtonShow}
                     type="checkbox"
                     className="w-6 h-6 text-blue-600 focus:ring focus:ring-blue-200 rounded"
                     id="button-show"
                  />
                  <label htmlFor="button-show" className="text-gray-800 text-lg">
                     Show Button
                  </label>
               </div>
            </div>
         </div>

         <button
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
            onClick={handleSubmit}
         >
            Submit
         </button>
      </div>
   );
};

export default Navbar;


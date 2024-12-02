import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Banner = () => {
   const [subHeading, setSubHeading] = useState('');
   const [heading, setHeading] = useState('');
   const [buttonText, setButtonText] = useState('');
   const [paragraph, setParagraph] = useState('');
   const [buttonShow, setButtonShow] = useState(false);
   const [circuleShow, setCirculeShow] = useState(false);
   const [id, setId] = useState("")

   const handleSubmit = () => {
      if (id) {
         axios
            .put('http://localhost:8000/banner/' + id, {
               subHeading: subHeading,
               heading: heading,
               buttonText: buttonText,
               buttonShow: buttonShow,
               circuleShow: circuleShow,
               paragraph: paragraph,
            }).then((res) => console.log(res))
            .catch((err) => console.log(err))
      } else {
         axios.post("http://localhost:8000/banner/", {
            subHeading: subHeading,
            heading: heading,
            buttonText: buttonText,
            buttonShow: buttonShow,
            circuleShow: circuleShow,
            paragraph: paragraph,
         }).then((res) => console.log(res))
            .catch((err) => console.log(err))
      }
   };

   useEffect(() => {
      async function fatchData() {
         const data = await axios.get('http://localhost:8000/banneritem')
         setSubHeading(data.data.subHeading)
         setHeading(data.data.heading)
         setParagraph(data.data.paragraph)
         setButtonText(data.data.buttonText)
         setButtonShow(data.data.buttonShow)
         setCirculeShow(data.data.circuleShow)
         setId(data.data._id)
      }
      fatchData()
   }, [])

   return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
         <h2 className="text-4xl font-bold text-gray-800 mb-8">Banner Section</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Subheading Input */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Subheading</h3>
               <input
                  value={subHeading}
                  onChange={(e) => setSubHeading(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter subheading"
               />
            </div>

            {/* Heading Input */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Heading</h3>
               <input
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 outline-none rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter heading"
               />
            </div>
            {/* paragraph Input */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Paragraph</h3>
               <textarea
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none resize-none focus:ring focus:ring-blue-200"
                  placeholder="Enter Paragraph"
               />
            </div>

            {/* Button Text Input */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Text</h3>
               <input
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 outline-none rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter button text"
               />
            </div>

            {/* Button Show Checkbox */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Show Button</h3>
               <div className="flex items-center space-x-4">
                  <input
                     type="checkbox"
                     checked={buttonShow}
                     onChange={(e) => setButtonShow(e.target.checked)}
                     className="w-6 h-6 text-blue-600 focus:ring focus:ring-blue-200 rounded"
                     id="button-show"
                  />
                  <label htmlFor="button-show" className="text-gray-800 text-lg">
                     Enable Button
                  </label>
               </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload Banner Image</h3>
               <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
               />
            </div>

            {/* Circular Checkbox */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Circular Feature</h3>
               <div className="flex items-center space-x-4">
                  <input
                     type="checkbox"
                     checked={circuleShow}
                     onChange={(e) => setCirculeShow(e.target.checked)}
                     className="w-6 h-6 rounded-full text-green-600 focus:ring focus:ring-green-200"
                     id="circular-checkbox"
                  />
                  <label htmlFor="circular-checkbox" className="text-gray-800 text-lg">
                     Enable Circular Feature
                  </label>
               </div>
            </div>
         </div>

         <button
            onClick={handleSubmit}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
         >
            Submit
         </button>
      </div>
   );
}

export default Banner
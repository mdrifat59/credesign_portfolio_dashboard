import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Testimonial = () => {
    const [heading, setHeading] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [showImage, setShowImage] = useState(false)
    const [testimonial, setTestimonial] = useState([])
    const handleAddTestimonial = () => {
        const data = new FormData()
        data.append("heading", heading)
        data.append("title", title)
        data.append("description", description)
        data.append("image", image)
        data.append("showImage", showImage)
        axios.post('http://localhost:8000/testimonial', data).then((res) => {
            console.log(res);

        })
    }
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/testimonialitem')
            setTestimonial(data)
        }
        fatchData()
    }, [])
    return (
        <>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-4 capitalize text-center">Add Testimonial</h2>
                <form className="space-y-4">
                    {/* Heading Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 ">Heading</label>
                        <input
                            type="text"
                            name="title"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            placeholder="Enter service title"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 ">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter service title"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Description Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="subtitle"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            placeholder="Enter service subtitle"
                            className="mt-1 block w-full rounded-md border-gray-300 outline-none resize-none py-2 px-4  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>

                    {/* Show Image Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={showImage}
                            onChange={(e) => setShowImage(e.target.checked)}
                            id="showImage"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="showImage" className="ml-2 block text-sm text-gray-700">
                            Show Image
                        </label>
                    </div>

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={handleAddTestimonial}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Testimonial
                    </button>
                </form>
            </div>
            {/* show data */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Testimonial Table</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">SR</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Heading</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Showing</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonial.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    {/* Image Column */}
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.showImage && item.image ? (
                                            <img
                                                src={`http://localhost:8000/${item.image}`}
                                                alt={item.title}
                                                className="h-16 w-16 object-cover rounded"
                                            />
                                        ) : (
                                            <span className="text-gray-500">Image not shown</span>
                                        )}
                                    </td>

                                    {/* Title Column */}
                                    <td className="border border-gray-300 px-4 py-2">{item.heading}</td>

                                    {/* Subtitle Column */}
                                    <td className="border border-gray-300 px-4 py-2">{item.title}</td>

                                    {/* Showing Button Column */}
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.showImage ? (
                                            <button
                                                className="px-4 py-1 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700"
                                            >
                                                Yes
                                            </button>
                                        ) : (
                                            <button
                                                className="px-4 py-1 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700"
                                            >
                                                No
                                            </button>
                                        )}
                                    </td>

                                    {/* Actions Column */}
                                    <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                                        <button
                                            // onClick={() => openModal(service)}
                                            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700"
                                        >
                                            Update
                                        </button>
                                        <button
                                            // onClick={() => handleDelete(service)}
                                            className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Testimonial
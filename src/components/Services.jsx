import React, { useState } from 'react'
import Serviceshow from './Serviceshow';
import axios from 'axios';
import Toast from './Toast';

const Services = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [image, setImage] = useState('')
    const [showImage, setShowImage] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("")

    const handleAddService = () => {
        const data = new FormData()
        data.append("title", title)
        data.append("subTitle", subTitle)
        data.append("showImage", showImage)
        data.append("image", image)
        axios.post('http://localhost:8000/service', data).then((res) => {
            setTitle("")
            setSubTitle("")
            setShowImage(false)
            setImage("")
            setShowToast(true)
            setMessage(res.data)
        }).catch((err) => {
            console.log(err);
        });

    }
    const handleChange = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <>
            <Toast
                message={message}
                visible={showToast}
                onClose={() => setShowToast(false)}
            />
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-4 capitalize text-center">Add Service</h2>
                <form className="space-y-4">
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

                    {/* Subtitle Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                        <textarea
                            name="subtitle"
                            value={subTitle}
                            onChange={(e) => setSubTitle(e.target.value)}
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
                            // onChange={(e) => setImage(e.target.value)}
                            onChange={handleChange}
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
                        onClick={handleAddService}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Service
                    </button>
                </form>
            </div>
            <Serviceshow />
        </>

    );
}

export default Services
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ResumeEducation = ({ setEducation }) => {
    const [eduHeading, setEduHeading] = useState('')
    const [eduTitle, setEduTitle] = useState('')
    const [eduDes, setEduDes] = useState('')

    const handleEducationSubmit = () => {
        axios.post('http://localhost:8000/resumeeducation', {
            eduHeading: eduHeading,
            eduTitle: eduTitle,
            eduDes: eduDes,
        }).then((res) => {
            setEduHeading('')
            setEduDes('')
            setEduTitle('')
            async function fatchEduData() {
                const { data } = await axios.get('http://localhost:8000/resumeeducationitem')
                setEducation(data)
            }
            fatchEduData()
        })
            .catch((err) => console.log(err));
    }


    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-4 capitalize text-center">Education</h2>
            <div className="space-y-4">
                {/* Title Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 ">Heading</label>
                    <input
                        type="text"
                        name="title"
                        value={eduHeading}
                        onChange={(e) => setEduHeading(e.target.value)}
                        placeholder="Enter education heading"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Subtitle Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 ">Title</label>
                    <input
                        type="text"
                        name="heading"
                        value={eduTitle}
                        onChange={(e) => setEduTitle(e.target.value)}
                        placeholder="Enter education title"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {/* Description textarea */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="subtitle"
                        value={eduDes}
                        onChange={(e) => setEduDes(e.target.value)}
                        rows={3}
                        placeholder="Enter education description"
                        className="mt-1 block w-full rounded-md border-gray-300 outline-none resize-none py-2 px-4  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    ></textarea>
                </div>

                {/* Add Button */}
                <button
                    type="button"
                    onClick={handleEducationSubmit}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ResumeEducation
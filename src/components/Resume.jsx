import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Resume = () => {
    const [title, setTitle] = useState('')
    const [heading, setHeading] = useState('')
    const [showCircule, setShowCircule] = useState('')
    const [id, setId] = useState("")
    const handleHeadingSubmit = () => {
        if (id) {
            axios.put('http://localhost:8000/resume/' + id, {
                title: title,
                heading: heading,
                showCircule: showCircule,
            }).then((res) => console.log(res))
                .catch((err) => console.log(err));
        } else {
            axios.post('http://localhost:8000/resume', {
                title: title,
                heading: heading,
                showCircule: showCircule,
            }).then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    }
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/resumeitem')
            setTitle(data.title)
            setHeading(data.heading)
            setShowCircule(data.showCircule)
            setId(data._id)
        }
        fatchData()
    }, [])
    return (
        <div className='py-5'>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-4 capitalize text-center">Resume Heading</h2>
                <div className="space-y-4">
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
                        <label className="block text-sm font-medium text-gray-700 ">Heading</label>
                        <input
                            type="text"
                            name="heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            placeholder="Enter service Heading"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    {/* Show circule Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={showCircule}
                            onChange={(e) => setShowCircule(e.target.checked)}
                            id="showCircule"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="showCircule" className="ml-2 block text-sm text-gray-700">
                            Show Circel
                        </label>
                    </div>

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={handleHeadingSubmit}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resume
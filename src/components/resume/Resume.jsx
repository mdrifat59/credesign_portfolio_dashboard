import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResumeEducation from './ResumeEducation'
import ResumeSoftSkil from './ResumeSoftSkil'
import ResumeExperiance from './ResumeExperiance'

const Resume = () => {
    const [title, setTitle] = useState('')
    const [heading, setHeading] = useState('')
    const [showCircule, setShowCircule] = useState('')
    const [education, setEducation] = useState([])
    const [softSkill, setSoftSkill] = useState([])
    const [eduHeading, setEduHeading] = useState('')
    const [eduTitle, setEduTitle] = useState('')
    const [eduDes, setEduDes] = useState('')
    const [eduId, setEduId] = useState("")
    const [sofHeading, setSofHeading] = useState('')
    const [sofTitle, setSofTitle] = useState('')
    const [sofDes, setSofDes] = useState('')
    const [sofId, setSofId] = useState("")
    const [id, setId] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const closeModal2 = () => setIsModalOpen2(false);

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
        async function fatchEduData() {
            const { data } = await axios.get('http://localhost:8000/resumeeducationitem')
            setEducation(data)
        }
        async function fatchsoftData() {
            const { data } = await axios.get('http://localhost:8000/resumesoftitem')
            setSoftSkill(data)
        }
        fatchsoftData()
        fatchEduData()
        fatchData()
    }, [])
    const handleEducationDelete = (item) => {
        axios.delete(`http://localhost:8000/reusmeeducation/${item._id}`).then((res) => {
            async function fatchEduData() {
                const { data } = await axios.get('http://localhost:8000/resumeeducationitem')
                setEducation(data)
            }
            fatchEduData()
        }).catch((err) => {
            console.log(err);

        })
    }
    const handleEducationUpdate = (item) => {
        setIsModalOpen(true)
        setEduDes(item.eduDes)
        setEduHeading(item.eduHeading)
        setEduTitle(item.eduTitle)
        setEduId(item._id)
    }
    const handleSoftSkillDelete = (item) => {
        axios.delete(`http://localhost:8000/reusmesoft/${item._id}`).then((res) => {
            async function fatchEduData() {
                const { data } = await axios.get('http://localhost:8000/resumesoftitem')
                setSoftSkill(data)
            }
            fatchEduData()
        }).catch((err) => {
            console.log(err);

        })
    }
    const handleSoftSkillUpdate = (item) => {
        setIsModalOpen2(true)
        setSofDes(item.sofDes)
        setSofHeading(item.sofHeading)
        setSofTitle(item.sofTitle)
        setSofId(item._id)
    }
    return (
        <>
            <div className='p-5'>
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
                {/* ============ */}
                <div className='grid grid-cols-3 mt-5 gap-5'>
                    <div className="">
                        <ResumeEducation closeModal={closeModal} eduId={eduId} eduDes={eduDes} setEduDes={setEduDes} eduHeading={eduHeading} setEduHeading={setEduHeading} eduTitle={eduTitle} setEduTitle={setEduTitle} setEducation={setEducation} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                    </div>
                    <div className="">
                        <ResumeSoftSkil closeModal2={closeModal2} isModalOpen2={isModalOpen2} setSoftSkill={setSoftSkill} sofId={sofId} sofDes={sofDes} setSofDes={setSofDes} sofHeading={sofHeading} setSofHeading={setSofHeading} sofTitle={sofTitle} setSofTitle={setSofTitle} />
                    </div>
                    <div className="">
                        <ResumeExperiance />
                    </div>
                </div>
            </div>
            {/* ========= education show ========== */}
            <div className="p-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center"> Education Table</h2>
                    <div className="overflow-x-auto h-[220px]">
                        <table className="min-w-full border-collapse border border-gray-300 bg-white">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">SR</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Heading</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Title</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Description</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>

                                        {/* Heading Column */}
                                        <td className="border border-gray-300 px-4 py-2">{item.eduHeading}</td>

                                        {/* title Column */}
                                        <td className="border border-gray-300 px-4 py-2">{item.eduTitle}</td>
                                        {/* Description Column */}
                                        <td className="border w-[420px] border-gray-300 px-4 py-2">{item.eduDes}</td>
                                        {/* Actions Column */}
                                        <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                                            <button
                                                onClick={() => handleEducationUpdate(item)}
                                                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleEducationDelete(item)}
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
            </div>
            {/* =============== soft skill show ============= */}
            <div className="p-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center"> Soft Skill Table</h2>
                    <div className="overflow-x-auto h-[220px]">
                        <table className="min-w-full border-collapse border border-gray-300 bg-white">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">SR</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Heading</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Title</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Description</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {softSkill.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>

                                        {/* Heading Column */}
                                        <td className="border border-gray-300 px-4 py-2">{item.sofHeading}</td>

                                        {/* title Column */}
                                        <td className="border border-gray-300 px-4 py-2">{item.sofTitle}</td>
                                        {/* Description Column */}
                                        <td className="border w-[420px] border-gray-300 px-4 py-2">{item.sofDes}</td>
                                        {/* Actions Column */}
                                        <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                                            <button
                                                onClick={() => handleSoftSkillUpdate(item)}
                                                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleSoftSkillDelete(item)}
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
            </div>
        </>
    )
}

export default Resume
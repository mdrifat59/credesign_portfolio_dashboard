import React from 'react'
import axios from 'axios'
import Modal from '../Modal';
const ResumeSoftSkil = ({ closeModal2, isModalOpen2, sofId, sofDes, sofHeading, sofTitle, setSofDes, setSofHeading, setSofTitle, setSoftSkill }) => {


    const handleSoftSubmit = () => {
        axios.post('http://localhost:8000/resumesoft', {
            sofHeading: sofHeading,
            sofTitle: sofTitle,
            sofDes: sofDes,
        }).then((res) => {
            setSofHeading('')
            setSofTitle('')
            setSofDes('')
            async function fatchsoftData() {
                const { data } = await axios.get('http://localhost:8000/resumesoftitem')
                setSoftSkill(data)
            }
            fatchsoftData()
            console.log(res);
        })
            .catch((err) => console.log(err));


    }
    const handleSoftSkillUpdate = () => {
        if (sofId) {
            axios.put(`http://localhost:8000/resumesoft/${sofId}`, {
                sofHeading: sofHeading,
                sofTitle: sofTitle,
                sofDes: sofDes,
            }).then((res) => {
                closeModal2()
                setSofHeading('')
                setSofTitle('')
                setSofDes('')
                async function fatchsoftData() {
                    const { data } = await axios.get('http://localhost:8000/resumesoftitem')
                    setSoftSkill(data)
                }
                fatchsoftData()
                console.log(res);
            })
                .catch((err) => console.log(err));

        }

    }
    return (
        <>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-4 capitalize text-center">Software Skills</h2>
                <div className="space-y-4">
                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 ">Heading</label>
                        <input
                            type="text"
                            name="title"
                            value={sofHeading}
                            onChange={(e) => setSofHeading(e.target.value)}
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
                            value={sofTitle}
                            onChange={(e) => setSofTitle(e.target.value)}
                            placeholder="Enter education title"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    {/* Description textarea */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="subtitle"
                            value={sofDes}
                            onChange={(e) => setSofDes(e.target.value)}
                            rows={3}
                            placeholder="Enter education description"
                            className="mt-1 block w-full rounded-md border-gray-300 outline-none resize-none py-2 px-4  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={handleSoftSubmit}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
            {/* ======= Education Modal ========= */}
            <Modal isOpen={isModalOpen2} onClose={closeModal2} title="Soft Skill">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="text-4xl font-bold mb-4 capitalize text-center">SoftSkill</h2>
                    <form className="space-y-4">
                        {/* Heading Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 ">Heading</label>
                            <input
                                type="text"
                                // name="title"
                                value={sofHeading}
                                onChange={(e) => setSofHeading(e.target.value)}
                                placeholder="Enter service title"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        {/* Title Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 ">Title</label>
                            <input
                                type="text"
                                // name="title"
                                value={sofTitle}
                                onChange={(e) => setSofTitle(e.target.value)}
                                placeholder="Enter service title"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-4 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Description Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                // name="subtitle"
                                value={sofDes}
                                onChange={(e) => setSofDes(e.target.value)}
                                rows={3}
                                placeholder="Enter service subtitle"
                                className="mt-1 block w-full rounded-md border-gray-300 outline-none resize-none py-2 px-4  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>

                        {/* Add Button */}
                        <button
                            type="button"
                            onClick={handleSoftSkillUpdate}
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ResumeSoftSkil
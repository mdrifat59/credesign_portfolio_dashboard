import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Toast from './Toast'
import ServiceModal from './ServiceModal'

const Serviceshow = () => {
    const [services, setServices] = useState([])
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const [id, setId] = useState("")
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [image, setImage] = useState('')
    const [showImage, setShowImage] = useState(false)
    const openModal = (item) => {
        setIsModalOpen(true)
        setTitle(item.title)
        setSubTitle(item.subTitle)
        setImage(item.image)
        setShowImage(item.showImage)
        setId(item._id)
    };

    useEffect(() => {
        async function fatchData() {
            const data = await
                axios.get('http://localhost:8000/serviceitem').then((res) => {
                    setServices(res.data)
                })

        }
        fatchData()
    }, [])
    const handleDelete = (item) => {
        axios.delete(`http://localhost:8000/service/${item._id}`).then((res) => {
            setShowToast(true)
            setMessage(res.data.massage)
            axios.get('http://localhost:8000/serviceitem').then((res) => {
                setServices(res.data)
            })
        })
    }
    return (
        <>
            <Toast
                message={message}
                visible={showToast}
                onClose={() => setShowToast(false)}
            />
            <ServiceModal setShowToast={setShowToast} setMessage={setMessage} setServices={setServices} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} openModal={openModal} closeModal={closeModal} id={id} title={title} subTitle={subTitle} showImage={showImage} setTitle={setTitle} setSubTitle={setSubTitle} setShowImage={setShowImage} />

            <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Services Table</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">SR</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Subtitle</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Showing</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={service.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    {/* Image Column */}
                                    <td className="border border-gray-300 px-4 py-2">
                                        {service.showImage && service.image ? (
                                            <img
                                                src={service.image || "https://via.placeholder.com/100"}
                                                alt={service.title}
                                                className="h-16 w-16 object-cover rounded"
                                            />
                                        ) : (
                                            <span className="text-gray-500">Image not shown</span>
                                        )}
                                    </td>

                                    {/* Title Column */}
                                    <td className="border border-gray-300 px-4 py-2">{service.title}</td>

                                    {/* Subtitle Column */}
                                    <td className="border border-gray-300 px-4 py-2">{service.subTitle}</td>

                                    {/* Showing Button Column */}
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {service.showImage ? (
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
                                            onClick={() => openModal(service)}
                                            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service)}
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

export default Serviceshow
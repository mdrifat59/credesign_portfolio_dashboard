import React, { useState } from 'react'

const Serviceshow = () => {
    const [servicess, setServicess] = useState([
        {
            id: 1,
            title: "Service 1",
            subtitle: "This is the first service",
            showImage: true,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            title: "Service 2",
            subtitle: "This is the second service",
            showImage: false,
            image: null,
        },
    ]);

    const handleUpdate = (id) => {
        alert(`Update service with ID: ${id}`);
    };

    const handleDelete = (id) => {
        setServicess(services.filter((service) => service.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Services Table</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Subtitle</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Showing</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicess.map((service) => (
                            <tr key={service.id} className="hover:bg-gray-100">
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
                                <td className="border border-gray-300 px-4 py-2">{service.subtitle}</td>

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
                                        onClick={() => handleUpdate(service.id)}
                                        className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
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
    )
}

export default Serviceshow
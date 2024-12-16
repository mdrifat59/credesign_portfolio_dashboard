import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
    const [image, setImage] = useState('')
    const [portfolio, setPortfolio] = useState([])

    const handleAddService = () => {
        const data = new FormData()
        data.append("image", image)
        axios.post('http://localhost:8000/portfolio', data).then((res) => {
            async function fatchData() {
                const { data } = await axios.get('http://localhost:8000/portfolioitem')
                setPortfolio(data)
                setImage('')
            }
            fatchData()
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleChange = (e) => {
        setImage(e.target.files[0])
    }
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/portfolioitem')
            setPortfolio(data)
        }
        fatchData()
    }, [])
    const handlePortfolioDelete = (item) => {
        axios.delete(`http://localhost:8000/portfolio/${item._id}`).then(() => {
            async function fatchData() {
                const { data } = await axios.get('http://localhost:8000/portfolioitem')
                setPortfolio(data)
            }
            fatchData()
        })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    }
    return (
        <>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-4 capitalize text-center">Resume Image</h2>
                <form className="space-y-4">
                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={handleChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={handleAddService}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Resume
                    </button>
                </form>
            </div>
            {/* =============== portfolio show ============= */}
            <div className="p-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center"> Portfolio Table</h2>
                    <div className="overflow-x-auto  h-[500px]">
                        <table className="min-w-full border-collapse border border-gray-300 bg-white">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">SR</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Image</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolio.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border w-5 border-gray-300 px-4 py-2">{index + 1}</td>

                                        {/* image Column */}
                                        <td className="border border-gray-300 px-4 py-2 flex justify-center">
                                            <img width={100} src={`http://localhost:8000/${item.image}`} alt="" />
                                        </td>
                                        {/* Actions Column */}
                                        <td className="border w-14 border-gray-300 px-4 py-2 text-center space-x-2">
                                            <button
                                                onClick={() => handlePortfolioDelete(item)}
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

export default Portfolio
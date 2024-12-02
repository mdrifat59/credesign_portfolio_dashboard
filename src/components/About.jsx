import React, { useState } from 'react'

const About = () => {
    const [subHeading, setSubHeading] = useState('');
    const [heading, setHeading] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [buttonShow, setButtonShow] = useState(false);
    const [circuleShow, setCirculeShow] = useState(false);
    const [title_1, setTitle_1] = useState('')
    const [title_2, setTitle_2] = useState('')
    const [bagTitle_1, setBagTitle_1] = useState('')
    const [bagTitle_2, setBagTitle_2] = useState('')
    const [bagNumber_1, setBagNumber_1] = useState('')
    const [bagNumber_2, setBagNumber_2] = useState('')
    const [id, setId] = useState("")

    const handleSubmit = () => {
        console.log(subHeading, heading, buttonText, paragraph, title_1,
            title_2, bagNumber_1, bagNumber_2, bagTitle_1, bagTitle_2, buttonShow, circuleShow
        );

    }
    return (
        <>

            {/* adfkaj;dlfkj */}

            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">About Section Editor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

                    {/* Subheading */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Subheading
                        <input
                            type="text"
                            name="subheading"
                            value={subHeading}
                            onChange={(e) => setSubHeading(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>

                    {/* Heading */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Heading
                        <input
                            type="text"
                            name="heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>

                    {/* Paragraph */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Paragraph
                        <textarea
                            name="paragraph"
                            value={paragraph}
                            onChange={(e) => setParagraph(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>

                    {/* Button Text and Checkbox */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Button Text
                        <input
                            type="text"
                            name="buttonText"
                            value={buttonText}
                            onChange={(e) => setButtonText(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    {/* Titles and Badges */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Title 1
                        <input
                            type="text"
                            name="title1"
                            value={title_1}
                            onChange={(e) => setTitle_1(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Title 2
                        <input
                            type="text"
                            name="title1"
                            value={title_2}
                            onChange={(e) => setTitle_2(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Badge 1 Number
                        <input
                            type="text"
                            name="title1"
                            value={bagNumber_1}
                            onChange={(e) => setBagNumber_1(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Badge 1 Title
                        <input
                            type="text"
                            name="badge1Title"
                            value={bagTitle_1}
                            onChange={(e) => setBagTitle_1(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Badge 2 Number
                        <input
                            type="text"
                            name="badge2Number"
                            value={bagNumber_2}
                            onChange={(e) => setBagNumber_2(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Badge 2 Title
                        <input
                            type="text"
                            name="badge2Title"
                            value={bagTitle_2}
                            onChange={(e) => setBagTitle_2(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>
                    {/* image upload */}
                    <label className="bg-white shadow-lg rounded-lg p-6">
                        Image upload
                        <input
                            type="file"
                            name="title2"
                            //   value={formData.title2}
                            //   onChange={handleChange}
                            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </label>

                    {/* Circular Checkbox */}
                    <div div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                        <label className='inline-flex items-center space-x-2 mb-4'>
                            <input
                                type="checkbox"
                                name="showCircular"
                                checked={circuleShow}
                                onChange={(e) => setCirculeShow(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span>Show Circular Element</span>
                        </label>
                        {/* Button checkbox */}
                        <label className='inline-flex items-center space-x-2 mb-4'>
                            <input
                                type="checkbox"
                                name="showButton"
                                checked={buttonShow}
                                onChange={(e) => setButtonShow(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span>Show Button</span>
                        </label>
                    </div>


                </div>
                <button
                    onClick={handleSubmit}
                    className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
                >
                    Submit
                </button>
            </div>
        </>

    );
}

export default About
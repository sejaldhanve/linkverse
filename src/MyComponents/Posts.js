import React, { useState } from 'react';

const Posts = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [stipend, setStipend] = useState('');
    const [openFor, setOpenFor] = useState('Students');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ image, description, skills, stipend, openFor });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a Post</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
                        Upload Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-gray-400">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16V8m0 0l4-4m-4 4l-4-4m13 16h-6a2 2 0 01-2-2v-5a2 2 0 012-2h6a2 2 0 012 2v5a2 2 0 01-2 2z"
                                    ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        rows="4"
                    ></textarea>
                </div>
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="skills">
                        Skills
                    </label>
                    <input
                        type="text"
                        id="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="stipend">
                        Stipend
                    </label>
                    <input
                        type="number"
                        id="stipend"
                        value={stipend}
                        onChange={(e) => setStipend(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="openFor">
                        Open For
                    </label>
                    <select
                        id="openFor"
                        value={openFor}
                        onChange={(e) => setOpenFor(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="Students">Students</option>
                        <option value="Professionals">Professionals</option>
                        <option value="All">All</option>
                    </select>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Posts;
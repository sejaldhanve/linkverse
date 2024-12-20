import React, { useState } from 'react';

const Roadmap = () => {
    const [activeTab, setActiveTab] = useState(0);

    const roadmaps = [
        {
            name: 'Roadmap 1',
            data: [
                {
                    phase: 'Phase 1',
                    tasks: [
                        { title: 'Task 1', description: 'Description for task 1', status: 'Completed' },
                        { title: 'Task 2', description: 'Description for task 2', status: 'In Progress' },
                    ],
                },
                {
                    phase: 'Phase 2',
                    tasks: [
                        { title: 'Task 3', description: 'Description for task 3', status: 'Pending' },
                        { title: 'Task 4', description: 'Description for task 4', status: 'Pending' },
                    ],
                },
            ],
        },
        {
            name: 'Roadmap 2',
            data: [
                {
                    phase: 'Phase A',
                    tasks: [
                        { title: 'Task A1', description: 'Description for task A1', status: 'Completed' },
                        { title: 'Task A2', description: 'Description for task A2', status: 'In Progress' },
                    ],
                },
                {
                    phase: 'Phase B',
                    tasks: [
                        { title: 'Task B1', description: 'Description for task B1', status: 'Pending' },
                        { title: 'Task B2', description: 'Description for task B2', status: 'Pending' },
                    ],
                },
            ],
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Roadmap</h1>
            <div className="mb-6">
                {roadmaps.map((roadmap, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mr-2 rounded ${
                            activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {roadmap.name}
                    </button>
                ))}
            </div>
            {roadmaps[activeTab].data.map((phase, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{phase.phase}</h2>
                    <div className="space-y-4">
                        {phase.tasks.map((task, taskIndex) => (
                            <div
                                key={taskIndex}
                                className={`p-4 rounded-lg shadow-md ${
                                    task.status === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : task.status === 'In Progress'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-red-100 text-red-800'
                                }`}
                            >
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                <p className="text-sm">{task.description}</p>
                                <p className="text-sm font-medium">Status: {task.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Roadmap;
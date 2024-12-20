import React from 'react';
import {
    Home,
    Calendar,
    Bell,
    Settings,
    LogOut,
    Waypoints,
    Podcast
} from 'lucide-react';


const Sidebar = ({ activeContent, setActiveContent, handleSignOut }) => {
    const menuItems = [
        { icon: Home, label: 'Profile', content: 'profile' },
        { icon: Calendar, label: 'Calendar', content: 'calendar' },
        { icon: Bell, label: 'Notifications', content: 'notifications' },
        { icon: Waypoints, label: 'RoadMap', content: 'roadmap' },
        { icon: Podcast, label: 'Post', content: 'post' },
        { icon: Settings, label: 'Settings', content: 'settings' },
    ];

  

    return (
        <div className="w-64 bg-gray-900 text-white flex flex-col p-6">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-center">Dashboard</h2>
            </div>
            <nav className="space-y-4 flex-grow">
                {menuItems.map(({ icon: Icon, label, content }) => (
                    <button
                        key={label}
                        className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${activeContent === content ? 'bg-gray-700 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                        onClick={() => setActiveContent(content)}
                        active={activeContent === content}
                    >
                        <Icon className="mr-3" size={20} />
                        <span className="text-sm font-medium">{label}</span>
                    </button>
                ))}
            </nav>
            <div className="mt-auto">
                <button
                    className="flex items-center w-full p-3 rounded-lg hover:bg-red-600 transition-colors duration-200 text-gray-300 hover:text-white"
                    onClick={handleSignOut}
                >
                    <LogOut className="mr-3" size={20} />
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
            {/* <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
          {/* <ToastContainer /> 
        </div> */}
        </div>
    );
};

export default Sidebar;
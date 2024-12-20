import React, { useState, useEffect } from 'react';
import Sidebar from '../MyComponents/Sidebar.js';
import CalendarContent from '../MyComponents/CalendarContent';
import NotificationsContent from '../MyComponents/NotificationsContent';
import ProfileContent from "../MyComponents/ProfileContent"

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import Roadmap from '../MyComponents/Roadmap';
import Posts from '../MyComponents/Posts';
import Settings from '../MyComponents/Settings';

const ProfilePage = () => {
    const [activeContent, setActiveContent] = useState('profile');
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const events = [
        {
            id: 1,
            date: '2024-12-18',
            title: 'Team Meeting',
            time: '10:00 AM',
            description: 'Quarterly planning session with the engineering team'
        },
        {
            id: 2,
            date: '2024-12-20',
            title: 'Client Presentation',
            time: '2:00 PM',
            description: 'Presenting new product features to key client'
        },
        {
            id: 3,
            date: '2024-12-25',
            title: 'Performance Review',
            time: '3:00 PM',
            description: 'Quarterly performance review meeting'
        }
    ];

    const notifications = [
        { id: 1, message: 'Team Meeting scheduled for 18th December at 10:00 AM' },
        { id: 2, message: 'Reminder: Submit Q4 reports by 24th December' },
        { id: 3, message: 'Client Presentation scheduled for 20th December at 2:00 PM' }
    ];

    const handleSignOut = () => {
        toast.info('Signing out...');
    };

    useEffect(() => {
        notifications.forEach((notification, index) => {
            setTimeout(() => {
                toast.info(notification.message, { autoClose: 5000 });
            }, index * 2000);
        });
    }, []);

    const renderContent = () => {
        switch (activeContent) {
            case 'profile': return <ProfileContent />;
            case 'calendar': return <CalendarContent events={events} />;
            case 'notifications': return <NotificationsContent notifications={notifications} />;
            case 'settings': return <Settings/>; // Placeholder for SettingsContent
            case 'roadmap': return <Roadmap />;
            case 'post': return <Posts />;
            default: return <ProfileContent />;
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar activeContent={activeContent} setActiveContent={setActiveContent} handleSignOut={handleSignOut} />
            <div className="flex-1 overflow-y-auto">
                {renderContent()}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ProfilePage;
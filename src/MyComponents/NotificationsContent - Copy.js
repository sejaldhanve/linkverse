import React from 'react';
import { Bell } from 'lucide-react';

const NotificationsContent = ({ notifications }) => (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Notifications</h1>
        <div className="space-y-4">
            {notifications.map(notification => (
                <div
                    key={notification.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center"
                >
                    <Bell className="mr-4 text-blue-600" size={24} />
                    <span className="text-gray-800 text-sm">{notification.message}</span>
                </div>
            ))}
        </div>
    </div>
);

export default NotificationsContent;
import React, { useState } from 'react';

const Settings = () => {
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false,
    });

    const [privacy, setPrivacy] = useState({
        profileVisibility: 'Public',
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications((prevNotifications) => ({ ...prevNotifications, [name]: checked }));
    };

    const handlePrivacyChange = (e) => {
        const { name, value } = e.target;
        setPrivacy((prevPrivacy) => ({ ...prevPrivacy, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ profile, notifications, privacy });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Profile Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={profile.username}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={profile.password}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Notification Settings</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="emailNotifications"
                                name="emailNotifications"
                                checked={notifications.emailNotifications}
                                onChange={handleNotificationsChange}
                                className="mr-2"
                            />
                            <label htmlFor="emailNotifications" className="text-gray-700">
                                Email Notifications
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="smsNotifications"
                                name="smsNotifications"
                                checked={notifications.smsNotifications}
                                onChange={handleNotificationsChange}
                                className="mr-2"
                            />
                            <label htmlFor="smsNotifications" className="text-gray-700">
                                SMS Notifications
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Privacy Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="profileVisibility">
                                Profile Visibility
                            </label>
                            <select
                                id="profileVisibility"
                                name="profileVisibility"
                                value={privacy.profileVisibility}
                                onChange={handlePrivacyChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                                <option value="Friends Only">Friends Only</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
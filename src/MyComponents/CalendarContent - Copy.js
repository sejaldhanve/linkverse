import React, { useMemo, useState } from 'react';

const CalendarContent = ({ events }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const [selectedDate, setSelectedDate] = useState(null);

    const generateMonthCalendar = useMemo(() => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

        const monthDays = [];
        for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
            monthDays.push(new Date(currentYear, currentMonth, day));
        }

        return monthDays;
    }, [currentMonth, currentYear]);

    const getEventsForDate = (date) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return (
                date &&
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
        });
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const closeModal = () => {
        setSelectedDate(null);
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                {monthNames[currentMonth]} {currentYear}
            </h1>
            <div className="grid grid-cols-7 gap-2 bg-white shadow-md rounded-lg p-4">
                {generateMonthCalendar.map((date, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg p-2 min-h-[120px] ${date ? 'bg-white' : 'bg-gray-50'} relative cursor-pointer`}
                        onClick={() => handleDateClick(date)}
                    >
                        <div className="text-right mb-2">
                            <span className={`text-sm font-medium ${date.getTime() === new Date().setHours(0, 0, 0, 0) ? 'bg-blue-500 text-white rounded-full px-2 py-1' : 'text-gray-600'}`}>
                                {date.getDate()}
                            </span>
                        </div>
                        <div className="space-y-1">
                            {getEventsForDate(date).map(event => (
                                <div
                                    key={event.id}
                                    className="text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5 truncate"
                                    title={`${event.title} at ${event.time}`}
                                >
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedDate && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Events for {selectedDate.toDateString()}</h2>
                        <div className="space-y-2">
                            {getEventsForDate(selectedDate).length > 0 ? (
                                getEventsForDate(selectedDate).map(event => (
                                    <div key={event.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <h3 className="text-lg font-semibold">{event.title}</h3>
                                        <p className="text-sm text-gray-600">{event.time}</p>
                                        <p className="text-sm text-gray-600">{event.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">No events for today.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarContent;
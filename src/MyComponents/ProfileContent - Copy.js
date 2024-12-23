import React from 'react';
import {MapPin,
    Briefcase,
    GraduationCap} from 'lucide-react';

    
const ProfileContent = () => (
    <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-10 bg-white shadow-md rounded-lg p-6">
            <img 
              src="/api/placeholder/200/200" 
              alt="User Avatar" 
              className="w-32 h-32 rounded-full border-4 border-gray-200 mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Jane Doe</h2>
              <p className="text-xl text-gray-600">Senior Software Engineer</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="mr-3 text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              </div>
              <div className="pl-8">
                <p className="text-gray-600">San Francisco, California</p>
                <p className="text-gray-500 text-sm">United States</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="mr-3 text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <div className="pl-8 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">Master's in Computer Science</h4>
                  <p className="text-gray-500 text-sm">Stanford University, 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Bachelor's in Software Engineering</h4>
                  <p className="text-gray-500 text-sm">MIT, 2018</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
              <div className="flex items-center mb-4">
                <Briefcase className="mr-3 text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Professional Experience</h3>
              </div>
              <div className="pl-8 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 text-lg">Senior Software Engineer</h4>
                  <p className="text-gray-500">Tech Innovations Inc. | 2020 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading a team of developers in creating scalable web applications 
                    using React, Node.js, and cloud technologies. Focused on improving 
                    system architecture and implementing best practices in software development.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 text-lg">Software Engineer</h4>
                  <p className="text-gray-500">Startup Solutions | 2018 - 2020</p>
                  <p className="text-gray-600 mt-2">
                    Developed responsive web applications and collaborated with 
                    cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
);

export default ProfileContent;
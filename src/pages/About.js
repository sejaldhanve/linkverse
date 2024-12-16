import React from 'react';
import { 
  Globe, 
  Star, 
  Target, 
  Rocket, 
  Linkedin 
} from 'lucide-react';
// import ReactImg from '../../assets/react.svg';


const AboutUs = () => {
  const companyInfo = {
    name: "LinkVerse",
    tagline: "Linking Ideas, Bridging Worlds",
    vision: "To revolutionize connectivity through innovative technological solutions",
    mission: "Empowering businesses and individuals by creating seamless digital experiences that transform how we interact, collaborate, and grow."
  };

  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation, Jane has a proven track record of transforming bold ideas into successful ventures.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      name: "John Smith",
      role: "CTO",
      bio: "A technology virtuoso with deep expertise in system architecture and emerging tech trends, driving LinkVerse's technical strategy.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      name: "Emily Chen",
      role: "Head of Design",
      bio: "Creative powerhouse who translates complex concepts into intuitive, stunning visual experiences that captivate and engage users.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      name: "Michael Johnson",
      role: "Lead Developer",
      bio: "Coding maestro dedicated to crafting elegant, efficient solutions that push the boundaries of what's possible in software development.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-indigo-100 to-indigo-200"
    },
    {
      name: "Sarah Brown",
      role: "Marketing Director",
      bio: "Strategic marketing expert who builds compelling brand narratives and drives growth through innovative digital marketing strategies.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-pink-100 to-pink-200"
    },
    {
      name: "David Lee",
      role: "Customer Success Manager",
      bio: "Customer experience champion committed to understanding and exceeding client expectations, ensuring lasting partnerships.",
      avatar: "/api/placeholder/100/100",
      background: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Company Introduction */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-16 border-2 border-blue-50">
          <div className="p-10">
            <div className="flex items-center mb-8">
              <Globe className="h-14 w-14 text-blue-600 mr-6 animate-pulse" />
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {companyInfo.name}
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-600 mb-3 flex items-center">
                    <Target className="mr-3 h-6 w-6" />
                    Tagline
                  </h2>
                  <p className="text-gray-700 text-lg pl-9">{companyInfo.tagline}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-blue-600 mb-3 flex items-center">
                    <Rocket className="mr-3 h-6 w-6" />
                    Vision
                  </h2>
                  <p className="text-gray-700 pl-9">{companyInfo.vision}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-3 flex items-center">
                  <Star className="mr-3 h-6 w-6" />
                  Mission
                </h2>
                <p className="text-gray-700">{companyInfo.mission}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-16">
            Our Exceptional Team
          </h2>
          <div className="space-y-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`
                  group relative overflow-hidden rounded-2xl shadow-xl 
                  ${member.background} 
                  transition-all duration-300 
                  transform hover:-translate-y-2 hover:shadow-2xl
                `}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin className="h-8 w-8 text-blue-700 hover:text-blue-900" />
                </div>
                <div className="flex items-center p-8 space-x-8">
                  <div className="flex-shrink-0 relative">
                    <img 
                      src={"data:image/png;base64,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"} 
                      alt={member.name} 
                      className="
                        w-40 h-40 rounded-full object-cover 
                        border-4 border-white 
                        shadow-lg group-hover:scale-110 transition-transform
                      "
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-700 font-semibold text-lg mb-4">{member.role}</p>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Link2, 
  Github, 
  Linkedin 
} from 'lucide-react';

// Comprehensive list of Indian States and Cities
const statesAndCities = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Rajahmundry'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
  'Delhi': ['New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam']
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    githubProfile: '',
    linkedinProfile: ''
  });

  const [errors, setErrors] = useState({});
  const [availableCities, setAvailableCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for state selection
    if (name === 'state') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        city: '' // Reset city when state changes
      }));
      // Update available cities based on selected state
      setAvailableCities(statesAndCities[value] || []);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    
    switch(name) {
      case 'name':
        errorMsg = value.trim().length < 2 ? 'Please enter a valid name' : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMsg = !emailRegex.test(value) ? 'Please enter a valid email address' : '';
        break;
      case 'phone':
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number validation
        errorMsg = !phoneRegex.test(value) ? 'Please enter a valid 10-digit mobile number' : '';
        break;
      case 'state':
        errorMsg = !value ? 'Please select a state' : '';
        break;
      case 'city':
        errorMsg = !value ? 'Please select a city' : '';
        break;
      case 'githubProfile':
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
        errorMsg = value && !githubRegex.test(value) ? 'Please enter a valid GitHub profile URL' : '';
        break;
      case 'linkedinProfile':
        const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
        errorMsg = value && !linkedinRegex.test(value) ? 'Please enter a valid LinkedIn profile URL' : '';
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
      if (errors[key]) {
        newErrors[key] = errors[key];
      }
    });

    // Check if form is valid
    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted:', formData);
      alert('Thank you! Your information has been submitted successfully.');
      // Here you would typically send the data to a backend service
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Information Form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <User className="mr-2 text-blue-500" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.name ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Mail className="mr-2 text-blue-500" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.email ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Phone className="mr-2 text-blue-500" /> Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* State Dropdown */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin className="mr-2 text-blue-500" /> State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.state ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
            >
              <option value="">Select State</option>
              {Object.keys(statesAndCities).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* City Dropdown */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin className="mr-2 text-blue-500" /> City
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!formData.state}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.city ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${!formData.state ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <option value="">Select City</option>
              {availableCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* GitHub Profile */}
          <div>
            <label htmlFor="githubProfile" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Github className="mr-2 text-blue-500" /> GitHub Profile (Optional)
            </label>
            <input
              type="url"
              id="githubProfile"
              name="githubProfile"
              value={formData.githubProfile}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.githubProfile ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              placeholder="https://github.com/username"
            />
            {errors.githubProfile && <p className="text-red-500 text-sm mt-1">{errors.githubProfile}</p>}
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Linkedin className="mr-2 text-blue-500" /> LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              id="linkedinProfile"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              className={`
                w-full px-4 py-2 border rounded-lg 
                ${errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              placeholder="https://linkedin.com/in/username"
            />
            {errors.linkedinProfile && <p className="text-red-500 text-sm mt-1">{errors.linkedinProfile}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="
                w-full py-3 bg-blue-600 text-white rounded-lg 
                hover:bg-blue-700 transition-colors duration-300
                flex items-center justify-center
              "
            >
              Submit Contact Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
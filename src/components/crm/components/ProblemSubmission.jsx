import React from 'react';
import { useFormik } from 'formik';
import AudioPlayer from './AudioPlayer';

const ProblemSubmission = () => {
  const [showReferralPerson, setShowReferralPerson] = React.useState(false);
  const [showCustomProblem, setShowCustomProblem] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      clientName: '',
      contactPhone: '',
      contactEmail: '',
      businessVertical: '',
      referringSource: '',
      referralPerson: '',
      problemCategory: '',
      customProblem: '',
      urgencyLevel: '',
      problemSummary: ''
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Handle form submission logic here
    },
  });

  const handleReferringSourceChange = (e) => {
    formik.handleChange(e);
    setShowReferralPerson(e.target.value === 'referral');
  };

  const handleProblemCategoryChange = (e) => {
    formik.handleChange(e);
    setShowCustomProblem(e.target.value === 'other');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📝 Submit Problem</h2>
        <p className="text-gray-600">Submit a new client problem with audio documentation</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-8">
        {/* Client Information Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">👤</span>
            Client Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="clientName"
                type="text"
                name="clientName"
                value={formik.values.clientName}
                onChange={formik.handleChange}
                required
                placeholder="Enter client name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Phone Number *
              </label>
              <input
                id="contactPhone"
                type="tel"
                name="contactPhone"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="contactEmail"
                type="email"
                name="contactEmail"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                required
                placeholder="client@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Business Details Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🏢</span>
            Business Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="businessVertical" className="block text-sm font-medium text-gray-700 mb-2">
                Business Vertical *
              </label>
              <select
                id="businessVertical"
                name="businessVertical"
                value={formik.values.businessVertical}
                onChange={formik.handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select vertical</option>
                <option value="real-estate">🏠 Real Estate</option>
                <option value="film-entertainment">🎬 Film & Entertainment</option>
                <option value="events">🎉 Events</option>
              </select>
            </div>
            <div>
              <label htmlFor="referringSource" className="block text-sm font-medium text-gray-700 mb-2">
                Referring Source *
              </label>
              <select
                id="referringSource"
                name="referringSource"
                value={formik.values.referringSource}
                onChange={handleReferringSourceChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select source</option>
                <option value="walk-in">🚶 Walk-in</option>
                <option value="phone">📞 Phone Call</option>
                <option value="email">📧 Email</option>
                <option value="referral">🤝 Referral</option>
              </select>
            </div>
            {showReferralPerson && (
              <div>
                <label htmlFor="referralPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Person Name *
                </label>
                <input
                  id="referralPerson"
                  type="text"
                  name="referralPerson"
                  value={formik.values.referralPerson}
                  onChange={formik.handleChange}
                  placeholder="Enter referral person's name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            )}
            <div>
              <label htmlFor="problemCategory" className="block text-sm font-medium text-gray-700 mb-2">
                Problem Category *
              </label>
              <select
                id="problemCategory"
                name="problemCategory"
                value={formik.values.problemCategory}
                onChange={handleProblemCategoryChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select category</option>
                <option value="documentation">📄 Documentation Issues</option>
                <option value="settlement">💰 Settlement Problems</option>
                <option value="technical">🔧 Technical Problems</option>
                <option value="other">✏️ Other</option>
              </select>
            </div>
            {showCustomProblem && (
              <div>
                <label htmlFor="customProblem" className="block text-sm font-medium text-gray-700 mb-2">
                  Specify Problem Type *
                </label>
                <input
                  id="customProblem"
                  type="text"
                  name="customProblem"
                  value={formik.values.customProblem}
                  onChange={formik.handleChange}
                  placeholder="Describe the problem type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            )}
            <div>
              <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level *
              </label>
              <select
                id="urgencyLevel"
                name="urgencyLevel"
                value={formik.values.urgencyLevel}
                onChange={formik.handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select priority</option>
                <option value="low">🟢 Low - Routine</option>
                <option value="medium">🟡 Medium - Within 48hrs</option>
                <option value="high">🔴 High - Immediate</option>
                <option value="critical">🚨 Critical - Emergency</option>
              </select>
            </div>
          </div>
        </div>

        {/* Audio Recording Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🎤</span>
            Problem Description
          </h3>
          <AudioPlayer onAudioChange={() => {}} />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Problem Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProblemSubmission;
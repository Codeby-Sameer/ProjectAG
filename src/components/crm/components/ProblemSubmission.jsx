import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { problemService } from '../../../services/problemService';

const ProblemSubmission = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [showAudioPreview, setShowAudioPreview] = useState(false);
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  const [summaryCharCount, setSummaryCharCount] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  
const validationSchema = Yup.object({
  clientName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .required('Full name is required'),

  contactPhone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),

  contactEmail: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  businessVertical: Yup.string()
    .required('Business vertical is required'),

  referringSource: Yup.string()
    .required('Referring source is required'),

  referralPersonName: Yup.string().when('referringSource', {
    is: (val) => val === 'referral',
    then: (schema) => schema.required('Referral person name is required'),
    otherwise: (schema) => schema.notRequired(),
  }),

  problemCategory: Yup.string()
    .required('Problem category is required'),

  customProblemType: Yup.string().when('problemCategory', {
    is: (val) => val === 'other',
    then: (schema) => schema.required('Please specify the problem type'),
    otherwise: (schema) => schema.notRequired(),
  }),

  urgencyLevel: Yup.string()
    .required('Priority level is required'),

  problemSummary: Yup.string()
    .max(2000, 'Summary must be less than 2000 characters'),
});
  const formik = useFormik({
    initialValues: {
      clientName: '',
      contactPhone: '',
      contactEmail: '',
      existingClientId: '',
      businessVertical: '',
      referringSource: '',
      referralPersonName: '',
      problemCategory: '',
      customProblemType: '',
      urgencyLevel: '',
      problemSummary: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      if (!currentAudio && !audioFile) {
        alert('Audio recording is required for problem submission');
        setSubmitting(false);
        return;
      }

      try {
        await submitProblemData(values, audioFile);
        alert('Problem report submitted successfully!');
        resetForm();
        resetAudioUpload();
        setSummaryCharCount(0);
      } catch (error) {
        alert('Error submitting problem report. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const submitProblemData = async (formData, audioFile) => {
    console.log(formData,"formdata")
  try {
    const response = await problemService.submitProblem(formData, audioFile);
    console.log('✅ Submission successful:', response);
    // Optionally show success UI or redirect
  } catch (error) {
    console.error('❌ Submission failed:', error);
    // Optionally show error UI
  }

  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setCurrentAudio(audioUrl);
        setAudioFile(audioBlob);
        setShowAudioPreview(true);
        simulateAIAnalysis();
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      alert('Error accessing microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/ogg', 'audio/aac'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a valid audio file (MP3, WAV, M4A, OGG, AAC)');
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        alert('Audio file size must be less than 50MB');
        return;
      }

      const audioUrl = URL.createObjectURL(file);
      setCurrentAudio(audioUrl);
      setAudioFile(file);
      setShowAudioPreview(true);
      simulateAIAnalysis();
    }
  };

  const resetAudioUpload = () => {
    setCurrentAudio(null);
    setAudioFile(null);
    setShowAudioPreview(false);
    setShowAIAnalysis(false);
  };

  const simulateAIAnalysis = () => {
    setTimeout(() => {
      setShowAIAnalysis(true);
    }, 1000);
  };

  const handleSummaryChange = (e) => {
    const value = e.target.value;
    formik.handleChange(e);
    setSummaryCharCount(value.length);
  };

  const generateWaveform = () => {
    const bars = [];
    for (let i = 0; i < 100; i++) {
      bars.push(
        <div
          key={i}
          className="w-0.5 rounded-full bg-gradient-to-t from-blue-500 to-purple-500 transition-all duration-300"
          style={{ height: `${Math.random() * 30 + 5}px` }}
        />
      );
    }
    return bars;
  };

  const getSentimentBadgeClass = (sentiment) => {
    const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold gap-1";
    
    switch(sentiment) {
      case 'positive':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'negative':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'urgent':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Client Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">👤 Client Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="clientName"
              value={formik.values.clientName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.clientName && formik.errors.clientName
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="Enter client name (2-100 characters)"
            />
            {formik.touched.clientName && formik.errors.clientName && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.clientName}</div>
            )}
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Phone Number *
            </label>
            <input
              type="tel"
              name="contactPhone"
              value={formik.values.contactPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.contactPhone && formik.errors.contactPhone
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="+1 (555) 000-0000 (10 digits)"
            />
            {formik.touched.contactPhone && formik.errors.contactPhone && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.contactPhone}</div>
            )}
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formik.values.contactEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.contactEmail && formik.errors.contactEmail
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="client@email.com (valid format)"
            />
            {formik.touched.contactEmail && formik.errors.contactEmail && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.contactEmail}</div>
            )}
          </div>

          {/* Existing Client ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Existing Client ID (Optional)
            </label>
            <input
              type="text"
              name="existingClientId"
              value={formik.values.existingClientId}
              onChange={formik.handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Links to existing client record"
            />
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">🏢 Business Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Business Vertical */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Vertical *
            </label>
            <select
              name="businessVertical"
              value={formik.values.businessVertical}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.businessVertical && formik.errors.businessVertical
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">Select vertical</option>
              <option value="real-estate">🏠 Real Estate</option>
              <option value="film-entertainment">🎬 Film & Entertainment</option>
              <option value="events">🎉 Events</option>
            </select>
            {formik.touched.businessVertical && formik.errors.businessVertical && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.businessVertical}</div>
            )}
          </div>

          {/* Referring Source */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Referring Source *
            </label>
            <select
              name="referringSource"
              value={formik.values.referringSource}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.referringSource && formik.errors.referringSource
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">Select source</option>
              <option value="walk-in">🚶 Walk-in</option>
              <option value="phone">📞 Phone Call</option>
              <option value="email">📧 Email</option>
              <option value="referral">🤝 Referral</option>
              <option value="social-media">📱 Social Media</option>
              <option value="website">🌐 Website</option>
              <option value="other">📋 Other</option>
            </select>
            {formik.touched.referringSource && formik.errors.referringSource && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.referringSource}</div>
            )}
          </div>

          {/* Referral Person Name (conditionally shown) */}
          {formik.values.referringSource === 'referral' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referral Person Name *
              </label>
              <input
                type="text"
                name="referralPersonName"
                value={formik.values.referralPersonName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.referralPersonName && formik.errors.referralPersonName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Enter referral person's name"
              />
              {formik.touched.referralPersonName && formik.errors.referralPersonName && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.referralPersonName}</div>
              )}
            </div>
          )}

          {/* Problem Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Problem Category *
            </label>
            <select
              name="problemCategory"
              value={formik.values.problemCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.problemCategory && formik.errors.problemCategory
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">Select category</option>
              <option value="documentation">📄 Documentation Issues</option>
              <option value="settlement">💰 Settlement Problems</option>
              <option value="registration">📝 Registration Issues</option>
              <option value="production">🎥 Production Problems</option>
              <option value="event">🎉 Event Management</option>
              <option value="promotion">📢 Promotion Issues</option>
              <option value="legal">⚖️ Legal Matters</option>
              <option value="financial">💳 Financial Issues</option>
              <option value="technical">🔧 Technical Problems</option>
              <option value="scheduling">📅 Scheduling Conflicts</option>
              <option value="communication">📞 Communication Issues</option>
              <option value="quality">⭐ Quality Concerns</option>
              <option value="other">✏️ Other (Specify)</option>
            </select>
            {formik.touched.problemCategory && formik.errors.problemCategory && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.problemCategory}</div>
            )}
          </div>

          {/* Custom Problem Type (conditionally shown) */}
          {formik.values.problemCategory === 'other' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specify Problem Type *
              </label>
              <input
                type="text"
                name="customProblemType"
                value={formik.values.customProblemType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.customProblemType && formik.errors.customProblemType
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Describe the problem type"
              />
              {formik.touched.customProblemType && formik.errors.customProblemType && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.customProblemType}</div>
              )}
            </div>
          )}

          {/* Urgency Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level *
            </label>
            <select
              name="urgencyLevel"
              value={formik.values.urgencyLevel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.urgencyLevel && formik.errors.urgencyLevel
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">Select priority</option>
              <option value="low">🟢 Low - Routine</option>
              <option value="medium">🟡 Medium - Within 48hrs</option>
              <option value="high">🔴 High - Immediate</option>
              <option value="critical">🚨 Critical - Emergency</option>
            </select>
            {formik.touched.urgencyLevel && formik.errors.urgencyLevel && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.urgencyLevel}</div>
            )}
          </div>
        </div>
      </div>

      {/* Problem Description - Audio Recording */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">🎤 Problem Description</h3>
        
        {/* Audio Requirements Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📋</div>
            <div>
              <h4 className="text-blue-900 font-semibold mb-2">Audio Recording Required</h4>
              <p className="text-blue-700 text-sm mb-3 leading-relaxed">
                Audio documentation is mandatory for complete problem context preservation. 
                This ensures accurate problem resolution and maintains quality standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-blue-700">
                <div><strong>Formats:</strong> MP3, WAV, M4A, OGG, AAC</div>
                <div><strong>Max Size:</strong> 50 MB per recording</div>
                <div><strong>Max Duration:</strong> 30 minutes</div>
                <div><strong>Min Quality:</strong> 32 kbps, 16 kHz</div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Upload/Recording Area */}
        {!showAudioPreview ? (
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <div>
              <div className="text-5xl mb-4">🎙️</div>
              <h4 className="text-gray-900 font-semibold mb-2">Record or Upload Audio</h4>
              <p className="text-gray-600 text-sm mb-5">
                Supported formats: MP3, WAV, M4A, OGG, AAC (Max: 50MB, 30min)
              </p>
              <input
                type="file"
                id="audio-file"
                accept="audio/*"
                onChange={handleAudioUpload}
                className="hidden"
              />
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                    isRecording 
                      ? 'bg-green-500 hover:bg-green-600 text-white animate-pulse' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  <span>{isRecording ? '⏹' : '⏺'}</span>
                  {isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('audio-file').click()}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  📁 Upload Audio File
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Audio Preview */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Recorded Audio</div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>📁 Size: {audioFile ? (audioFile.size / (1024 * 1024)).toFixed(2) : '0'} MB</span>
                    <span>🎵 Quality: 32 kbps</span>
                    <span>⏱️ Duration: 0:00</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors duration-300"
                >
                  💾 Download
                </button>
              </div>

              {/* Waveform Visualization */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-1 h-15 cursor-pointer">
                  <div className="flex items-end gap-0.5 h-10 flex-1">
                    {generateWaveform()}
                  </div>
                </div>
                <div className="bg-gray-200 h-1 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>

              <button
                type="button"
                onClick={resetAudioUpload}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                🗑️ Remove Audio
              </button>
            </div>

            {/* AI Analysis Results */}
            {showAIAnalysis && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
                <h4 className="text-gray-900 font-semibold mb-4">🤖 AI Analysis Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-xs mb-2">Sentiment Analysis</div>
                    <div className={getSentimentBadgeClass('neutral')}>
                      😐 Analyzing...
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-xs mb-2">AI Priority Suggestion</div>
                    <div className="font-semibold text-blue-500">Analyzing...</div>
                  </div>
                </div>

                {/* Transcription */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-sm font-semibold text-gray-900">📝 Speech-to-Text Transcription</h5>
                    <button
                      type="button"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs transition-colors duration-300"
                    >
                      👁️ Show/Hide
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm leading-relaxed max-h-32 overflow-y-auto">
                    Processing speech-to-text...
                  </div>
                </div>

                {/* Keywords */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">🏷️ Extracted Keywords</h5>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      Processing...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Written Summary */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Written Problem Summary (Optional)
          </label>
          <textarea
            name="problemSummary"
            value={formik.values.problemSummary}
            onChange={handleSummaryChange}
            onBlur={formik.handleBlur}
            rows={4}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
              formik.touched.problemSummary && formik.errors.problemSummary
                ? 'border-red-500'
                : summaryCharCount > 1800 
                ? 'border-yellow-500' 
                : 'border-gray-300'
            }`}
            placeholder="Provide additional details about the problem... (up to 2000 characters)"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            <span className={summaryCharCount > 1800 ? 'text-yellow-600' : ''}>
              {summaryCharCount}
            </span>
            /2000 characters
          </div>
          {formik.touched.problemSummary && formik.errors.problemSummary && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.problemSummary}</div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? 'Submitting...' : 'Submit Problem Report'}
        </button>
      </div>
    </form>
  );
};

export default ProblemSubmission;
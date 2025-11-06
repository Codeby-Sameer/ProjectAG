import React from 'react';

const SystemSpecs = () => {
  const clientFields = [
    { field: 'Full Name', type: 'Text', required: 'Yes', validation: '2-100 characters' },
    { field: 'Primary Phone Number', type: 'Phone', required: 'Yes', validation: 'Valid format, 10 digits' },
    { field: 'Email Address', type: 'Email', required: 'Yes', validation: 'Valid email format' },
    { field: 'Referring Source', type: 'Dropdown', required: 'Yes', validation: 'From predefined list' },
    { field: 'Business Vertical', type: 'Dropdown', required: 'Yes', validation: 'Real Estate, Film, Events' },
    { field: 'Existing Client ID', type: 'Reference', required: 'No', validation: 'Links to existing client' }
  ];

  const problemFields = [
    { field: 'Problem ID', type: 'Auto-generated', required: 'Auto', validation: 'Unique identifier' },
    { field: 'Problem Category', type: 'Dropdown', required: 'Yes', validation: 'Based on vertical' },
    { field: 'Priority Level', type: 'Dropdown', required: 'Yes', validation: 'Low, Medium, High, Critical' },
    { field: 'Audio Recording', type: 'File Upload', required: 'Yes', validation: 'MP3/WAV/M4A, max 50MB' },
    { field: 'Audio Duration', type: 'Time', required: 'Auto', validation: 'Extracted from file' },
    { field: 'Written Summary', type: 'Text Area', required: 'No', validation: 'Up to 2000 characters' },
    { field: 'Date/Time Submitted', type: 'DateTime', required: 'Auto', validation: 'System timestamp' },
    { field: 'Status', type: 'Status Field', required: 'Auto', validation: 'Workflow state tracking' }
  ];

  const audioSpecs = [
    {
      title: '📤 Audio Upload Process',
      items: [
        'Supported Formats: MP3, WAV, M4A, OGG, AAC',
        'Maximum File Size: 50 MB per recording',
        'Minimum Quality: 32 kbps bitrate, 16 kHz sample rate',
        'Maximum Duration: 30 minutes per recording',
        'Validation: Automatic format validation, corruption check',
        'Compression: Automatic optimization for storage'
      ]
    },
    {
      title: '🔒 Storage and Security',
      items: [
        'Storage: AWS S3 or Azure Blob Storage with redundancy',
        'Encryption: AES-256 at rest, TLS 1.3 in transit',
        'Access Control: Role-based permissions with audit logging',
        'Retention: 7 years for compliance with automated archival',
        'Backup: Daily incremental backups, 30-day retention'
      ]
    },
    {
      title: '🎧 Playback Features',
      items: [
        '✅ HTML5 audio player with progress bar',
        '✅ Variable playback speed: 0.5x to 2x',
        '✅ Skip forward/backward 10 seconds',
        '✅ Volume control with mute option',
        '✅ Download option for authorized users',
        '✅ Waveform visualization showing audio levels'
      ]
    },
    {
      title: '🚀 Advanced Features (Phase 3)',
      items: [
        '🔮 Speech-to-Text transcription using AI',
        '😊 Sentiment Analysis: Detect emotion and urgency',
        '🏷️ Keyword Extraction: Auto-tag with relevant keywords',
        '🌍 Multi-language Support for transcription',
        '🔍 Search across transcriptions for quick lookup'
      ]
    }
  ];

  const workflowSteps = [
    {
      step: '1. Problem Submission',
      description: 'Client approaches → Staff captures details → Audio recording → System categorization',
      color: 'blue'
    },
    {
      step: '2. Admin Review',
      description: 'Admin reviews audio → Determines priority → Routes to appropriate department',
      color: 'yellow'
    },
    {
      step: '3. Appointment Scheduling',
      description: 'Contact client → Schedule with specialist → Send confirmations → Set reminders',
      color: 'green'
    },
    {
      step: '4. Resolution',
      description: 'Specialist reviews audio → Meets client → Addresses problem → Records outcome',
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 System Specifications & Data Requirements</h2>
        <p className="text-gray-600">Comprehensive data capture requirements and audio handling specifications</p>
      </div>

      {/* Data Capture Requirements */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">📊 Data Capture Requirements</h3>
        
        {/* Client Information Fields */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">👤 Client Information Fields</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Field Name</th>
                  <th className="px-4 py-3">Data Type</th>
                  <th className="px-4 py-3">Required</th>
                  <th className="px-4 py-3">Validation Rules</th>
                </tr>
              </thead>
              <tbody>
                {clientFields.map((field, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{field.field}</td>
                    <td className="px-4 py-3">{field.type}</td>
                    <td className={`px-4 py-3 font-semibold ${
                      field.required === 'Yes' ? 'text-red-600' : 
                      field.required === 'No' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {field.required}
                    </td>
                    <td className="px-4 py-3">{field.validation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Problem Record Fields */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">🎯 Problem Record Fields</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Field Name</th>
                  <th className="px-4 py-3">Data Type</th>
                  <th className="px-4 py-3">Required</th>
                  <th className="px-4 py-3">Validation Rules</th>
                </tr>
              </thead>
              <tbody>
                {problemFields.map((field, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{field.field}</td>
                    <td className="px-4 py-3">{field.type}</td>
                    <td className={`px-4 py-3 font-semibold ${
                      field.required === 'Yes' ? 'text-red-600' : 
                      field.required === 'No' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {field.required}
                    </td>
                    <td className="px-4 py-3">{field.validation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Audio Handling Specifications */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">🎵 Audio Handling & Processing Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audioSpecs.map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{spec.title}</h4>
              <div className="space-y-3">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Process */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">🔄 Complete Workflow Process</h3>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-4">System Workflow Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg border-l-4 border-blue-500"
              >
                <div className="font-semibold text-gray-900 mb-2">{step.step}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Workflow */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h5 className="text-lg font-semibold text-yellow-800 mb-2">Special Case: Cancellations</h5>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Problems can be cancelled from any status before resolution. Cancelled problems move directly to 
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium ml-1">Cancelled</span> 
                status with appropriate notes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSpecs;
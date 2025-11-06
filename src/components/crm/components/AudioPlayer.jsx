import React, { useState, useRef } from 'react';

const AudioPlayer = ({ onAudioChange }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      onAudioChange(file);
    }
  };

  const handleRecordClick = () => {
    setIsRecording(!isRecording);
    // Recording functionality would be implemented here
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const removeAudio = () => {
    setAudioFile(null);
    onAudioChange(null);
  };

  return (
    <div className="space-y-6">
      {/* Audio Requirements Notice */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="text-2xl">📋</div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Audio Recording Required</h4>
            <p className="text-blue-700 mb-4">
              Audio documentation is mandatory for complete problem context preservation. 
              This ensures accurate problem resolution and maintains quality standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-600">
              <div><strong>Formats:</strong> MP3, WAV, M4A</div>
              <div><strong>Max Size:</strong> 50 MB</div>
              <div><strong>Max Duration:</strong> 30 minutes</div>
              <div><strong>Min Quality:</strong> 32 kbps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Upload Area */}
      {!audioFile ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
          <div className="text-6xl mb-4">🎙️</div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Record or Upload Audio</h4>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Supported formats: MP3, WAV, M4A, OGG, AAC (Max: 50MB, 30min)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="button" 
              onClick={handleRecordClick}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                isRecording 
                  ? 'bg-green-500 text-white hover:bg-green-600 animate-pulse' 
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              <span>⏺</span>
              <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
            </button>
            <button 
              type="button" 
              onClick={handleUploadClick}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>📁</span>
              <span>Upload Audio File</span>
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="audio/*"
            className="hidden"
          />
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h5 className="font-semibold text-gray-900 text-lg">{audioFile.name}</h5>
              <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                <span>📁 Size: {(audioFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                <span>🎵 Format: {audioFile.type.split('/')[1]?.toUpperCase()}</span>
              </div>
            </div>
            <button 
              onClick={removeAudio}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>🗑️</span>
              <span>Remove Audio</span>
            </button>
          </div>
          
          {/* Audio Player Controls */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">🎧 Audio file ready for submission</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                ▶️ Play
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                ⏸️ Pause
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
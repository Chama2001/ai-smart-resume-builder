'use client';

import React, { useState } from 'react';

export default function ResumeOptimizer() {
  const [userDetails, setUserDetails] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [optimizedResume, setOptimizedResume] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleOptimize = () => {
    if (!userDetails || !jobDesc) return;
    setIsGenerating(true);
    
    // Simulating the backend API delay
    setTimeout(() => {
      setOptimizedResume(`[Simulated ATS Optimization from AI Engine]\n\nBased on the Job Description, here are your optimized ATS keywords, professional summary, and tailored bullet points... (Connect backend to view full generation)`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        <div className="bg-gradient-to-r from-emerald-700 to-teal-900 text-white p-10 text-center">
          <h1 className="text-4xl font-extrabold mb-3">AI ATS Resume Optimizer 📄✨</h1>
          <p className="text-emerald-100 text-lg">Beat the bots. Tailor your resume instantly to match any job description.</p>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Current Skills & Experience</label>
              <textarea 
                rows={5}
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition-all"
                placeholder="Paste your current resume bullet points, skills, or general experience here..."
                value={userDetails}
                onChange={(e) => setUserDetails(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Target Job Description (JD)</label>
              <textarea 
                rows={5}
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition-all"
                placeholder="Paste the requirements and description of the job you want to apply for..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </div>

            <button 
              onClick={handleOptimize}
              disabled={isGenerating || !userDetails || !jobDesc}
              className={`w-full py-4 text-white font-bold rounded-lg transition-all ${isGenerating ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl'}`}
            >
              {isGenerating ? 'Analyzing ATS Keywords...' : 'Optimize My Resume 🚀'}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 shadow-inner">
            {optimizedResume ? (
              <div className="h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>✅</span> ATS Optimized Content
                </h3>
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium bg-white p-6 rounded-lg border border-slate-200 h-[calc(100%-3rem)] overflow-y-auto">
                  {optimizedResume}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <span className="text-7xl mb-4 opacity-50">🤖</span>
                <p className="text-center text-lg">Provide your details and the job description to generate your ATS-optimized content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

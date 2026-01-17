import React, { useState } from 'react';
import SuccessCard from '../components/SuccessCard';

// Mock data for the dropdown
const availableClasses = [
  { id: 1, name: "Science - Class 10-A (Dhanush)", status: "open" },
  { id: 2, name: "Biology - Class 9-B (Sarah)", status: "open" },
  { id: 3, name: "Chemistry - Class 11-C (Mike)", status: "closed" },
];

const Enrollments = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    classId: '',
    email: '',
    studentId: '',
    accessCode: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if ((e.target as HTMLInputElement).type === 'checkbox') {
       setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
       setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
<SuccessCard setSuccess={setSuccess}/>
    );
  }

  return (
    // Added flex-col to stack header and form vertically
    <div className="w-full bg-white p-6 rounded-lg  border border-gray-100">
        <div className="w-full max-w-md text-left mb-5">
          <h2 className="text-2xl font-bold text-gray-900">Class Enrollment</h2>
          <p className="text-sm text-gray-600 mt-1">Join your online session securely</p>
        </div>
    <div className=" bg-gray-50 flex flex-col items-center justify-center p-4">
       
       {/* Header: Added w-full, max-w-md to match form width, and text-left */}
      

      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <div>
              <label htmlFor="classId" className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
              <select
                id="classId"
                name="classId"
                required
                value={formData.classId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                <option value="" disabled>-- Choose a Class --</option>
                {availableClasses.map((cls) => (
                  <option key={cls.id} value={cls.id} disabled={cls.status === 'closed'}>
                    {cls.name} {cls.status === 'closed' ? '(Full)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Student Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="student@university.edu"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Section 2: Strict Enrollment / Verification */}
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <h3 className="text-sm font-bold text-orange-800">Security Verification</h3>
            </div>
            <p className="text-xs text-orange-700 mb-4">
              To prevent unauthorized access to online classes, please provide your unique identifiers.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="studentId" className="block text-xs font-semibold uppercase text-gray-500 mb-1">Student Roll ID</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  required
                  placeholder="e.g. CS-2024-001"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="accessCode" className="block text-xs font-semibold uppercase text-gray-500 mb-1">Class Access Code</label>
                <input
                  type="password"
                  id="accessCode"
                  name="accessCode"
                  required
                  placeholder="Enter 6-digit pin"
                  value={formData.accessCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold shadow-md transition-all ${
              loading 
                ? 'bg-emerald-400 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transform active:scale-95'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              "Enroll Now"
            )}
          </button>

        </form>
      </div>
    </div>
    </div>
  );
};

export default Enrollments;
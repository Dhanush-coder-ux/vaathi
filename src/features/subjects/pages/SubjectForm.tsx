import React, { useState } from 'react';
import { Save, X, ChevronDown } from 'lucide-react'; 

const departments = [
  { id: 1, name: "Computer Science", code: "CS" },
  { id: 2, name: "Mathematics", code: "MATH" },
  { id: 3, name: "English Literature", code: "ENG" },
  { id: 4, name: "Physics", code: "PHY" },
];

const CreateSubject = ({ onClose }: { onClose?: () => void }) => {
  const [formData, setFormData] = useState({
    department: '',
    name: '',
    code: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Subject Created:", formData);
      setLoading(false);
      if (onClose) onClose(); 
    }, 1000);
  };

  return (
    <div className=" p-4 flex justify-center">
      <div className="w-full max-w-2xl">


        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-6">
          <div className="space-y-6">

            {/* Row 1: Department Selection */}
            <div className="relative">
              <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <select
                  id="department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 appearance-none border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all bg-white text-gray-700"
                >
                  <option value="" disabled>Select a Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.code}>
                      {dept.name} ({dept.code})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            
            {/* Row 2: Code & Name */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Subject Code */}
              <div className="col-span-1">
                <label htmlFor="code" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject Code
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="e.g. 101"
                  required
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all uppercase"
                />
              </div>

              {/* Subject Name */}
              <div className="col-span-3">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Intro to Algorithms"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all"
                />
              </div>
            </div>

            {/* Row 3: Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Enter a brief overview of the syllabus or learning outcomes..."
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all resize-none"
              />
            </div>

            {/* Row 4: Action Buttons */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-50">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-lg bg-[#D96B4D] text-white font-medium hover:bg-[#c25e41] focus:ring-4 focus:ring-[#D96B4D]/20 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {loading ? 'Creating...' : 'Create Subject'}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubject;
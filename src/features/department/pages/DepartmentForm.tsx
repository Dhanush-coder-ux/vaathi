import React, { useState } from 'react';
import { Save, X } from 'lucide-react'; // Make sure to install lucide-react


const CreateDepartment = ({ onClose }: { onClose?: () => void }) => {
  // 1. State for form fields
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setLoading(false);
      // alert("Department Created Successfully!");
      if (onClose) onClose(); 
    }, 1000);
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-2xl">

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-6">
          <div className="space-y-6">
            
            {/* Row 1: Code & Name */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Department Code */}
              <div className="col-span-1">
                <label htmlFor="code" className="block text-sm font-semibold text-gray-700 mb-2">
                  Code
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="e.g. CS"
                  required
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all uppercase"
                />
              </div>

              {/* Department Name */}
              <div className="col-span-3">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Department Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Computer Science"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Enter a brief description of this department..."
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all resize-none"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">
                {formData.description.length} characters
              </p>
            </div>

            {/* Row 3: Action Buttons */}
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
                {loading ? 'Creating...' : 'Create Department'}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDepartment;
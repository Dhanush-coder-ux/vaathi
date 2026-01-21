import React, { useState } from 'react';
import { Save, X, Upload, ChevronDown} from 'lucide-react';


// Dummy Data for Dropdowns
const subjects = [
  { id: 1, name: "Biology" },
  { id: 2, name: "Mathematics" },
  { id: 3, name: "Computer Science" },
];

const teachers = [
  { id: 1, name: "Dr. Sarah Wilson" },
  { id: 2, name: "Prof. John Doe" },
  { id: 3, name: "Mrs. Emily Davis" },
];

const CreateClass = ({ onClose }: { onClose?: () => void }) => {
  const [formData, setFormData] = useState({
    className: '',
    subject: '',
    teacher: '',
    capacity: '',
    status: 'Live',
    description: '',
    banner: null as File | null // To store the file object
  });

  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle Text/Select Inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle File Upload (Visual Preview)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, banner: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Class Created:", formData);
      setLoading(false);
      if (onClose) onClose();
    }, 1000);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl"> 


        <form onSubmit={handleSubmit} className="mt-3">
          <div className="space-y-6">

            {/* 1. Banner Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Banner Image <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer overflow-hidden bg-gray-50">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Banner Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                        <Upload className="w-6 h-6 text-[#D96B4D]" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">Click to upload photo</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Class Name */}
            <div>
              <label htmlFor="className" className="block text-sm font-semibold text-gray-700 mb-2">
                Class Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="className"
                name="className"
                placeholder="e.g. Introduction to Biology - Section A"
                required
                value={formData.className}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all"
              />
            </div>

            {/* 3. Row: Subject & Teacher */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Subject */}
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 appearance-none border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] bg-white text-gray-700"
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map((sub) => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Teacher */}
              <div className="relative">
                <label htmlFor="teacher" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teacher <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="teacher"
                    name="teacher"
                    required
                    value={formData.teacher}
                    onChange={handleChange}
                    className="w-full px-4 py-2 appearance-none border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] bg-white text-gray-700"
                  >
                    <option value="" disabled>Select a teacher</option>
                    {teachers.map((t) => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 4. Row: Capacity & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Capacity */}
              <div>
                <label htmlFor="capacity" className="block text-sm font-semibold text-gray-700 mb-2">
                  Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  placeholder="30"
                  min="1"
                  required
                  value={formData.capacity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all"
                />
              </div>

              {/* Status */}
              <div className="relative">
                <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 appearance-none border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] bg-white text-gray-700"
                  >
                    <option value="Live">Live</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 5. Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Brief description about the class..."
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all resize-none"
              />
            </div>

            {/* Actions */}
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
                {loading ? 'Creating...' : 'Create Class'}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
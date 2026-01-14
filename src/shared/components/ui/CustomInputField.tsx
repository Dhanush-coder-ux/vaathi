import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
}

const InputField = ({ label, icon: Icon, className, ...props }: InputFieldProps) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <input
          {...props} // This passes onChange, value, name, type, required, etc.
          className={`
            w-full py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 
            outline-none transition-all placeholder:text-gray-400 
            text-gray-900 bg-white
            ${Icon ? 'pl-10 pr-4' : 'px-4'} 
            ${className || ''}
          `}
        />
      </div>
    </div>
  );
};

export default InputField;
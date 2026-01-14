import React, { useState } from "react";
import {
  GraduationCap,
  School,
  CloudUpload,
  User,
  Mail,
} from "lucide-react";
import InputField from "../../../shared/components/ui/CustomInputField";
import PasswordInput from "../components/PassWordInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user:", { ...formData, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-md">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center">
        

          <h1 className="text-xl font-semibold text-gray-900">
            Create account
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Get started with <span className="font-bold text-emerald-600">Vaathi</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">

          {/* Role */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600">
              Role
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`rounded-lg border px-3 py-2.5 transition text-sm
                ${role === "student"
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={`rounded-lg border px-3 py-2.5 transition text-sm
                ${role === "teacher"
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <School className="h-4 w-4" />
                  Teacher
                </div>
              </button>
            </div>
          </div>

          {/* Upload */}
         <div className="space-y-2">
           <label className="block text-sm font-semibold text-gray-700">Profile Photo</label> 
           <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-orange-400 transition-colors group">
             <div className="bg-orange-50 p-3 rounded-full mb-3 group-hover:bg-orange-100 transition-colors"> <CloudUpload className="w-6 h-6 text-orange-500" /> 
             </div> <p className="text-sm font-semibold text-gray-700"> <span className="text-orange-600">Click to upload photo</span> </p> <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
              </div> </div>

          {/* Inputs */}
          <InputField
            label="Full name"
            name="fullName"
            placeholder="John Doe"
            icon={User}
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              to={'/sign-in'}
              className="font-semibold text-gray-900 hover:text-emerald-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

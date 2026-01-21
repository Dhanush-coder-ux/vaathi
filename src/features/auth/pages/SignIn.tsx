import React, { useState } from "react";
import { Mail } from "lucide-react";
import InputField from "../../../shared/components/ui/CustomInputField";
import PasswordInput from "../components/PassWordInput";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-md">

       
        <div className="px-6 pt-6 pb-4 text-center">
          <div className="flex justify-center mb-3">
            <img
              src="/images/vaathi.png"
              alt="Vaathi"
              className="h-24 w-auto object-contain"
            />
          </div>

          <h1 className="text-xl font-semibold text-gray-900">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
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

          <div className="space-y-1">
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs font-medium text-emerald-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <PasswordInput
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
              <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.2746H1.46395V17.3995C3.45064 21.3413 7.51428 24.0008 12.2401 24.0008Z" fill="#34A853" />
              <path d="M5.50253 14.2746C5.01298 12.8099 5.01298 11.1961 5.50253 9.73135V6.6064H1.46398C-0.19802 9.88053 -0.19802 14.1254 1.46398 17.3995L5.50253 14.2746Z" fill="#FBBC05" />
              <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.51428 0.000808666 3.45064 2.66032 1.46395 6.6064L5.50705 9.73135C6.45503 6.86603 9.11388 4.74966 12.2401 4.74966Z" fill="#EA4335" />
            </svg>
            Google
          </button>

          <p className="text-center text-xs text-gray-500">
            Don’t have an account?{" "}
            <Link
              to={'/sign-up'}
              className="font-semibold text-gray-900 hover:text-emerald-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

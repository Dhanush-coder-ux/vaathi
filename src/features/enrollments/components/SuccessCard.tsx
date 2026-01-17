import React from 'react'
interface SuccessCardProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
const SuccessCard = ({ setSuccess }:SuccessCardProps) => {
  return (
      <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Enrollment Requested!</h2>
        <p className="text-gray-600 mt-2">Your request has been sent to the instructor for verification. Check your email for the join link.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 text-blue-600 hover:text-blue-800 font-medium text-sm">Enroll in another class</button>
      </div>
  )
}

export default SuccessCard

"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Import react-hot-toast
import { Toaster } from 'react-hot-toast'; // Import react-hot-toast

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      toast.error('Passwords do not match');
      return;
    }

    // Check if terms are agreed
    if (!formData.termsAgreed) {
      setError('You must agree to the terms and conditions');
      setLoading(false);
      toast.error('You must agree to the terms and conditions');
      return;
    }

    // No API call, just handle form success
    toast.success('Signup Successful!');
    router.push("/login");
    setLoading(false);
  };

  return (
    <div className='flex justify-center w-[100%] min-h-screen items-center'>
      <div className="w-[100%] sm:w-[50%] bg-gray-100 shadow-2xl rounded-[5px]">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 ">
          <h1 className="text-2xl font-bold text-textcolor text-center mb-4">Register Now</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg outline-none border-none text-textcolor text-lg "
              />
            </div>
            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg outline-none border-none text-textcolor text-lg "
              />
            </div>
            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none ">
                <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.572656 28.063219 C 31.387234 28.063219 30.058094 28.881234 29.674844 29.433234 C 29.286844 29.990234 27.168594 30.606328 24.877344 30.516328 C 21.254344 30.408328 19.960797 25.611578 19.228797 24.367578 C 18.529797 23.135578 17.240234 15 17.240234 15 z" />
              </svg>

              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp"
                className="w-full px-4 py-2 border rounded-lg outline-none border-none text-textcolor text-lg "
              />
            </div>
            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v13.5M5.25 12h13.5" />
              </svg>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg outline-none border-none text-textcolor text-lg "
              />
            </div>
            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v13.5M5.25 12h13.5" />
              </svg>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg outline-none border-none text-textcolor text-lg "
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
              />
              <label htmlFor="termsAgreed" className="text-sm">I agree to the terms and conditions</label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-textcolor w-full text-white py-2 rounded-lg disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center gap-2 mt-4">
            <p className="text-sm">Already have an account?</p>
            <Link href="/login" className="text-sm font-bold text-primary">Login</Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;

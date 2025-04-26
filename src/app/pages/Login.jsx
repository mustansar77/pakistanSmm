"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Here you can add your custom logic for login if needed.
    // For now, it's just a dummy message.
    alert('Login form submitted!');
  };

  return (
    <div className='flex justify-center w-[100%] min-h-screen items-center'>
      <div className="w-[100%] sm:w-[50%] bg-gray-100 l rounded-[5px]">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 ">

          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">

            <div className='flex justify-center items-center border-textcolor border-[1px] rounded-[4px] px-2 py-2' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none " >
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-none " >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
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

            <div className="flex items-center justify-between my-[10px]">
              <div className='flex items-center space-x-2'>
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="w-4 h-4 fill-textcolor text-textcolor"
                />
                <label className="text-lg font-semibold">
                  Remember Me
                </label>
              </div>
              <Link href="/forgetpassword" className='text-lg font-semibold'>Forget Password</Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-textcolor text-white py-2 rounded-lg hover:bg-textcolor transition duration-300"
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <p className="text-lg">
                Don't have account yet ?{' '}
                <Link href="/signup" className="text-textcolor hover:underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

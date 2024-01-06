import React from 'react'

export default function Login() {
  return (
    <div className="login w-screen h-screen bg-slate-400 flex flex-col justify-center items-center bg-cover">
      <form action="" className='bg-white min-w-fit min-h-fit flex flex-col justify-center items-center px-10 md:px-20 py-24 md:py-32 shadow-2xl rounded'>
        <h1 className='font-bold text-2xl'>TeamFlow</h1>
        <p className='text-lg text-neutral-400 mb-10'>Login to continue</p>
        <div className="field-container flex flex-col mb-5 w-full">
          <label>Email</label>
          <input type="email" name='email' className='border rounded outline-none p-2' />
        </div>
        <div className="field-container flex flex-col mb-5 w-full">
          <label>Password</label>
          <input type="password" name='password' className='border rounded outline-none p-2' />
        </div>
        <input type="submit" name='submit' value="Login" className='mb-10 bg-[#E1F4FE] w-full p-2 rounded cursor-pointer hover:bg-[#F1F7FA]' />
        <p>No account? <a href="/signup" className='underline'>Signup</a></p>
      </form>
    </div>
  )
}

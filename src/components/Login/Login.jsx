import React, { useState } from 'react'

function Login() {
  const [loginData, setLoginData] = useState({
    email: '', 
    password: '', 
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    setLoginData((prevLoginData) => ({...prevLoginData, [name]: value}))
  }

  return (
    <>
      <div className='h-screen flex flex-row justify-center items-center text-white'>
        {/* Sign up box below */}
        <div className='bg-gray-800 h-auto w-96 rounded-lg p-3 flex flex-col gap-2 border border-white'>
          <h1 className='text-2xl'>
            Enter Your Email & Password!
          </h1>
          <form
            action=""
            className='flex flex-col gap-2'
            onSubmit={handleSubmit}>
            <div className='flex flex-row justify-between '>
              <label htmlFor="email">Email: </label>
              <input
                required
                className='p-1 text-black'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="text"
                name="email"
                id="email"
                onChange={loginData.email}
                placeholder='Enter your email address'
                />
            </div>
            <div className='flex flex-row justify-between '>
              <label htmlFor="password">Password: </label>
              <input
                required
                className='p-1 text-black'
                type='password'
                name="password"
                id="password"
                onChange={loginData.password}
                placeholder='Enter your password'
              />
            </div>
            <div className=''>
              <button
                type='submit'
                className='hover:border-white active:border-white focus-visible:border bg-green-700 py-2 px-2'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
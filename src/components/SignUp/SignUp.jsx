import React from 'react'
import { useState } from 'react'

function SignUp({onSignUp}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // dob: '', 
    // country: '', 
    // phone: '', 
    // interests: [], 
    // agreeTerms: false,
  })

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    const { email, password } = formData
    onSignUp(email, password)
  }

  return (
    <>
      <div className='h-screen flex flex-row justify-center items-center text-white'>
        {/* Sign up box below */}
        <div className='bg-gray-800 h-auto w-96 rounded-lg p-3 flex flex-col gap-2 border border-white'>
          <h1 className='text-2xl'>
            Sign Up Here!
          </h1>
          <form 
          action="" 
          className='flex flex-col gap-2'
          onSubmit={handleSubmit}>
            <div className='flex flex-row justify-between '>
              <label htmlFor="name">Name: </label>
              <input
                className='p-1 text-black'
                required
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-row justify-between '>
              <label htmlFor="email">Email: </label>
              <input
                required
                className='p-1 text-black'
                type="text"
                name="email"
                id="email"
                placeholder='Enter your email address'
                value={formData.email}
                onChange={handleChange}
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
                placeholder='Create a password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-row justify-between '>
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                required
                className='p-1 text-black'
                type='password'
                name="confirmPassword"
                id="confirmPassword"
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
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

export default SignUp
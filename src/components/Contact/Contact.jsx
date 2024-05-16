import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <div className='min-h-screen h-auto flex flex-col justify-start px-20 py-12'>
        <div className='text-white'>
          <h1 className='font-semibold text-4xl py-6'>Contact Us ☎️</h1>
          <p className='text-xl'>
            Thank you for your interest in CodeWise! We're here to assist you with any questions, feedback, or inquiries you may have. Feel free to reach out to us using the following contact information:
          </p>
        </div>

        <div className='text-white text-xl'>
          <ul className='list-disc flex flex-col px-8'>
            <li className='p-4'>
              <span className='font-bold'>Email:</span> <a href="mailto:anujsamdariya07@gmail.com" target='_blank'>anujsamdariya07@gmail.com</a>
            </li>
            <li className='p-4'>
              <span className='font-bold'>Phone:</span> (+91)-9893380468
            </li>
            <li className='p-4'>
              <span className='font-bold'>Instagram:</span>
              <a
                target='_blank'
                href="https://instagram.com/anujsamdariya07/"
                className="text-white hover:text-gray-300 p-4">
                Instagram
                <i class="px-2 w-1 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li className='p-4'>
              <span className='font-bold'>X:</span>
              <a
                target='_blank'
                href="https://twitter.com/anujsamdariya07"
                className="text-white hover:text-gray-300 p-4">
                X
                <i class="px-2 w-1 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li className='p-4'>
              <span className='font-bold'>LinkedIn:</span>
              <a
                target='_blank'
                href="https://www.linkedin.com/in/anuj-samdariya-569162254/"
                className="text-white hover:text-gray-300 p-4">
                LinkedIn
                <i class="px-2 w-1 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li className='p-4'>
              <span className='font-bold'>Github:</span>
              <a
                target='_blank'
                href="https://github.com/anujsamdariya07"
                className="text-white hover:text-gray-300 p-4">
                GitHub
                <i class="px-2 w-1 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li className='p-4'>
              <span className='font-bold'>Facebook:</span>
              <a
                target='_blank'
                href="https://www.facebook.com/anuj.samdariya.9"
                className="text-white hover:text-gray-300 p-4">
                Facebook
                <i class="px-2 w-1 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact

{/* <div className = 'text-white flex flex-col gap-5 justify-around h-screen text-left' >
  <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-2xl text-left'>
      Contact Us☎️
    </h1>
    <p>
      Thank you for your interest in CodeWise! We're here to assist you with any questions, feedback, or inquiries you may have. Feel free to reach out to us using the following contact information:
    </p>
  </div>
  <div className='flex flex-col gap-2'>
    <h1 className='text-xl font-bold'>
      Contact Information
    </h1>
    <ol className='flex flex-col list-disc'>
      <li>
        <span className='font-bold'>Email:</span> anujsamdariya07@gmail.com
      </li>
      <li>
        <span className='font-bold'>Phone:</span> (+91)-9893380468
      </li>
      <li>
        <span className='font-bold flex-shrink-0'>Social Media:</span>
        <h2 className='flex flex-row gap-2 flex-shrink-0'>
        <a
          target='_blank'
          href="https://github.com/anujsamdariya07"
          className="text-white hover:text-gray-300">
          GitHub↗️
        </a>
        <a
          target='_blank'
          href="https://twitter.com/anujsamdariya07"
          className="text-white hover:text-gray-300">
          X↗️
        </a>
        <a
          target='_blank'
          href="https://www.linkedin.com/in/anuj-samdariya-569162254/"
          className="text-white hover:text-gray-300">
          LinkedIn↗️
        </a>
        <a
          target='_blank'
          href="https://instagram.com/anujsamdariya07/"
          className="text-white hover:text-gray-300">
          Instagram↗️
        </a>
        <a
          target='_blank'
          href="https://www.facebook.com/anuj.samdariya.9"
          className="text-white hover:text-gray-300">
          Facebook↗️
        </a>
      </h2>
    </li>
    </ol>
  </div>
</div >  */}
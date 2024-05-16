import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col '>
      <footer className="flex items-center bg-gray-800 p-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex justify-between space-x-4">
            <ul className='flex justify-between flex-row gap-56 underline text-xs'>
              <li className='flex justify-between underline flex-col gap-3'>
                <a
                  target='_blank'
                  href="https://github.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  GitHub
                </a>
                <a
                  target='_blank'
                  href="https://www.facebook.com/anuj.samdariya.9"
                  className="text-white hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li className='flex underline flex-col gap-3'>
                <a
                  target='_blank'
                  href="https://twitter.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  X
                </a>
                <a
                  target='_blank'
                  href="https://instagram.com/anujsamdariya07/"
                  className="text-white hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li className='flex underline flex-col gap-3'>
                <a
                  target='_blank'
                  href="https://www.linkedin.com/in/anuj-samdariya-569162254/"
                  className="text-white hover:text-gray-300">
                  LinkedIn
                </a>
                <div>
                  <p className="text-white underline">
                    Jabalpur, Madhya Pradesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
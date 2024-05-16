import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='text-white bg-gray h-screen flex flex-col justify-center items-center gap-5'>
        <div>
          <h1 className='italic  text-2xl '>
            "Elevate your coding experience with CodeWise - where creativity meets functionality."
          </h1>
        </div>
        <div className='flex flex-row gap-3 '>
          <button
            className='hover:bg-gray-800 hover:border-white hover:border-s active:border-none focus-visible:border-none p-4'
          >
            <Link to='/editor'>Get Started↗️</Link> 
          </button>
          <button
            className='hover:bg-gray-800 hover:border-white active:border-white focus-visible:border p-4'>
            <Link to='/about'>Learn More</Link> 
          </button>
        </div>
      </div>
      <div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
      >
        <div className='flex items-center'>
          <h1 className='italic  text-1xl w-96'> "Join a thriving developer community, share code snippets, and collaborate on open-source projects."</h1>
          <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
        </div>
      </div>
      <div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
      >
        <div className='flex items-center'>
          <h1 className='italic  text-1xl w-96'> "Access a wide range of programming languages and frameworks for seamless coding experience."</h1>
          <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
        </div>
      </div>
      <div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
      >
        <div className='flex items-center'>
          <h1 className='italic  text-1xl w-96'> "Access educational resources, tutorials, and coding challenges to enhance your skills."</h1>
          <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
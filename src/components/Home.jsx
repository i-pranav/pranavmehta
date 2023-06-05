import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Home = () => {
  return (
    <div name='home' className=' h-screen w-full bg-gradient-to-b from-black  to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
        <div className='flex flex-col justify-center h-full' >
          <h2 className=' text-4xl sm:text-7xl font-bold text-white'>Hey There!</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum modi cumque, sint itaque dolores, repellendus ipsum quod incidunt molestiae corporis non sunt, in tempore quia qui ad? Possimus, harum eaque!</p>
        </div>
        <button>
          Portfolio
          <span>
            <AiOutlineArrowRight/>
          </span>
        </button>  
      </div>
    </div>
    
  )
}

export default Home
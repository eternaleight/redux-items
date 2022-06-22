import React from 'react'
import '../App.scss'

const Earth = () => {
  return (
    <div className="App">
      <header className="bg-black App-header">
        <div className='relative flex flex-col'>
        <img
          className="bg-blue-500 relative left-[0px] rounded-full h-[400px] w-[400px] App-logo"
          alt="logooooooooooooo"
        />
        <div className="h-[100px] bg-teal-800 left-[70px] top-[190px] absolute rounded-[30px] w-[100px]"></div>
        <div className="h-[30px] bg-teal-800 top-[220px] left-[210px] absolute rounded-[8px] w-[100px] rotate-[80deg]"></div>
        <div className="h-[110px] bg-white top-[-190px] left-[-0px] absolute rounded-full w-[110px] animate-[pulse_11s_ease-in-out_infinite] rotate-[180deg]"></div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="underline App-link"
          href=""
          rel="noopener noreferrer"
        >
          Redux
        </a>
        </div>
      </header>
    </div>
  )
}

export default Earth

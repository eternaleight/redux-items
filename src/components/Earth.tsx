import React from 'react'
import '../App.scss'

const Earth = () => {
  return (
    <div className="App">
      <header className="bg-black App-header">
        <div className='relative flex flex-col'>
          <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black max-xs:bg-slate-700 max-xs:rounded-[2px] bg-blue-500 max-xs:left-[200px] max-xs:opacity-1 relative left-[0px] rounded-full h-[00px] max-xs:w-[20px] max-xs:h-[200px] w-[00px] App-logo"
></div>
        <img
          className="bg-blue-500 max-xs:left-[200px] max-xs:opacity-0 relative left-[0px] rounded-full h-[400px] max-xs:w-[20px] max-xs:h-[20px] w-[400px] App-logo"
          alt="logooooooooooooo"
        />
          <div className="h-[100px] bg-teal-800 max-xs:opacity-0 left-[70px] top-[190px] absolute rounded-[30px] w-[100px]"></div>
        <div className="h-[30px] bg-teal-800 max-xs:opacity-0 top-[220px] left-[210px] absolute rounded-[8px] w-[100px] rotate-[80deg]"></div>
        <div className="h-[110px] max-xs:h-[80px] max-xs:w-[80px] bg-white max-xs:left-[50px] max-xs:top-[-90px] top-[-190px] left-[-0px] absolute rounded-full w-[110px] animate-[pulse_11s_ease-in-out_infinite] rotate-[180deg]"></div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="z-[1] underline App-link"
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

import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center bg-gray-800 text-white p-4'>
        <p className='text-2xl'>BrainyLingo</p>
        <ul className="flex justify-between">
          <li className="p-2"><a href="/">Home</a></li>
          <li className="p-2"><a href="/leaderboard">Leaderboard</a></li>
          <li className="p-2"><a href="/dailyquiz">Daily Quiz</a></li>
          </ul>
          <button className='bg-linear-to-r from-[#875898] to-indigo-500 p-1 w-30 rounded-2xl'>Sign Out</button>
      </nav>
     
    </div>
  )
}

export default Header

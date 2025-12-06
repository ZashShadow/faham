import React from 'react'

const TopBar = ({className}) => {
  return (
    <div className={`  w-full flex justify-center items-center border-b border-[#C2C2C2] py-3 ${className}`}>
      <img src="../assets/fahamlogo.webp" alt="logo" />
    </div>
  )
}

export default TopBar
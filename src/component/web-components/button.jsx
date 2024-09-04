import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center hover:text-white border hover:border-[#ffc52e] border-[#111111] text-[#ffc52e] rounded-lg bg-[#111111] focus:ring-4 focus:ring-gray-100">
    {props.title}
  </button> 
  )
}

export default Button
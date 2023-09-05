import React from 'react'

const Button = ({label, iconURL,backgroundColor,textColor,borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:'bg-coral-red text-white border-coral-red'}${fullWidth && 'w-full'}`}>{label} {/*if we have background color passed in, then we set that as well as text and border else we just use the coral red one*/}
    {iconURL && <img src={iconURL} alt='right arrow' className='ml-2 rounded-full w-5 h-5'/>} {/*width and height are 5, this is simple prop passing from hero.jsx, if we are passing a value of icon then show the image, else no value of icon url passed dont show the image, it removes the broken image bug*/}
    </button>
  )
}

export default Button
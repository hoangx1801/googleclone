/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Avatar({ url, className }) {
  return <img className={`h-10 w-10 cursor-pointer 
  transition duration-150 transform 
  hover:scale-110 rounded-full ${className}`} 
  loading='lazy' src={url} alt="profile pic" />
}

export default Avatar;
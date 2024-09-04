'use client';
import Image from 'next/image';
import React from 'react'
const HeroBanner = () => {
  return (
    <div className="relative w-full min-h-[640px]  overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        objectFit="cover"
        muted 
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Image
            src="/lol-logo.webp"
            alt="Hero Logo"
            objectFit='contain'
            width={300}
            height={200}
        ></Image>
      </div>
    </div>
  )
}

export default HeroBanner
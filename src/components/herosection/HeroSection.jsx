import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';

const HeroSection = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full overflow-hidden">
      <Carousel>
        <img src="/carousel2.jpg" className='object-cover w-full' alt="Slide 1" />
        <img src="/carousel3.jpg" className='object-cover w-full' alt="Slide 2" />
        <img src="/carousel1.jpg" className='object-cover w-full' alt="Slide 3" />
      </Carousel>
    </div>
  );
};

export default HeroSection;

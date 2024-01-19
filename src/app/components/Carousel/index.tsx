'use client'

import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import ArrowRight from "../Images/ArrowRight";
import ArrowLeft from "../Images/ArrowLeft";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
        title: "STEP 1",
        icon: "/assets/images/evaldas-grizas-h8iMj9v71GA-unsplash.jpg",
        description: 'We put everything together'
    },
    {
        title: "STEP 2",
        icon: "/assets/images/zoe-schaeffer-H0iAXFekiWo-unsplash.jpg",
        description: 'We put everything together'
    },
    {
        title: "STEP 3",
        icon: "/assets/images/tom-jur--ekBHbwVoyI-unsplash.jpg",
        description: 'We put everything together'
    },
  ];
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <>
        <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item, _i) => {
          return <CarouselItem item={item} key={_i} width={"100%"} />;
        })}
      </div>

      
    </div>
    <div className="flex gap-x-3 justify-between items-center mt-4 pb-4">
        
        <div className="text-[12px] md:text-base">
            {items[activeIndex]?.title}
        </div>
        <div className=' text-[18px] md:text-3xl font-normal lora'>
            {items[activeIndex]?.description}
        </div>
        <div className="flex">
            <button
                className={`button-arrow ${activeIndex == 0? 'text-[#EDEDED]': ''}  md:w-auto`}
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
            <ArrowLeft />
            </button>
            <button
                className={`button-arrow ${activeIndex == 2? 'text-[#EDEDED]': ''}  md:w-auto`}
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
            <ArrowRight />
            </button>
        </div>
      </div>
    </>
    
  );
};
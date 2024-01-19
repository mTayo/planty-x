'use client'

import React, { useEffect, useRef, useState } from "react";
import { testimonialData } from "@/app/data";
import BoldArrowLeft from "../Images/BoldArrowLeft";
import BoldArrowRight from "../Images/BoldArrowRight";
export const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval: any = useRef();
    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };
    const startSlideTimer = () => {
        stopSlideTimer();
        slideInterval.current = setInterval(() => {
            setCurrentSlide((currentSlide: any) => (currentSlide < testimonialData.length - 1 ? currentSlide + 1 : 0));
        }, 3000);
    };
    const switchIndex = (index: number) => {
        if (testimonialData[index]) {
            startSlideTimer();
            setCurrentSlide(index);
        }
    };
    useEffect(() => {
        startSlideTimer();

        return () => stopSlideTimer();
    }, []);
  return (
    <>
    <div className="flex justify-between items-start gap-x-6 mt-4 pb-4">
        <div className="max-h-[400px] min-h-[290px] md:min-h-[350px] h-full">
            <div className="text-lg md:text-3xl font-medium lora md:text-justify">
                {testimonialData[currentSlide]?.epistle}
            </div>
            <div className="flex mt-6 md:mt-0 justify-between items-center md:block">
                <div>
                    <div className='mt-8 text-lg font-normal lora'>
                        {testimonialData[currentSlide]?.name}
                    </div>
                    <div className=' text-base font-light '>
                        {testimonialData[currentSlide]?.location}
                    </div>
                </div>
                <div>
                <div className="flex md:hidden mt-8">
                        <button
                        className={`button-arrow ${currentSlide == 0? 'text-[#EDEDED]': ''}`}
                        onClick={() => {
                            switchIndex(currentSlide - 1);
                        }}
                        >
                        <BoldArrowLeft />
                        </button>
                        <button
                            className={`button-arrow ${currentSlide + 1 === testimonialData?.length ? 'text-[#EDEDED]': ''}`}
                            onClick={() => {
                                switchIndex(currentSlide + 1);
                            }}
                        >
                        <BoldArrowRight />
                        </button>
        </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex">
            <button
            className={`button-arrow ${currentSlide == 0? 'text-[#EDEDED]': ''}`}
            onClick={() => {
                switchIndex(currentSlide - 1);
            }}
            >
            <BoldArrowLeft />
            </button>
            <button
                className={`button-arrow ${currentSlide + 1 === testimonialData?.length ? 'text-[#EDEDED]': ''}`}
                onClick={() => {
                    switchIndex(currentSlide + 1);
                }}
            >
            <BoldArrowRight />
            </button>
        </div>
      </div>
    </>
    
  );
};
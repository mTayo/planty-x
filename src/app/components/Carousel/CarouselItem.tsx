import React from "react";

export const CarouselItem = ({ item, width }: any) => {
  return (
    <div className="carousel-item max-h-[500px]" style={{ width: width }}>
      <div></div>
      <img className="carousel-img object-contain h-[244px] md:h-full w-full" src={item.icon} />
      {/* <div className="carousel-item-text">{item.description}</div> */}
    </div>
  );
};
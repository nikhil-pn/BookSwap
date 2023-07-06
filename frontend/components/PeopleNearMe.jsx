import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PeopleCard from "./PeopleCard";

const PeopleNearMe = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="mt-8 mb-[100px] md:mb-0">
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
        <PeopleCard></PeopleCard>
       
      </Carousel>
    </div>
  );
};

export default PeopleNearMe;

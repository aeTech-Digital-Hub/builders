

import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../layout/leftSide";
import assets from "../../assets/assests";
const PropertyCarousel = () => {
  const propertyData = [
    {
      image: assets.home.graceView,
      tagLeft: "Western",
      tagRight: "C18,000",
      title: "Grace-View Meadows",
      location: "18, Maccaulay way",
      city: "Northern",
      bedrooms: 3,
      sofas: 2,
      washrooms: 4,
      kitchens: 2,
      planImage: assets.home.plans,
      planLink: "#",
    },

    {
      image: assets.home.graceView,
      tagLeft: "Western",
      tagRight: "C18,000",
      title: "Grace-View Meadows",
      location: "18, Maccaulay way",
      city: "Northern",
      bedrooms: 3,
      sofas: 2,
      washrooms: 4,
      kitchens: 2,
      planImage: assets.home.plans,
      planLink: "#",
    },
  ];

  return (
    <div className="px-4 py-10 bg-gray-100">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        className="w-full"
      >
        {propertyData.map((item, index) => (
          <SwiperSlide key={index}>
            <PropertyCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertyCarousel;

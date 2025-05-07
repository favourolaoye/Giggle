import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This is a great product!",
      image: "/ceasar.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "I love using this service!",
      image: "/alex.jpg"
    },
    {
      id: 3,
      name: "Bob Johnson",
      feedback: "Highly recommend to everyone!",
      image: "/ben.jpg"
    },
    {
        id: 4,
        name: "Bob Johnson",
        feedback: "Highly recommend to everyone!",
        image: "/chris.jpg"
      },
      {
        id: 5,
        name: "Bob Johnson",
        feedback: "Highly recommend to everyone!",
        image: "/alex.jpg"
      }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} width={300}>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 italic mt-2">"{item.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    text: "Dr. Wasi Akhtar is an emerging teacher and physician of Unani medicine. I appreciate his clinical skills and patient care qualities. His prescriptions are based on very selective and fewer medicines. I wish him a successful and prosperous life.",
    name: "Prof. S. Shakir Jamil",
    designation: "Former DG CCRUM, Former Dean Faculty of Medicine (U), Jamia Hamdard, New Delhi",
    image: "/profile1.jpg",
  },
  {
    text: "I was admitted in Majeedia Unani Hospital in 2019 with Jaundice due to Hepatitis B. After a month of Unani treatment, my Jaundice was cured, and my Hepatitis B became negative. Unani medicine is beneficial for all kinds of liver diseases.",
    name: "Deepak Arya",
    designation: "Acharya",
    image: "/profile2.jpg",
  },
  {
    text: "I had severe migraines for years. After receiving treatment from Dr. Wasi Akhtar, my condition has significantly improved. Unani medicine is truly effective!",
    name: "Aisha Khan",
    designation: "Software Engineer",
    image: "/profile3.jpg",
  },
  {
    text: "I consulted Dr. Wasi Akhtar for my chronic joint pain. The prescribed Unani medicine worked wonders, and now I feel much better.",
    name: "Rahul Mehta",
    designation: "Entrepreneur",
    image: "/profile4.jpg",
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 testimonials per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Show 1 testimonial on smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <h2 className="title">WHAT OUR <span>CLIENT SAYS</span></h2>
        <p className="subtitle">Our Clients send us bunch of smiles with our services, and we love them</p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-wrapper">
              <div className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="profile-img" />
                  <div>
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-role">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

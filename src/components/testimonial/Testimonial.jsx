import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonialData } from '../../commons/navLink';
import Card from '../ui/Card';
import '../../styles/testimonials.scss';

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const {
    name, avatar, organization, review,
  } = testimonialData[index];

  const previousTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonialData.length - 1);
    }
  };
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonialData.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <h5 className="review-title">Review from Colleagues</h5>
      <div className="container testimonial-container">
        <Card className="testimonial">
          <div className="reviewer-avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className="reviewer-name">{name}</h5>
          <span>{organization}</span>
          <p className="reviewer-review">{`"${review}"`}</p>
        </Card>
        <div className="testimonial-btn-container">
          <button type="button" className="testimonial-btn" onClick={previousTestimonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button type="button" className="testimonial-btn" onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

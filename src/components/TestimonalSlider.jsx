import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service is amazing! Highly recommend to everyone.",
    role: "CEO, Example Co.",
  },
  {
    name: "Jane Smith",
    feedback: "Anav Business Solutions helped boost our sales by 30%.",
    role: "Marketing Head, ABC Ltd.",
  },
  {
    name: "Sam Wilson",
    feedback: "Professional, efficient, and excellent service!",
    role: "Manager, XYZ Pvt.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true, // Enables swipe for mouse as well
  });

  return (
    <div
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden"
      {...handlers}
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {testimonials[currentIndex].name}
        </h3>
        <p className="text-gray-600 italic my-4">
          "{testimonials[currentIndex].feedback}"
        </p>
        <small className="text-gray-500">
          {testimonials[currentIndex].role}
        </small>
      </div>
    </div>
  );
};

export default TestimonialSlider;

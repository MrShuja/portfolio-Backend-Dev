// Testimonial.jsx
import { testimonials } from "../data/comments.js";
import { useEffect, useRef } from "react";
import { animateBottomBorder } from "./animations/AnimateBottomBorder.js";

const Testimonial = () => {
    const headingRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) animateBottomBorder(headingRef.current);
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 320;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-background py-16 text-textPrimary min-h-[90vh]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 relative inline-block" ref={headingRef}>
          <span className="relative z-10">What People Say</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 px-4 py-4 snap-x scroll-smooth scrollbar-hide"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 snap-start border border-border animate-fadeInUp"
            >
              <p className="text-textPrimary text-sm italic mb-4 leading-relaxed">
                “{t.comment}”
              </p>
              <h4 className="font-semibold text-lg text-white">{t.name}</h4>
              <span className="text-sm text-accent font-medium">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

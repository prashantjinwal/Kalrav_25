import React, { useState, useEffect } from 'react';

const EventsCarousel = ({ previous_events = [] }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (previous_events.length === 0) return;
        setActiveSlide(0);
    }, [previous_events]);

    if (previous_events.length === 0) {
        return <p className="text-white text-center">No events available.</p>;
    }

    const handleSlideChange = (direction = 1) => {
        const totalSlides = previous_events.length;
        let nextSlide = activeSlide + direction;

        if (nextSlide >= totalSlides) nextSlide = 0;
        if (nextSlide < 0) nextSlide = totalSlides - 1;

        setActiveSlide(nextSlide);
    };

    return (
        <div className="carousel relative overflow-hidden px-4 py-8">
            {/* <h2 className="heading text-[2.9rem] font-medium font-protest text-center text-black p-2 rounded-lg mb-8">Previous Year Highlights</h2> */}
            <div className="relative">
                <div className="flex items-center gap-8 w-full">
                    <button className="left-slide" onClick={() => handleSlideChange(-1)}>
                        <img src="/images/icons/left-slide.png" alt="Previous Slide" className="w-14 h-auto" />
                    </button>

                    {previous_events.map((event, index) => (
                        <div key={index} className={`${index === activeSlide ? 'block' : 'hidden'} event-image w-full bg-black/80 rounded-lg overflow-hidden p-6`}>
                            <img src={event.image} alt={`Previous year event ${index + 1}`} className="object-cover w-full h-auto aspect-square rounded-lg" loading="lazy" />
                            <h2 className="text-lg text-white font-protest-guerrilla text-center mt-3">{event.name}</h2>
                        </div>
                    ))}

                    <button className="right-slide" onClick={() => handleSlideChange()}>
                        <img src="/images/icons/right-slide.png" alt="Next Slide" className="w-14 h-auto" />
                    </button>
                </div>

                <div className="mt-5 px-5 event-detail">
                    <div className="bg-black/60 rounded p-5 text-white">
                        <h3 className="text-xl font-semibold mb-2">{previous_events[activeSlide]?.name}</h3>
                        <p className="text-sm">{previous_events[activeSlide]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsCarousel;

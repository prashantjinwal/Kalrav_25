import React from 'react';
import SmoothCarousel from '../common/SmoothCarousel';

const events = [
  {
    event_img: 'https://imgs.search.brave.com/nbD5DIjpckPxZAvUkAYX5yRPXXqr5UphKWrz3BudmZs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzAyLzE5LzQy/LzM2MF9GXzgwMjE5/NDIzOF83cnhYSUc0/Y29wRm9STTlmNkY1/VXNRZkZmenlvNDBF/UC5qcGc',
    event: 'This event was amazing! Had a great time.',
    name: 'John Doe',
  },
  {
    event_img: 'https://imgs.search.brave.com/f4wACFviVrs9JilEdNseYYxXsaa5MX7nq9Gbqb1kjVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/Ni8wMy8xNi80OC9j/dW1iZXJsYW5kLXNs/aWRlci04MDM4MDU0/XzY0MC5qcGc',
    event: 'A wonderful experience, will definitely come again.',
    name: 'Jane Smith',
  },
  {
    event_img: 'https://imgs.search.brave.com/MHblyjBjvEvt3h6WYPIH_w_aJ8NKfqxXj3IWqwC9Tmw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hcnRzbGlkZXIz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2xpZGVyL2NhY2hl/L2EzOWU4OTExMGI5/MDAxMDlkMGNjZTM1/Y2YxZWZmMGE4L2lt/YWdlc2xpZGVyLWJh/Y2tncm91bmQzLmpw/Zw',
    event: 'Loved every moment of it!',
    name: 'Sam Wilson',
  },
];

const Card = ({ event }) => {
  return (
    <div
      className={`w-[18rem] h-[12rem] transition-all duration-500 overflow-hidden relative flex flex-col items-center justify-center`}
      style={{
        backgroundImage: `url(${event.event_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '1.7rem',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <p className="text-white font-dm-sans">{event.event}</p>
        <p className="text-white font-dm-sans font-semibold mt-5">- {event.name}</p>
      </div>
    </div>
  );
};

export default function PastSocietyEvents() {
  return (
    <div className="events">
      <SmoothCarousel
        cards={events.map((event, index) => () => <Card key={index} event={event} />)}
      />
    </div>
  );
}

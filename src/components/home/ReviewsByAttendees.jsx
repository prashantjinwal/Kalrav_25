import React from 'react';
import SmoothCarousel from '../common/SmoothCarousel';


const reviews = [
  {
    event_img: 'images/temp_review/img1.png',
    review: '“Kalrav 2024 was greattttttt!!!!! Can’t wait to comeback again next year”',
    name: 'Naman',
  },
  {
    event_img: 'images/temp_review/img2.png',
    review: '“One in a year experience of college fest at kalrav!!! So glad I came”',
    name: 'Riya',
  },
  {
    event_img: 'images/temp_review/img3.png',
    review: "Can't expect anything more from a du event, everything was just astonishing!!!!",
    name: 'Keerti',
  },
  {
    event_img: 'images/temp_review/img4.png',
    review: 'Expect the unexpected and you’ll never be disappointed is what they said but you can expect a lot from kalrav and your expectations will still be fulfilled at dduc',
    name: 'Anuj',
  },
  {
    event_img: 'images/temp_review/img5.png',
    review: '“Hell of a concert!!! Kudos to the team of kalrav”',
    name: 'Ananya',
  },
];

const Card = ({ review }) => {
  return (
    <div
      className={` aspect-[8/5] transition-all duration-500 overflow-hidden relative flex flex-col items-center justify-center`}
      style={{
        backgroundImage: `url(${review.event_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '1.8rem',
      }}
    >
      <div className="absolute  inset-0  bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center p-6">
        <p className="text-white text-sm font-dm-sans">{review.review}</p>
        <p className="text-white font-dm-sans font-semibold mt-2">- {review.name}</p>
      </div>
    </div>
  );
};

export default function ReviewsByAttendees() {
  return (
    <div className="reviews-by-attendees">
      <SmoothCarousel
        cards={reviews.map((review, index) => () => <Card key={index} review={review} />)}
      />
      
    </div>
  );
}

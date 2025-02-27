import React from 'react';
import SmoothCarousel from '../common/SmoothCarousel';

const events = [
  {

    image: 'images/past_society_events/westarn-dance.png',
    name: 'The Western Dance Society',
    desc: "1. Pasodoble - the western group dance competition 100+ teams participation, showcase of various western styles afro jazz whacking locking house hiphop ect.",
  },
  {

    image: 'images/past_society_events/enactus-dduc.png',
    name: 'Enactus DDUC',
    desc: 'Our stalls are a collaborative effort between various Enactus teams from different colleges, united by a shared mission to promote sustainability and empower marginalized communities. We sell eco-friendly and handcrafted products, providing a platform for artisans and small entrepreneurs to gain financial independence. Every purchase directly supports social and environmental causes, making a real difference in the lives of those in need while encouraging responsible consumption.',
  },
  {

    image: 'images/past_society_events/polaroid.png',
    name: 'Polaroid',
    desc: 'Spectrum, hosted by Polaroid, is a key event of Kalrav, featuring a photography exhibition and several related competitions. It showcases the best works of Polaroid members while inviting students from various colleges to demonstrate their creativity in visual storytelling. Spectrum provides a platform for emerging photographers and filmmakers to push creative boundaries and engage with a wider audience.',
  },
  {
    image: 'images/past_society_events/kavi-sammelan.png',
    name: 'Kavi Sammelan',
    desc: 'दीन दयाल उपाध्याय कॉलेज के साहित्यिक संघ क़लमकार द्वारा आयोजित कवि सम्मेलन - २४ अत्यंत सफल रहा, जिसमें छात्रों की उल्लेखनीय भागीदारी देखने को मिली। इस कार्यक्रम में प्रतिष्ठित कवियों-डॉ. अशोक बत्रा जी, सुदीप भोला जी, अर्जुन सिसोदिया जी, प्रियंका राय जी, और रोहित चौधरी जी की उपस्थिति ने समां बांध दिया। उनके काव्य ज्ञान और सृजनात्मकता से श्रोतागण अभिभूत हो गए। कवि सम्मेलन के उस महत्वपूर्ण प्रसंग की संक्षिप्त झलक आपके समक्ष प्रस्तुत है।',
  },
  {
    image: 'images/past_society_events/kavi-leihao.png',
    name: 'Kavi Leihao- The NorthEast Cell and EBSB',
    desc: 'The Northeast Cell & EBSB performed a group cultural dance in Kalravlast year that highlighted the heritage of the northeast. The name of our event under Kalrav was "Leihao"',
  },
  {
    image: 'images/past_society_events/yavanika.png',
    name: 'Yavanika',
    desc: "Our annual fest  Mirage consist of three major events:\n\nStreet Sangram: Street Play Competition\n\nIstoria: Mono-Acting Competition\n\nPrastuti: Stage Play Competition",
  },
];

const Card = ({ event }) => {
  return (
    <div className='rounded-3xl bg-white bg-opacity-20 backdrop:blur-lg backdrop:bg-black overflow-hidden ' >
      <div className="event-image rounded-3xl w-full overflow-hidden"><img src={event.image} className='w-full aspect-[5/4] object-cover' alt="" /></div>
      <div className="px-5 pb-4 ">
        <h2 className="text-white font-dm-sans text-center p-2" translate='no'>{event.name}</h2>
        <hr className='py-1' />
        <p className="text-white font-dm-sans text-xs  " translate='no'>{event.desc}</p>
      </div>
    </div>);
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

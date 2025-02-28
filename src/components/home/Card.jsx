// Card component
const Card = ({ title, content, content_bg_image, img_op }) => (
    <div className="card w-full h-full bg-[url('/images/home/cardBg.png')] bg-no-repeat bg-cover bg-center p-4 rounded-3xl relative">

      <img
        src={content_bg_image}
        alt="Card background"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain"
        style={{ opacity: img_op / 100 }}
      />

      <div className="p-4 corner-dots">
        <h1 className="text-center title font-protest font-medium text-[2.5rem] mb-2  ">{title}</h1>
        <div className="content w-full">
          <p className="text-left text-xs font-dm-sans pb-5">{content}</p>
        </div>
      </div>
    </div>
  );


  export default Card;
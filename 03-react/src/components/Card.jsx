const Card = ({ img, count, desc, btn }) => {
  return (
    <div>
      <div className="relative h-[600px] w-[270px] rounded-xl overflow-hidden shadow-xl">
        {/* FULL BACKGROUND IMAGE */}
        <img
          src={img}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        {/* NUMBER BADGE */}
        <div className="absolute top-3 left-3 h-10 w-10 bg-black/70 text-white rounded-full flex items-center justify-center font-bold">
          {count}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm text-white space-y-3">
          <p className="text-sm">{desc}</p>

          <button className="w-full h-10 bg-lime-500 text-black font-semibold rounded-xl">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

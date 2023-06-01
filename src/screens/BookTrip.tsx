import Image from "next/image";
import japanMapImage from "../assets/map.webp";

const BookTrip = () => {
  return (
    <section
      id="booktrip"
      className="w-full py-16 px-8 md:px-24 lg:px-40 min-h-screen relative space-y-14 text-white flex flex-col items-center justify-center"
      style={{
        background: "url(/book_bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "45% 75%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 !mt-0"></div>
      <Image
        src={japanMapImage}
        className="invert lg:w-1/4 w-60"
        alt="japan map outline"
      />
      <p className="lg:text-2xl text-xl uppercase font-medium z-0">
        Explore the wonderfull of
      </p>
      <p className="lg:text-7xl text-5xl uppercase font-semibold z-0">Japan</p>
      <button
        onClick={() => alert("This is a demo website, you DUMMY!")}
        className="text-black bg-white rounded-full py-5 px-10 lg:text-lg z-0 hover:scale-105 active:scale-95 transition"
      >
        Book Trip
      </button>
    </section>
  );
};

export default BookTrip;

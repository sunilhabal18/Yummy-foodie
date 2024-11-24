import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    setInterval(() => {
      handlePlus();
    }, 3000);

    return () => clearInterval(setInterval);
  }, [slider]);

  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  return (
    <>
      <div className=" w-[90%] mx-auto h-[80vh] my-5 relative  bg-slate-900 ">
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "none" : "hidden"}`}>
            <img
              src={item.url}
              alt=""
              className="object-cover  rounded-2xl h-[80vh] w-full sm:object-cover"
            />
          </div>
        ))}

        <div className=" absolute top-[86%] right-[4%] text-white text-xl bg-green-500 font-bold p-3 rounded-2xl">
          Let food be thy medicine and medicine be thy food.
        </div>
      </div>
      <div className=" flex justify-between w-full px-5 absolute top-[50%] text-white">
        <FaChevronLeft onClick={handlePlus} className=" cursor-pointer" />{" "}
        <FaChevronRight
          onClick={() =>
            setSlider(slider === imgData.length - 1 ? 0 : slider + 1)
          }
          className=" cursor-pointer"
        />
      </div>
    </>
  );
};

export default Hero;

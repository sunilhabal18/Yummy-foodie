const Delivery = () => {
  return (
    <div>
      <div>
        <p className="text-center font-extrabold text-3xl hover:text-[#fa8231] cursor-pointer">
          Quick Delivery App
        </p>
      </div>
      <div className=" grid grid-cols-2 w-[70%] mx-auto my-5 relative">
        <img
          src={
            "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off"
          }
          alt=""
        />
        <div className=" absolute top-[40%] left-[55%]">
          <p className="text-center  font-extrabold text-3xl text-green-600 cursor-pointer">
            Get the App
          </p>
          <h2 className="text-center a font-extrabold text-3xl text-slate-700 cursor-pointer">
            Limitless Convenience on Demand.
          </h2>
          <div>
            <button className="bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fa8231] font-semibold float-end">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

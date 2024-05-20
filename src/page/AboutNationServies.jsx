import { GiRotaryPhone } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const AboutNationServies = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 bg-white ">
        <div className=" h-full w-full">
          <img
            className=" h-full"
            src="https://img.freepik.com/free-photo/confident-lady-boss-conducting-staff-meeting_1262-7193.jpg?t=st=1714534805~exp=1714538405~hmac=afd543f2991d59c4ab389590ce467f1846cafe9b2bcfb35eb4c416ee4b0a2d02&w=826"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 pl-[50px] py-[120px]">
          <div className=" col-span-2">
            <h2 className="text-[36px] mb-5 leading-[1.2em] font-sans font-bold">
              Who we are <br /> to Serve the nation
            </h2>
            <p className="text-[16px] mb-4 leading-[1.625em] text-[#777777] font-sans font-light">
              inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
              especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
              reproach.
            </p>
          </div>
          <div className=" col-span-1 mt-[10px]">
            <IoDiamondOutline className=" text-[30px] text-[#f6214b]" />
            <h2 className=" my-5 text-[18px] font-bold leading-[1.2em] font-sans">Expert Services</h2>
            <p className=" mb-4 text-[16px] text-[#777777] font-light leading-[1.625em] font-sans">
              Usage of the Internet is becoming more common due to rapid advancement of technology.
            </p>
          </div>
          <div className=" col-span-1 mt-[10px]">
            <GiRotaryPhone className=" text-[30px] text-[#f6214b]" />
            <h2 className=" my-5 text-[18px] font-bold leading-[1.2em] font-sans">Great Support</h2>
            <p className=" mb-4 text-[16px] text-[#777777] font-light leading-[1.625em] font-sans">
              Usage of the Internet is becoming more common due to rapid advancement of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNationServies;

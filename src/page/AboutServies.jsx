import { CgRemote } from "react-icons/cg";
import { IoAlarmOutline, IoSunnyOutline } from "react-icons/io5";

const AboutServies = () => {
  return (
    <div className=" py-[120px] mx-[52px] mt-3">
      <div className=" grid grid-cols-3">
        <div className=" px-[15px] flex align-top group">
          <div className="">
            <div className=" p-5 text-2xl mr-[30px] rounded bg-white group-hover:bg-red-600 text-black group-hover:text-white">
              <IoSunnyOutline />
            </div>
          </div>

          <div>
            <h2 className=" my-5 text-[18px] font-bold font-sans">Stunning Visuals</h2>
            <p className=" mb-4 text-[16px] text-[#777777] font-light leading-[1.625em] font-sans">
              Here, I focus on a range of items and features that we use in life without giving them a second thought
              such as Coca Cola.
            </p>
          </div>
        </div>

        <div className=" px-[15px] flex align-top group">
          <div>
            <div className=" p-5 text-2xl mr-[30px] rounded bg-white group-hover:bg-red-600 text-black group-hover:text-white">
              <CgRemote />
            </div>
          </div>

          <div>
            <h2 className=" my-5 text-[18px] font-bold font-sans">Clean Code</h2>
            <p className=" mb-4 text-[16px] text-[#777777] font-light leading-[1.625em] font-sans">
              Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by
              uninstall utility.
            </p>
          </div>
        </div>

        <div className=" px-[15px] flex align-top group">
          <div>
            <div className=" p-5 text-2xl mr-[30px] rounded bg-white group-hover:bg-red-600 text-black group-hover:text-white">
              <IoAlarmOutline />
            </div>
          </div>

          <div>
            <h2 className=" my-5 text-[18px] font-bold font-sans">Punctuality</h2>
            <p className=" mb-4 text-[16px] text[#777777] font-light leading-[1.625em] font-sans ">
              If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it
              has that nice big screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServies;

import { Link } from "react-router-dom";
import EditorsPick from "./EditorsPick";
import LatestNews from "./LatestNews";
import MostPopular from "./MostPopular";
import Newsletter from "./Newsletter";
import PopularNews from "./PopularNews";
import RelaventStories from "./RelaventStories";
import { FaArrowRightLong } from "react-icons/fa6";

const Archive = () => {
  return (
    <div>
      <div className=" text-center text-white p-16 bg-red-600 md:mx-[52px] mx-[15px] mt-3 ">
        <h2 className=" text-5xl mb-5 align-middle">Archive Posts</h2>
        <div className=" text-center text-sm flex align-middle justify-center mb-4">
          <Link>Home</Link>
          <FaArrowRightLong className=" ml-2 mt-[6px]" />
          <Link className=" ml-2">Archive Posts</Link>
        </div>
      </div>
      <div>
        <h3 className=" bg-white text-sm font-medium md:mx-[52px] mx-[15px] mt-3 py-3 px-4">
          <span className=" text-sm text-orange-600">Breaking News: </span>
          <Link to="/">Astronomy Binoculars A Great Alternative</Link>
        </h3>
      </div>



      
      <div className=" grid md:grid-flow-col md:grid-cols-3 md:gap-8 md:mx-[52px] mx-[15px] mt-3 py-3">
        <div className=" md:col-span-2 w-full">
          <LatestNews />
          <div className=" h-[1px] my-[30px] w-full bg-white"></div>
          <PopularNews />
          <div className=" h-[0px] my-[30px] w-full bg-white"></div>
          <RelaventStories />
        </div>
        <div className=" md:col-span-1 bg-white">
          <EditorsPick />
          <Newsletter />
          <MostPopular />
        </div>
      </div>
    </div>
  );
};

export default Archive;

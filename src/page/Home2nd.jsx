import EditorsPick from "./EditorsPick";
import LatestNews from "./LatestNews";
import MostPopular from "./MostPopular";
import Newsletter from "./Newsletter";
import PopularNews from "./PopularNews";
import RelaventStories from "./RelaventStories";

const Home2nd = () => {
  return (
    <div className=" grid  md:grid-cols-3 grid-cols-1 max-sm:grid-flow-row gap-8 mt-3 py-3">
      <div className=" md:col-span-2 col-span-1 max-sm: w-full">
        <LatestNews />
        <div className=" h-[1px] my-[30px] w-full bg-white"></div>
        <PopularNews />
        <div className=" h-[0px] my-[30px] w-full bg-white"></div>
        <RelaventStories />
      </div>
      <div className=" col-span-1  bg-white">
        <EditorsPick />
        <Newsletter />
        <MostPopular />
      </div>
    </div>
  );
};

export default Home2nd;

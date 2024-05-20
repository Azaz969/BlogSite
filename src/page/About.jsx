import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AboutServies from "./AboutServies";
import AboutNationServies from "./AboutNationServies";
import AboutGoal from "./AboutGoal";

const About = () => {
  return (
    <div>
      <div className=" text-center text-white p-16 bg-red-600 mx-[52px] mt-3 ">
        <h2 className=" text-5xl mb-5 align-middle">About Us</h2>
        <div className=" text-center text-sm flex align-middle justify-center mb-4">
          <Link>Home</Link>
          <FaArrowRightLong className=" ml-2 mt-[6px]" />
          <Link className=" ml-2">About Us</Link>
        </div>
      </div>
      <AboutServies />
      <AboutNationServies />
      <AboutGoal/>
    </div>
  );
};

export default About;

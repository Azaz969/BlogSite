import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home2nd from "./Home2nd";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto h-[80vh] grid grid-flow-col grid-cols-3 gap-3 overflow-hidden">
        <div className="col-span-2 overflow-hidden">
          <div
            className="  bg-cover relative bg-center h-full group "
            // style={{ backgroundImage: "url('https://preview.colorlib.com/theme/magazine/img/top-post1.jpg')" }}
          >
            <div className=" absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
              <img className=" w-full " src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg" alt="" />
            </div>
            <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
              <div className=" z-10 grid grid-flow-row gap-4 absolute bottom-[30px] left-[40px]">
                <Link to="/" className=" p-2 w-36 text-center bg-red-600">
                  Food Habit
                </Link>
                <Link to="/" className=" text-2xl font-bold inset-0 font-[poppins]">
                  A Discount Toner Cartridge Is Better Than Ever.
                </Link>
                <div className="grid grid-flow-col">
                  <div>
                    <CgProfile /> Make wiens
                  </div>
                  <div>
                    <FaCalendarAlt /> 28-April-2024
                  </div>
                  <div>
                    <FaRegComment /> o6 Comment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full col-span-1 grid grid-flow-row gap-3">
          <div className="grid-rows-1  overflow-hidden">
            <div
              className="bg-cover   relative bg-center h-full group"
              // style={{ backgroundImage: "url('https://preview.colorlib.com/theme/magazine/img/top-post2.jpg')" }}
            >
              <div className=" absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
                <img className=" " src="https://preview.colorlib.com/theme/magazine/img/top-post2.jpg" alt="" />
              </div>
              <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
                <div className=" z-10 grid grid-flow-row gap-[0px] absolute bottom-[12px] left-[12px]">
                  <Link to="/" className=" py-1 px-3 w-28 text-center bg-red-600">
                    Food Habit
                  </Link>
                  <Link to="/" className=" text-lg font-bold inset-0 font-[poppins]">
                    A Discount Toner Cartridge Is Better Than Ever.
                  </Link>
                  <div className=" flex flex-row gap-[1px] text-xs font-normal">
                    <div className="flex justify-center align-middle text-center">
                      <CgProfile className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">Make wiens</p>
                    </div>
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaCalendarAlt className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">28-April-2024</p>
                    </div>
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaRegComment className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">o6 Comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-rows-1 overflow-hidden">
            <div className="bg-cover relative bg-center h-full group">
              <div className=" absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
                <img className=" " src="https://preview.colorlib.com/theme/magazine/img/top-post3.jpg" alt="" />
              </div>
              <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
                <div className=" z-10 grid grid-flow-row gap-[0px] absolute bottom-[12px] left-[12px]">
                  <Link to="/" className=" py-1 px-3 w-28 text-center bg-red-600">
                    Food Habit
                  </Link>
                  <Link to="/" className=" text-lg font-bold inset-0 font-[poppins]">
                    A Discount Toner Cartridge Is Better Than Ever.
                  </Link>
                  <div className=" flex flex-row gap-[1px] text-xs font-normal">
                    <div className="flex justify-center align-middle text-center">
                      <CgProfile className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">Make wiens</p>
                    </div>
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaCalendarAlt className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">28-April-2024</p>
                    </div>
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaRegComment className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">o6 Comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className=" bg-white text-sm font-medium mx-[52px] mt-3 py-3 px-4">
          <span className=" text-sm text-orange-600">Breaking News: </span>
          <Link to="/">Astronomy Binoculars A Great Alternative</Link>
        </h3>
      </div>
      <div>
        <Home2nd />
      </div>
    </div>
  );
};

export default Home;

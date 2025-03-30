import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home2nd from "./Home2nd";

const Home = () => {
  return (
    <div className="md:mx-[52px] mx-[15px]">
      <div className="  md:h-[80vh] flex-shrink-0 h-auto grid md:grid-cols-3  grid-cols-1 max-sm:grid-flow-row md:gap-3 gap-y-3  overflow-hidden">
        <div className="col-span-2 max-sm: w-full   overflow-hidden">
          <div
            className="relative  h-full group "
            // style={{ backgroundImage: "url('https://preview.colorlib.com/theme/magazine/img/top-post1.jpg')" }}
          >
            <div className=" md:absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
              <img
                className="md:w-full md:flex-shrink-0 h-full block"
                src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
                alt=""
              />
            </div>
            <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
              <div className=" z-10 grid grid-flow-row md:gap-4 absolute md:bottom-[30px] bottom-3 md:left-[40px] left-3">
                <Link to="/" className=" md:p-2 p-1 md:w-36 w-32 text-center bg-red-600">
                  Food Habit
                </Link>
                <Link to="/" className=" md:text-2xl text-[14px] my-[5px]  font-bold inset-0 font-[poppins]">
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

        {/* //---------------------// */}
        <div className=" h-full w-full col-span-1 max-sm:  grid grid-flow-row gap-3   ">
          <div className="grid-rows-1 h-full w-full  overflow-hidden">
            <div
              className="bg-cover   relative bg-center h-full group"
              // style={{ backgroundImage: "url('https://preview.colorlib.com/theme/magazine/img/top-post2.jpg')" }}
            >
              <div className=" md:absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
                <img className="w-full" src="https://preview.colorlib.com/theme/magazine/img/top-post2.jpg" alt="" />
              </div>
              <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
                <div className=" z-10 grid grid-flow-row gap-[0px] absolute bottom-[12px] left-[12px]">
                  <Link to="/" className=" py-1 px-3 w-28 text-center bg-red-600">
                    Food Habit
                  </Link>
                  <Link to="/" className=" md:text-lg text-[14px] font-bold my-2 inset-0 font-[poppins]">
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

          <div className="grid-rows-1 h-full w-full  overflow-hidden">
            <div className="bg-cover relative bg-center h-full group">
              <div className=" md:absolute inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
                <img className="w-full" src="https://preview.colorlib.com/theme/magazine/img/top-post3.jpg" alt="" />
              </div>
              <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
                <div className=" z-10 grid grid-flow-row gap-[0px] absolute bottom-[12px] left-[12px]">
                  <Link to="/" className=" py-1 px-3 w-28 text-center bg-red-600">
                    Food Habit
                  </Link>
                  <Link to="/" className=" md:text-lg text-[14px] font-bold my-2 inset-0 font-[poppins]">
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
        <h3 className=" bg-white text-sm font-medium  mt-3 py-3 px-4">
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

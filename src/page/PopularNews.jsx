import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularNews = () => {
  const popularNews = [
    {
      category: "Travel",
      id: "1",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/f1.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
    {
      category: "Travel",
      id: "2",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/f2.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
    {
      category: "Travel",
      id: "3",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/f3.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
  ];
  const [first, ...rest]= popularNews
  console.log({first, rest})

  return (
    <div className=" bg-white p-5">
      <h3 className="bg-black text-sm mb-5 font-bold text-slate-50 py-[10px] px-6 ">Popular News</h3>

      <div className="">
        <div className="   relative bg-center h-full group overflow-hidden ">
          <div className=" inset-0 bg-cover w-full h-full brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110">
            <img
              className="w-full h-48 md:h-full "
              src={first.image}
              alt=""
            />
          </div>
          <div className="h-full z-10 bg-transparent  text-slate-50 bg-cover bg-center ">
            <div className=" z-10 grid grid-flow-row md:gap-4 absolute md:bottom-[30px] bottom-3 md:left-[40px] left-3">
              <Link to="/" className=" md:p-2 p-1 md:w-36 w-32 text-center bg-red-600">
                Food Habit
              </Link>
              <Link to="/" className=" md:text-2xl text-[16px] md:my-[5px]   font-bold inset-0 font-[poppins]">
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

      <div>
        <div className=" grid md:grid-cols-2 gap-5 ">
          {rest.map((x) => (
            // <div key={x?.id} className={i === 0 ? "col-span-2" : "col-span-1"}></div>
            <div key={x?.id}>
              <div className=" mt-[25px] overflow-hidden">
                <div className="bg-cover  relative bg-center h-full group ">
                  <div className=" inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110 ">
                    <img className=" w-full " src={x?.image} alt="" />
                  </div>
                  <div>
                    <Link className=" py-1 px-3 w-28 text-center text-slate-50 bg-red-500 absolute left-3 bottom-3 z-10">
                      {x?.category}
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col justify-center align-middle col-span-3 py-[15px]">
                <h2 className=" text-lg max-w-[300px] font-semibold">{x?.heading}</h2>

                <div className=" flex flex-row my-[10px] text-gray-400  text-xs font-normal">
                  <div className="flex justify-center align-middle text-center">
                    <CgProfile className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">Make wiens</p>
                  </div>
                  <div className="flex justify-center ml-2 align-middle text-center">
                    <FaCalendarAlt className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">28-April-2024</p>
                  </div>
                  <div className="flex justify-center ml-2 align-middle text-center">
                    <FaRegComment className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">06 </p>
                  </div>
                </div>

                <p className=" text-sm text-justify text-gray-400">{x?.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;

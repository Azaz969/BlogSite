import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const latestNews = [
    {
      category: "Lifestyle",
      id: "1",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/l1.jpg",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      category: "Science",
      id: "2",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/l2.jpg",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      category: "Travel",
      id: "3",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/l3.jpg",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      category: "Fashion",
      id: "4",
      heading: "A Discount Toner Cartridge Is Better Than Ever.",
      image: "https://preview.colorlib.com/theme/magazine/img/l4.jpg",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className=" bg-white p-5">
      <h3 className="bg-black text-sm font-bold text-slate-50 py-[10px] px-6 ">Latest News</h3>
      {latestNews.map((x) => (
        <div key={x?.id}>
          <div className="grid grid-cols-5 m-5 group ">
            <div className="col-span-2 m-[5px] overflow-hidden">
              <div className="bg-cover  relative bg-center h-full  ">
                <div className=" inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110 ">
                  <img className=" " src={x?.image} alt="" />
                </div>
                <div>
                  <Link className=" py-1 px-3 w-28 text-center text-slate-50 bg-red-500 absolute left-3 bottom-3 z-10">
                    {x.category}
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center align-middle col-span-3 p-[15px]">
              <h2 className=" text-lg max-w-[300px] font-semibold">{x?.heading}</h2>

              <div className=" flex flex-row my-[10px] text-gray-400  text-xs font-normal">
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

              <p className=" text-sm text-justify text-gray-400">{x?.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;

import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditorsPick = () => {
  const editorsPick = [
    {
      category: "Travel",
      id: "1",
      heading: "Help Finding Information Online is so easy",
      image: "https://preview.colorlib.com/theme/magazine/img/e2.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
    {
      category: "Travel",
      id: "2",
      heading: "Compatible Inkjet Cartr world famous",
      image: "https://preview.colorlib.com/theme/magazine/img/e3.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
    {
      category: "Travel",
      id: "3",
      heading: "5 Tips For Offshore Soft Development",
      image: "https://preview.colorlib.com/theme/magazine/img/e4.jpg",
      details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
    },
  ];

  return (
    <div className=" bg-white p-5">
      <h3 className="bg-black text-sm font-bold text-slate-50 py-[10px] px-6 ">Editor’s Pick</h3>

      <div className="  ">
        <div>
          <div className=" mt-[25px] overflow-hidden">
            <div className="bg-cover  relative bg-center h-full group ">
              <div className=" inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110 ">
                <img className=" w-full " src="https://preview.colorlib.com/theme/magazine/img/e1.jpg" alt="" />
              </div>
              <div>
                <Link className=" py-1 px-3 w-28 text-center text-slate-50 bg-red-500 absolute left-3 bottom-3 z-10">
                  Travel
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center align-middle col-span-3 py-[15px]">
            <h2 className=" text-lg max-w-[300px] font-semibold">A Discount Toner Cartridge Is Better Than Ever.</h2>

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

            <p className=" text-sm text-justify text-gray-400">
              Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        {editorsPick.map((x) => (
          <div key={x?.id}>
            <div className=" h-[1px] my-[3px] w-full bg-gray-400"></div>
            <div className=" py-[15px] grid grid-cols-3">
              <div className=" col-span-1 m-[5px] overflow-hidden">
                <div className="bg-cover  relative bg-center h-full group ">
                  <div className=" ">
                    <img className=" " src={x?.image} alt="" />
                  </div>
                </div>
              </div>
              <div className=" pl-5 col-span-2">
                <h2 className=" text-sm font-[sans-serif] font-semibold">{x?.heading}</h2>
                <div>
                  <div className=" flex flex-row my-[10px] text-gray-400  text-xs font-normal">
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaCalendarAlt className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">28-April-2024</p>
                    </div>
                    <div className="flex justify-center ml-2 align-middle text-center">
                      <FaRegComment className=" h-4 w-4 mr-[2px]" /> <p className=" ml-[2px]">06 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;

import axios from "axios";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [latest, setLatest] = useState([]);
    const fetchData = async () => {
      const { data } = await axios.get("/relaventStories?_sort=-createdAt&_limit=4");
      setLatest(data);
      // const findData = data.find((item) => item.id === "1");
      // console.log({ findData });
    };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className=" bg-white p-5">
      <h3 className="bg-black text-sm font-bold text-slate-50 py-[10px] px-6 ">Latest News</h3>
      {latest.map((x) => (
        <div key={x?.id}>
          <div className="grid md:grid-cols-5 md:m-5 group ">
            <div className="md:col-span-2 col-span-5 m-[5px] overflow-hidden">
              <div className="bg-cover  relative bg-center h-full  ">
                <div className=" inset-0 brightness-75 group-hover:brightness-100 transition-transform duration-300 transform scale-100 group-hover:scale-110 ">
                  <img className=" w-full" src={x?.image} alt="" />
                </div>
                <div>
                  <Link className=" py-1 px-3 w-28 text-center text-slate-50 bg-red-500 absolute left-3 bottom-3 z-10">
                    {x.category}
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center align-middle col-span-3 p-[15px]">
              <h2 className=" text-lg max-w-full md:max-w-[300px] font-semibold">{x?.heading}</h2>

              <ul className=" flex flex-row my-[10px] text-gray-400 list-none  text-xs font-normal">
                <li className="flex justify-center align-middle text-center">
                  <CgProfile className=" h-4 w-4 mr-[2px]" /> Make wiens
                </li>
                <li className="flex justify-center ml-2 align-middle text-center">
                  <FaCalendarAlt className=" h-4 w-4 mr-[2px]" /> 28-April-2024
                </li>
                <li className="flex justify-center ml-2 align-middle text-center">
                  <FaRegComment className=" h-4 w-4 mr-[2px]" /> o6 Comment
                </li>
              </ul>

              <p className=" text-sm text-justify text-gray-400">{x?.shortDetails}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const MostPopular = () => {
  // const mostPopular = [
  //   {
  //     category: "Travel",
  //     id: "1",
  //     heading: "Help Finding Information Online is so easy",
  //     image: "https://preview.colorlib.com/theme/magazine/img/m1.jpg",
  //     details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
  //   },
  //   {
  //     category: "Travel",
  //     id: "2",
  //     heading: "Compatible Inkjet Cartr world famous",
  //     image: "https://preview.colorlib.com/theme/magazine/img/m2.jpg",
  //     details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
  //   },
  //   {
  //     category: "Travel",
  //     id: "3",
  //     heading: "5 Tips For Offshore Soft Development",
  //     image: "https://preview.colorlib.com/theme/magazine/img/m3.jpg",
  //     details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
  //   },
  //   {
  //     category: "Travel",
  //     id: "4",
  //     heading: "5 Tips For Offshore Soft Development",
  //     image: "https://preview.colorlib.com/theme/magazine/img/m4.jpg",
  //     details: "Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.",
  //   },
  // ];

  const [mostPopular, setMostPopular] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/json/mostPopular.json");
    setMostPopular(data);
    // const findData = data.find((item) => item.id === "1");
    // console.log({ findData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" bg-white pt-0 p-5">
      <h3 className="bg-black text-sm font-bold text-slate-50 mb-5 py-[10px] px-6 ">Most Popular</h3>
      <div>
        {mostPopular.map((x, i) => (
          <div
            key={x?.id}
            className={i === 3 ? " border-b-[0px] border-solid" : " border-b border-solid border-gray-400"}
          >
            <Link to={`/popular/${x.id}`}>
              <div className=" py-[15px] grid grid-cols-3">
                <div className=" col-span-1 m-[5px] overflow-hidden">
                  <div className="bg-cover  relative bg-center h-full group ">
                    <div className=" ">
                      <img className=" " src={x?.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" md:pl-5 col-span-2">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;

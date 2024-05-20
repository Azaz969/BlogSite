import Search from "antd/es/input/Search";
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Newsletter = () => {
  return (
    <div className=" bg-white p-5">
      <h3 className="bg-black text-sm font-bold text-slate-50 py-[10px] px-6 ">Newsletter</h3>
      <p className=" text-sm font-light font-[sans-serif] text-justify text-gray-400 my-5">
        Here, I focus on a range of items andfeatures that we use in life without giving them a second thought.
      </p>

      <Search placeholder="Email Address" allowClear enterButton="submit" size="large" onSearch={onSearch} />
      <p className=" text-sm font-light font-[sans-serif] text-justify text-gray-400 my-5">You can unsubscribe us at any time</p>
    </div>
  );
};

export default Newsletter;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black me-0 mt-2 px-10 py-28">
      <div className="flex justify-between align-middle ;">
        <div className=" px-4">
          <h3 className=" text-slate-50 text-xl font-bold my-4">Top Products</h3>
          <div className=" grid grid-rows-1 text-slate-500">
            <Link className=" my-1">Managed Website</Link>
            <Link className=" my-1">Manage Reputation</Link>
            <Link className=" my-1">Power Tools</Link>
            <Link className=" my-1">Marketing Service</Link>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 text-xl font-bold my-4">Quick Links</h3>
          <div className=" grid grid-rows-1 text-slate-500">
            <Link className=" my-1">Jobs</Link>
            <Link className=" my-1">Brand Assets</Link>
            <Link className=" my-1">Investor Relations</Link>
            <Link className=" my-1">Terms of Service</Link>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 text-xl font-bold my-4">Features</h3>
          <div className=" grid grid-rows-1 text-slate-500">
            <Link className=" my-1">Jobs</Link>
            <Link className=" my-1">Brand Assets</Link>
            <Link className=" my-1">Investor Relations</Link>
            <Link className=" my-1">Terms of Service</Link>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 text-xl font-bold my-4">Resources</h3>
          <div className=" grid grid-rows-1 text-slate-500">
            <Link className=" my-1">Guides</Link>
            <Link className=" my-1">Research</Link>
            <Link className=" my-1">Experts</Link>
            <Link className=" my-1">Agencies</Link>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 text-xl font-bold my-4">Instagram Feed</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

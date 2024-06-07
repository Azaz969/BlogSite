import { FaArrowRightLong, FaPhone } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactForm from "../components//ContactForm";

const Contact = () => {

  return (
    <div>
      <div className=" text-center text-white p-16 bg-red-600 md:mx-[52px] mx-[15px] mt-3 ">
        <h2 className=" text-5xl mb-5 align-middle">Contact Us</h2>
        <div className=" text-center text-sm flex align-middle justify-center mb-4">
          <Link>Home</Link>
          <FaArrowRightLong className=" ml-2 mt-[6px]" />
          <Link className=" ml-2">Contact Us</Link>
        </div>
      </div>
      <div className="md:mx-[52px] mx-[15px] mt-3 grid grid-flow-row p-5 bg-white">
        <div className="mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14694.356257425028!2d89.82240424999999!3d22.96535645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1715175154291!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" grid md:grid-cols-8 mt-4">
          <div className=" col-span-2 px-[15px]">
            <div className=" grid grid-flow-col">
              <div className=" text-[30px]  font-medium leading-[1] text-[#f6214b]">
                <IoHomeOutline className="" />
              </div>
              <div className="  ">
                <div className="text-[15px] font-medium mb-[5px]">Los Angeles, USA</div>
                <p className="text-base font-light mb-4 leading-[1.625em] text-[#777777]">56/8, Rocky beach road</p>
              </div>
            </div>
            <div className=" grid grid-flow-col">
              <div className=" text-[30px]  font-medium leading-[1] text-[#f6214b]">
                <FaPhone className="" />
              </div>
              <div className="  ">
                <div className="text-[15px] font-medium mb-[5px]">00 (440) 9865 562</div>
                <p className="text-base font-light mb-4 leading-[1.625em] text-[#777777]">Mon to Fri 9am to 6 pm</p>
              </div>
            </div>
            <div className=" grid grid-flow-col">
              <div className=" text-[30px]  font-medium leading-[1] text-[#f6214b]">
                <MdOutlineForwardToInbox className="" />
              </div>
              <div className="  ">
                <div className="text-[15px] font-medium mb-[5px]">support@colorlib.com</div>
                <p className="text-base font-light mb-4 leading-[1.625em] text-[#777777]">Send us your query</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

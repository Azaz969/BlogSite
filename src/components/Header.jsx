import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { Dropdown, Space } from "antd";
import { IoChevronDown } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const menuHandler = () => {
    setMenu(!menu);

    console.log(menu);
  };

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const items = [
    {
      label: "Standard Post",
      key: "1",
    },
    {
      label: "Image Post",
      key: "2",
    },
    {
      label: "Gallery Post",
      key: "3",
    },
    {
      label: "Video Post",
      key: "4",
    },
    {
      label: "Audio Post",
      key: "5",
    },
  ];

  return (
    <div className=" sticky right-0 left-0 top-0 bg-black shadow-lg z-50">
      <div className=" md:flex md:w-full justify-between align-middle  p-5 text-base">
        <div className=" w-full flex justify-between align-middle  ">
          <CiMenuFries onClick={menuHandler} className="md:hidden text-2xl text-white " />

          <div
            className={`  ${
              menu
                ? "grid grid-flow-row gap-2 absolute left-0 top-11 pl-4 mt-5 bg-gray-700 duration-500 bg-cover z-10 w-2/3 "
                : "md:flex md:justify-between hidden bg-black bg-cover "
            } `}
          >
            <NavLink
              className={({ isActive, menu }) => (isActive && menu ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/"
              // onClick={() => setMenu(!menu)}
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/archive"
              // onClick={() => setMenu(!menu)}
            >
              ARCHIVE
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/category"
            >
              CATEGORY
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/postType"
            >
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <Link className=" m-3" onClick={(e) => e.preventDefault()}>
                  <Space>
                    POST TYPE
                    <IoChevronDown />
                  </Space>
                </Link>
              </Dropdown>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
          <div className="md:flex justify-center align-middle ">
            {}

            {search ? (
              <Form inline>
                <Row>
                  <Col className=" " xs="auto">
                    <Form.Control type="text" placeholder="Search" className=" md:w-72 p-1 my-auto mr-3 " />
                  </Col>
                </Row>
              </Form>
            ) : (
              ""
            )}
            <IoIosSearch onClick={() => setSearch(!search)} className={`text-slate-300 text-2xl m-auto ${search}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

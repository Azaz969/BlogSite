import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { Dropdown, Space } from "antd";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
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
    <div className=" sticky top-0 shadow-lg z-50">
      <div className=" flex  justify-between align-middle bg-black p-5 text-base">
        <div>
          <NavLink className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")} to="/">
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
            to="/archive"
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
              <Link className=" pr-[30px]" onClick={(e) => e.preventDefault()}>
                <Space>
                  POST TYPE
                  <IoChevronDown />
                </Space>
              </Link>
            </Dropdown>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")} to="/about">
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-600 m-3" : "text-slate-300 m-2")}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
        <div className=" flex align-middle ">
          {}

          <IoIosSearch
            onClick={() => setSearch(!search)}
            className={`text-slate-300 text-2xl mx-4 ${search && " hidden"}`}
          />
          {search ? (
            <Form inline>
              <Row>
                <Col className=" " xs="auto">
                  <Form.Control type="text" placeholder="Search" className=" w-72 p-1 " />
                </Col>
              </Row>
            </Form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

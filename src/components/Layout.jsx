import Header from "./Header";
import Footer from "./Footer";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  //  const children = {children}

  return (
    <div className="body bg-slate-200">
      <Header />
      <div className=" pt-2 px-2 min-h-screen">
        {/* <Outlet /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};


export default Layout;

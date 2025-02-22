import { logo } from "~assets";
import { HEADER_ITEMS, HEADER_IMG } from "~/constants";
import { v4 } from "uuid";
import { PiHandbagSimple } from "react-icons/pi";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const items = HEADER_ITEMS;
  const chartImg = HEADER_IMG;
  const idGenerator = v4;
  const [open, setOpen] = useState(false);
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);

  return (
    <div className="w-full h-20 bg-white shadow-md font-titleFont sticky top-0 z-50">
      <div className="px-6 md:px-10 w-full 2xl:max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <p className="text-[20px] font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent transition duration-300 hover:underline underline-offset-2 cursor-pointer">
            + Ecommerce-application
          </p>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <Link to="/" key={idGenerator()}>
                <li className="text-sm md:text-base text-black font-semibold transition duration-300 hover:text-yellow-500 hover:underline underline-offset-2 cursor-pointer">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
          <Link to="/cart">
            <div className="relative">
              <PiHandbagSimple className="text-3xl md:text-4xl" />
              {productData.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {productData.length}
                </span>
              )}
            </div>
          </Link>
          <Link to="/login">
            {userInfo?.image ? (
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-gray-400 text-white font-semibold text-lg">
                {userInfo?.name ? (
                  userInfo.name.charAt(0).toUpperCase()
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
              </div>
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-gray-400 text-white font-semibold text-lg">
                {userInfo?.name ? (
                  userInfo.name.charAt(0).toUpperCase()
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
              </div>
            )}
          </Link>
        </div>

        <div
          className="cursor-pointer block md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </div>

        <ul
          className={`fixed top-0 left-0 w-[70%] h-full bg-gray-100 text-black shadow-md transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <Link to="/">
              <img className="w-10" src={logo} alt="logo" />
            </Link>
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          {items.map((item) => (
            <li
              key={idGenerator()}
              className="p-4 border-b border-gray-300 text-sm font-semibold transition duration-300 hover:bg-gray-200"
            >
              <Link to="/">{item}</Link>
            </li>
          ))}
          <li className="p-4 border-b border-gray-300 flex items-center gap-4">
            <Link to="/cart">
              <div className="relative">
                <PiHandbagSimple className="text-3xl" />
                {productData.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {productData.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li className="p-4 border-b border-gray-300 flex items-center gap-4">
            <Link to="/login">
              <img
                className="w-10 h-10 rounded-full border border-gray-300"
                src={userInfo ? userInfo.image : chartImg}
                alt="userLogo"
              />
            </Link>
            {userInfo && (
              <p className="text-sm font-semibold text-gray-700">
                {userInfo.name}
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

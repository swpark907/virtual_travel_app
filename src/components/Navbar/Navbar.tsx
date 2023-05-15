import React, { useState } from "react";
import NavData from "../../constants/navData";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 w-screen flex justify-between px-20">
      <div className="">logo</div>
      <ul className="flex justify-between ">
        {NavData.map((item, index) => (
          <div
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative"
            key={`nav-${index}`}
          >
            <Link to={item.path}>
              <li className="px-6 py-4 text-lg hover:box-shadow-text-shadow">
                {item.title}
              </li>
            </Link>
            {item.subNav.length > 0 && activeMenu === index && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {item.subNav.map((subItem, subIndex) => (
                    <Link
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:box-shadow-text-shadow text-center"
                      role="menuitem"
                      key={`subNav-${subIndex}`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
      <div className="">user-info</div>
    </nav>
  );
};
export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavData } from "../../constants";

const NavbarItems: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <ul className="flex justify-between ">
      {NavData.map((item, index) => (
        <li
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
          className="relative"
          key={`nav-${index}`}
        >
          <Link to={item.path}>
            <div className="px-6 py-4 text-lg">{item.title}</div>
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
        </li>
      ))}
    </ul>
  );
};
export default NavbarItems;

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-themeColor w-screen flex justify-between px-20 py-2">
      <div className="">logo</div>
      <ul className="flex justify-between ">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <div className="">user-info</div>
    </nav>
  );
};
export default Navbar;

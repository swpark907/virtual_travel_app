import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarAuth from "./NavbarAuth";
import NavbarItems from "./NavbarItems";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-screen flex justify-between px-20 items-center">
      <NavbarLogo />
      <NavbarItems />
      <NavbarAuth />
    </nav>
  );
};
export default Navbar;

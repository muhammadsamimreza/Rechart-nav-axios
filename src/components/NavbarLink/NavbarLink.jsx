import React from "react";

const NavbarLink = ({ item }) => {
  return (
    <li className="hover:bg-white rounded-md p-1 px-3">
      <a href={item.href}>{item.label}</a>
    </li>
  );
};

export default NavbarLink;

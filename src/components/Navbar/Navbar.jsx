import React, { useState } from "react";
import NavbarLink from "../NavbarLink/NavbarLink";
import { Menu, X } from "lucide-react";
const navbarItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Blog", href: "/blog" },
  { id: 5, label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const links = navbarItems.map((item) => (
    <NavbarLink key={item.id} item={item}></NavbarLink>
  ));

  return (
    <div className="bg-gray-100 shadow-md">
      <nav className="my-c flex justify-between items-center py-2 px-2">
        <div>
          <span className="flex items-center gap-3">
            <span
              onClick={() => setMenu(!menu)}
              className="bg-white rounded-md p-1 border border-white hover:border-gray-200 md:hidden flex"
            >
              {menu ? <X className="text-[#f00505]" /> : <Menu />}
            </span>
              <ul className={`absolute duration-1000 md:hidden
                ${menu ? "left-0 top-14" : "top-14 -left-50"}
                bg-gray-50 shadow-md pr-4 py-1 z-10`}>
                {
                    links
                }
              </ul>
            <h1 className="text-[16px] md:text-xl font-bold z-10">PH-University</h1>
          </span>
        </div>

        <div>
          <ul className="hidden md:flex gap-2">
            {
                links
            }
            </ul>
        </div>
        <div>
          <button className="btn">Sign in</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

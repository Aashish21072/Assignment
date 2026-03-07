import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Home/Engirise.svg";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const topSearches = ["Excavator", "Loader", "Forklift"];

  const handleSearch = (text) => {
    const query = text || searchText;
    if (query.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setSearchText("");
      setShowSearch(false);
      setMobileMenu(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="ENGIRISE" className="h-10 sm:h-12 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Dropdown title="Product" links={[
                { name: "Excavator", to: "/products/0" },
                { name: "Loaders", to: "/products/1" },
                { name: "Forklifts", to: "/products/2" },
                { name: "Road Machinery", to: "/products/3" },
                { name: "MEWPs", to: "/products/4" },
                { name: "Agriculture", to: "/products/5" },
                { name: "Warehouse Equipment", to: "/products/6" },
                { name: "Concrete Machinery", to: "/products/7" },
                { name: "Cranes", to: "/products/8" },
              ]} />

              <Dropdown title="Company Overview" links={[
                { name: "Career", to: "/career" },
                { name: "Contact Us", to: "/contact" },
              ]} />

              <Link to="/about" className="text-black font-normal text-sm hover:text-red-600 transition-colors">About Us</Link>

              <Dropdown title="Dealer" links={[
                { name: "Find a Dealer", to: "/find-dealer" },
                { name: "Become a Dealer", to: "/become-dealer" },
              ]} />
            </div>

            <div className="flex items-center space-x-3">
              <GlobeDropdown />

              <button onClick={() => setShowSearch(prev => !prev)} className="text-black hover:text-red-600 p-2 rounded-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button onClick={() => navigate("/products")} className="bg-red-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-bold rounded hover:bg-red-700 transition-all uppercase">Enquiry</button>

              <button onClick={() => setMobileMenu(prev => !prev)} className="lg:hidden text-black hover:text-red-600 p-2 rounded-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              <DropdownMobile title="Product" links={[
                { name: "Excavator", to: "/products/0" },
                { name: "Loaders", to: "/products/1" },
                { name: "Forklifts", to: "/products/2" },
                { name: "Road Machinery", to: "/products/3" },
                { name: "MEWPs", to: "/products/4" },
                { name: "Agriculture", to: "/products/5" },
                { name: "Warehouse Equipment", to: "/products/6" },
                { name: "Concrete Machinery", to: "/products/7" },
                { name: "Cranes", to: "/products/8" },
              ]} />
              <DropdownMobile title="Company Overview" links={[
                { name: "Career", to: "/career" },
                { name: "Contact Us", to: "/contact" },
              ]} />
              <Link to="/about" className="block py-2 text-black hover:text-red-600">About Us</Link>
              <DropdownMobile title="Dealer" links={[
                { name: "Find a Dealer", to: "/find-dealer" },
                { name: "Become a Dealer", to: "/become-dealer" },
              ]} />
            </div>
          </div>
        )}
      </nav>

      {showSearch && (
        <div className="bg-gray-50 p-4 sm:p-6 shadow-md">
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search Products..." className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-sm sm:text-base" />
            <button onClick={() => handleSearch()} className="bg-red-600 text-white px-4 py-2 rounded-md text-sm sm:text-base">Go</button>
          </div>
          <div className="mt-3 max-w-md mx-auto flex flex-wrap gap-2 justify-center">
            {topSearches.map((item, idx) => (
              <button key={idx} onClick={() => handleSearch(item)} className="bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200">{item}</button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const Dropdown = ({ title, links }) => (
  <div className="relative group">
    <div className="flex items-center text-sm text-black hover:text-red-600 cursor-pointer">
      {title}
      <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      {links.map((link, idx) => (
        <Link key={idx} to={link.to} className="block px-4 py-2 text-sm hover:bg-gray-100">{link.name}</Link>
      ))}
    </div>
  </div>
);

const DropdownMobile = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(prev => !prev)} className="w-full flex justify-between items-center px-3 py-2 text-black font-medium text-sm hover:text-red-600 border-b border-gray-200">
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="flex flex-col ml-3 mt-1 space-y-1">
          {links.map((link, idx) => (
            <Link key={idx} to={link.to} className="text-gray-700 hover:text-red-600 text-sm py-1">{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

const GlobeDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(prev => !prev)} className="text-black hover:text-red-600 flex items-center p-1 rounded-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9-9H3m9 9V3m0 18a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md flex flex-col z-50">
          <Link to="/global" className="px-4 py-2 hover:bg-gray-100 text-sm">Global</Link>
          <Link to="/india" className="px-4 py-2 hover:bg-gray-100 text-sm">India</Link>
          <Link to="/africa" className="px-4 py-2 hover:bg-gray-100 text-sm">Africa</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
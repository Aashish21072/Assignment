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
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ENGIRISE" className="h-10 md:h-12 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-8 font-medium">
              <Dropdown
                title="Product"
                links={[
                  { name: "Excavator", to: "/products/0" },
                  { name: "Loaders", to: "/products/1" },
                  { name: "Forklifts", to: "/products/2" },
                  { name: "Road Machinery", to: "/products/3" },
                  { name: "MEWPs", to: "/products/4" },
                  { name: "Agriculture", to: "/products/5" },
                  { name: "Warehouse Equipment", to: "/products/6" },
                  { name: "Concrete Machinery", to: "/products/7" },
                  { name: "Cranes", to: "/products/8" },
                ]}
              />

              <Dropdown
                title="Company Overview"
                links={[
                  { name: "Career", to: "/career" },
                  { name: "Contact Us", to: "/contact" },
                ]}
              />

              <Link to="/about" className="hover:text-red-600 transition">
                About Us
              </Link>

              <Dropdown
                title="Dealer"
                links={[
                  { name: "Find a Dealer", to: "/find-dealer" },
                  { name: "Become a Dealer", to: "/become-dealer" },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <GlobeDropdown />

              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button
                onClick={() => navigate("/products")}
                className="hidden sm:block bg-red-600 text-white px-5 py-2 text-sm font-semibold rounded hover:bg-red-700 transition"
              >
                Enquiry
              </button>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      mobileMenu
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t bg-white shadow-md">
            <div className="flex flex-col px-5 py-4 space-y-3">
              <DropdownMobile
                title="Product"
                links={[
                  { name: "Excavator", to: "/products/0" },
                  { name: "Loaders", to: "/products/1" },
                  { name: "Forklifts", to: "/products/2" },
                  { name: "Road Machinery", to: "/products/3" },
                  { name: "MEWPs", to: "/products/4" },
                  { name: "Agriculture", to: "/products/5" },
                  { name: "Warehouse Equipment", to: "/products/6" },
                  { name: "Concrete Machinery", to: "/products/7" },
                  { name: "Cranes", to: "/products/8" },
                ]}
              />

              <DropdownMobile
                title="Company Overview"
                links={[
                  { name: "Career", to: "/career" },
                  { name: "Contact Us", to: "/contact" },
                ]}
              />

              <Link to="/about" className="py-2 border-b">
                About Us
              </Link>

              <DropdownMobile
                title="Dealer"
                links={[
                  { name: "Find a Dealer", to: "/find-dealer" },
                  { name: "Become a Dealer", to: "/become-dealer" },
                ]}
              />

              <button
                onClick={() => navigate("/products")}
                className="mt-2 bg-red-600 text-white py-2 rounded"
              >
                Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>

      {showSearch && (
        <div className="bg-gray-100 border-t py-5 px-4">
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Products..."
              className="flex-1 border rounded px-4 py-2"
            />
            <button
              onClick={() => handleSearch()}
              className="bg-red-600 text-white px-6 rounded"
            >
              Search
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {topSearches.map((item, i) => (
              <button
                key={i}
                onClick={() => handleSearch(item)}
                className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const Dropdown = ({ title, links }) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center gap-1 hover:text-red-600">
      {title}
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
      {links.map((link, i) => (
        <Link
          key={i}
          to={link.to}
          className="block px-4 py-2 text-sm hover:bg-gray-100"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const DropdownMobile = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full py-2 border-b"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="flex flex-col ml-3 mt-2 gap-2">
          {links.map((link, i) => (
            <Link key={i} to={link.to} className="text-sm text-gray-700">
              {link.name}
            </Link>
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
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-black hover:text-red-600 flex items-center p-2 rounded-md hover:bg-gray-100 transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9-9H3m9 9V3m0 18a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md flex flex-col z-50">
          <Link to="/global" className="px-4 py-2 hover:bg-gray-100 text-sm">
            Global
          </Link>
          <Link to="/india" className="px-4 py-2 hover:bg-gray-100 text-sm">
            India
          </Link>
          <Link to="/africa" className="px-4 py-2 hover:bg-gray-100 text-sm">
            Africa
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

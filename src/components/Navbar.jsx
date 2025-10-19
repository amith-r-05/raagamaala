import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Live Classes", href: "#live" },
  ];

  const buttons = [
    { name: "Sign In", className: "hidden md:block" },
    { name: "Teach Music", className: "hidden md:block" },
  ];
  const commonButtonClasses =
    "px-4 py-2 border border-primary rounded-button hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap";

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-gray-200/50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Links */}
          <div className="flex items-center space-x-8">
            <div className="font-[Pacifico] text-2xl text-primary">
              Raaga Maala
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Buttons & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {buttons.map((btn) => (
              <button
                key={btn.name}
                className={`${commonButtonClasses} ${btn.className} text-primary`}
              >
                {btn.name}
              </button>
            ))}

            <button className="px-4 py-2 bg-primary text-white rounded-button hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">
              Get Started
            </button>

            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <RiMenuLine className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            {buttons.map((btn) => (
              <button
                key={btn.name}
                className={`${commonButtonClasses} text-primary md:hidden`}
              >
                {btn.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, memo, useMemo, useCallback } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const handleScrollToHero = (e) => {
  e.preventDefault();
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    window.scrollTo({
      top: heroSection.offsetTop,
      behavior: "smooth",
    });
  }
};

// Move static data outside component to prevent recreation
const NAV_LINKS = [
  {
    type: "link",
    name: "Live Classes",
    className: "hidden md:block",
    to: "/live",
  },
];

const BUTTONS = [
  {
    type: "button",
    name: "Sign In",
    className: "hidden md:block",
    to: "/sign-in",
  },
  {
    type: "button",
    name: "Teach Music",
    className: "hidden md:block",
    to: "/teach-music",
  },
];

// Constant class strings to avoid recreation
const BUTTON_CLASSES = {
  common: "btn btn-outline btn-primary rounded-button whitespace-nowrap",
  mobile: "w-full justify-center md:hidden",
  primary: "btn btn-primary rounded-button whitespace-nowrap",
  menuButton: "md:hidden w-8 h-8 flex items-center justify-center",
  mobileMenu: "md:hidden mt-4 flex flex-col space-y-3 p-2.5",
  menuContainer: "overflow-hidden transition-all duration-300 ease-in-out",
  menuItem: "transform transition-all duration-300 ease-in-out",
  hover: "text-gray-700 hover:text-primary transition-colors duration-200",
};

// Memoized button component for better performance
const NavButton = memo(({ className, children, to, ...props }) => (
  <Link to={to}>
    <button className={className} type="button" {...props}>
      {children}
    </button>
  </Link>
));
NavButton.displayName = "NavButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Memoize mobile menu items (links + buttons)
  const mobileMenuItems = useMemo(() => [...NAV_LINKS, ...BUTTONS], []);

  // Memoize desktop nav links
  const desktopNavLinks = useMemo(() => NAV_LINKS, []);

  // Memoize desktop buttons
  const desktopButtons = useMemo(() => BUTTONS, []);

  // Memoized handler
  const handleMenuToggle = useCallback(() => setMenuOpen((open) => !open), []);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-b-blue-900/50 p-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Links */}
          <div className="flex items-center space-x-8">
            <div className="font-[Pacifico] text-2xl text-primary">
              <a href={"#hero"} onClick={handleScrollToHero}>
                Raaga Maala
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {desktopNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={BUTTON_CLASSES.hover}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {desktopButtons.map((btn) => (
              <NavButton
                key={btn.name}
                to={btn.to}
                className={`${BUTTON_CLASSES.common} ${btn.className}`}
              >
                {btn.name}
              </NavButton>
            ))}

            <NavButton className={BUTTON_CLASSES.primary} to="/get-started">
              Get Started
            </NavButton>

            <button
              className={BUTTON_CLASSES.menuButton}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <RiMenuLine className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={BUTTON_CLASSES.menuContainer}
          style={{ maxHeight: menuOpen ? "500px" : "0px" }}
        >
          <div
            className={`${BUTTON_CLASSES.mobileMenu} opacity-${
              menuOpen ? "100" : "0"
            } transform ${menuOpen ? "translate-y-0" : "-translate-y-2"}`}
          >
            {mobileMenuItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="btn btn-outline btn-primary w-full justify-center hover:text-white transition-all duration-200 "
                  style={{
                    transitionDelay: menuOpen ? `${15}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: `translateY(${menuOpen ? "0" : "-8px"})`,
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <NavButton
                  key={item.name}
                  to={item.to}
                  className="btn btn-outline btn-primary w-full justify-center hover:text-white transition-all duration-200"
                  style={{
                    transitionDelay: menuOpen ? `${15}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: `translateY(${menuOpen ? "0" : "-8px"})`,
                  }}
                >
                  {item.name}
                </NavButton>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

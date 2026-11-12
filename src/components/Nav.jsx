import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Journey", to: "/journey" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-charcoal/10">
      <div className="flex justify-between items-center px-6 py-5 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-teal font-semibold text-xl tracking-wide no-underline"
        >
          <span className="text-sage text-2xl">✦</span>
          Yeabsira.
        </Link>

        {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[0.9rem] no-underline transition-colors ${
                      isActive
                        ? "text-teal font-semibold"
                        : "text-charcoal/70 hover:text-teal"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-teal text-cream no-underline text-[0.85rem] font-medium rounded-full transition-all hover:bg-charcoal"
          >
            Get in Touch
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
        <button
          className="md:hidden block text-teal text-3xl p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-charcoal/10 shadow-xl px-6 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 list-none">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium no-underline ${
                      isActive ? "text-teal" : "text-charcoal/70"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center w-full px-6 py-3 bg-teal text-cream no-underline text-[0.9rem] font-medium rounded-full"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}

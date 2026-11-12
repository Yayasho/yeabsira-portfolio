import { NavLink, Link } from "react-router-dom";
import { profile } from "../data";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },

  { label: "Journey", to: "/journey" },
];

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-8 max-w-[1400px] mx-auto w-full">
      <Link
        to="/"
        className="flex items-center gap-2 text-teal font-semibold text-lg tracking-wide no-underline"
      >
        <span className="text-sage text-xl">✦</span>
        Yeabsira.
      </Link>

      <ul className="hidden md:flex items-center gap-10 list-none">
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
        className="hidden md:inline-flex items-center px-6 py-2.5 bg-teal text-cream no-underline text-[0.85rem] font-medium rounded-full transition-all hover:bg-charcoal hover:scale-105"
      >
        Get in Touch
      </Link>
    </nav>
  );
}

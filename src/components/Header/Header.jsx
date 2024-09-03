import { Link, NavLink } from "react-router-dom";
import GOG from "../../assets/Government_Of_Gujarat_Seal.svg";
import Line from "../../assets/Line.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 z-50 shadow ">
      <nav className="border-gray-200 bg-csec px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-evenly font-poppins text-xl font-black"
          >
            <div className="flex items-center justify-evenly gap-2">
              <img src={GOG} className="h-10" alt="Logo" />
              <img src={Line} className="h-12 w-0.5" alt="Line" />
              <p>Govt. of Gujarat</p>
            </div>
          </Link>
          <div className="flex items-center font-grotesk font-black lg:order-2">
            <Link
              to="#"
              className="mr-2 rounded-lg px-2 py-2 text-clight hover:bg-cpri focus:outline-none focus:ring-2 focus:ring-cyan-900"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="mr-2 rounded-lg bg-cpri px-2 py-2 text-clight hover:bg-cdark focus:outline-none focus:ring-2 focus:ring-cyan-900"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="hidden w-full items-center justify-between font-grotesk text-xl font-black lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-black lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${isActive ? "text-cdark" : "text-clight"} border-b border-gray-100 hover:bg-gray-50 hover:text-cpri lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${isActive ? "text-cdark" : "text-clight"} border-b border-gray-100 hover:bg-gray-50 hover:text-cpri lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${isActive ? "text-cdark" : "text-clight"} border-b border-gray-100 hover:bg-gray-50 hover:text-cpri lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alumdir"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${isActive ? "text-cdark" : "text-clight"} border-b border-gray-100 hover:bg-gray-50 hover:text-cpri lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Alumini
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobportal"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${isActive ? "text-cdark" : "text-clight"} border-b border-gray-100 hover:bg-gray-50 hover:text-cpri lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Job Portal
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

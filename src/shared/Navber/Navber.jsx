import { NavLink } from "react-router";

const Navber = () => {

    // navitems list
    const navItems = <>
        <div className="flex gap-x-4 text-xl">
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-black"} to='/'>
                Home
            </NavLink>
            <NavLink to='/menu' className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                Our Menu
            </NavLink>
            <NavLink to='/ourshop' className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                Our Shop
            </NavLink>
        </div>
    </>

    return (
        <div>
            <div className="navbar font-popine bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TP shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;
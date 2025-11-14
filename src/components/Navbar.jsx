import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { to: '/', label: 'Home', end: true },
        { to: '/contact', label: 'Contact' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
    ];

    return (
        <nav className="relative flex items-center px-6 py-4">
            <h1 className="text-3xl font-bold">Ajit.Dev</h1>

            {/* Desktop links */}
            <div className="hidden sm:flex flex-1 justify-center gap-8 text-lg">
                {links.map((l) => (
                    <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.end}
                        className={({ isActive }) => (isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700')}
                    >
                        {l.label}
                    </NavLink>
                ))}
            </div>

            {/* Download button (always visible) */}
            <a href="/resume.pdf" download aria-label="Download resume" className="ml-4">
                <button className="transition ease-in-out bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Download Resume</button>
            </a>

            {/* Mobile hamburger */}
            <button
                className="sm:hidden ml-3 p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation"
            >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                role="menu"
                className={`sm:hidden absolute right-4 top-full mt-2 w-56 bg-white rounded-lg shadow-lg z-50 ${open ? 'block' : 'hidden'}`}
            >
                <div className="flex flex-col p-3">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.end}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="mt-2 inline-block px-3 py-2 rounded-md bg-indigo-600 text-white text-center"
                        onClick={() => setOpen(false)}
                        aria-label="Download resume"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
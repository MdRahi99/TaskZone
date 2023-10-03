import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-64 flex flex-col gap-4">
                        <li><NavLink className={({ isActive }) => (isActive ? "bg-black text-white p-2 text-md font-serif" : "hover:bg-black hover:text-white p-2 text-md font-serif")} to='/'>Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => (isActive ? "bg-black text-white p-2 text-md font-serif" : "hover:bg-black hover:text-white p-2 text-md font-serif")} to='/contact'>Contact</NavLink></li>

                        <li><NavLink className={({ isActive }) => (isActive ? "bg-black text-white p-2 text-md font-serif" : "hover:bg-black hover:text-white p-2 text-md font-serif")} to='/add-task'>Add Task</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-bold">TaskZone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-serif font-medium flex gap-5">
                    <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "hover:border-b-2 hover:rounded border-black hover:bg-white")} to='/'>Home</NavLink></li>

                    <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "hover:border-b-2 hover:rounded border-black hover:bg-white")} to='/contact'>Contact</NavLink></li>

                    <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "hover:border-b-2 hover:rounded border-black hover:bg-white")} to='/add-task'>Add Task</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="text-md font-mono uppercase font-medium px-3 hover:bg-white hover:text-black hover:border-y-2 border-black py-1 bg-black text-white">User</Link>
            </div>
        </div>
    );
};

export default Header;
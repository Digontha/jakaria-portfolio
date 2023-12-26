import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks=<div className='font-mono  font-bold lg:text-[25px] flex flex-col lg:flex-row lg:gap-10'>
              <NavLink>Ho<span className='text-[#938000]'>me</span></NavLink>
              <NavLink>Abo<span className='text-[#938000]'>ut</span></NavLink>
              <NavLink>Cont<span className='text-[#938000]'>act</span></NavLink>
    </div>
    return (
        <div className="navbar bg-[#3E3C2F] text-white p-5 lg:px-20 rounded-2xl fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                     {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-mono">JAKA<span className='text-3xl text-[#938000]'>RIA</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-sm btn-neutral btn-outline text-white text-xl font-mono">Hire Me</button>
            </div>
        </div>
    );
};

export default Navbar;
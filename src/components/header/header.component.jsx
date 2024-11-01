// react router
import { Link, NavLink } from "react-router-dom";
// react hooks
import { useState, useEffect } from "react";
// react icons
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showNav, setShowNav] = useState(false);

    // Handle scroll event to make header sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) { // Adjust scrollY value as needed
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`${isSticky ? '' : 'py-[0.2rem]'} shadow w-full fixed bg-white top-0 left-0 z-[999] transition-all duration-300 ease-in-out`}>
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] mx-auto py-[1rem]">
                {/* flex */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link to='/'>
                            <div className="flex flex-col">
                                <h1 className="text-[1.8rem] font-bold">OLUWAMIGHTY GLOBAL</h1>
                                <h1 className="text-[1.8rem] font-bold">BUSINESS LTD</h1>
                            </div>
                        </Link>
                    </div>
                    {/* desktop nav Links */}
                    <div className='hidden md:flex gap-[15px] items-center'>
                        <NavLink to='/' className={({ isActive }) => isActive && location.pathname === '/' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>Home</NavLink>
                        <NavLink to='/properties' className={({ isActive }) => isActive && location.pathname === '/properties' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>Properties</NavLink>
                        <NavLink to='/about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>About Us</NavLink>
                        <NavLink to='/contact_us' className={({ isActive }) => isActive && location.pathname === '/contact_us' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>Contact Us</NavLink>
                    </div>
                    {/* Menu icon */}
                    {
                        showNav?
                            <LiaTimesSolid onClick={() => {
                                setShowNav(false)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-black" />
                        :
                            <FiMenu onClick={() => {
                                setShowNav(true)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-black" />
                    }
                </div>
            </div>
            {/* mobile nav links */}
            <div className={`overflow-hidden top-0 left-0 md:hidden bg-white fixed w-[100vw] transition-all ${showNav? 'h-[100vh]' : 'h-[0]'}`}>
                <div className='flex gap-[10px] items-center flex-col mt-[80px] w-full'>
                    <NavLink to='/' className={({ isActive }) => isActive && location.pathname === '/' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] border-b-4 border-transparent transition-all font-semibold'}>Home</NavLink>
                    <NavLink to='/properties' className={({ isActive }) => isActive && location.pathname === '/properties' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] border-b-4 border-transparent transition-all font-semibold'}>Properties</NavLink>
                    <NavLink to='/contact_us' className={({ isActive }) => isActive && location.pathname === '/contact_us' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>Contact Us</NavLink>
                    <NavLink to='/about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link border-b-4 border-blue-700 transition-all text-[1.6rem] font-semibold' : 'text-[1.6rem] hover:border-blue-700 border-b-4 border-transparent transition-all font-semibold'}>About Us</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
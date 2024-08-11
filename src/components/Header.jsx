import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import { FaMagnifyingGlass, FaBars, FaUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [search, setSearch] = useState("");
    const { menuOpen, toggleMenu } = useContext(MenuContext);
    const { theme, toggleTheme } = useContext(ThemeContext)
    const menuRef = useRef();
    const overlayRef = useRef();
    const location = useLocation();

    const handleScrollHeader = useCallback(() => {
        setScrollHeader(window.scrollY >= 64);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        return () => window.removeEventListener('scroll', handleScrollHeader);
    }, [handleScrollHeader]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (menuOpen) {
            toggleMenu();
            setSearch('');
        }
    }, [location]);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            toggleMenu();
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className={`flex items-center justify-between fixed w-full h-16 px-8 z-50 transition-colors duration-300 ${scrollHeader ? (theme ? 'bg-bgLight' : 'bg-bgDark') : 'bg-transparent'}`}>
            <div className={`absolute top-0 left-0 right-0 h-[100vh] z-60 bg-mainDark/30 ${menuOpen ? 'block' : 'hidden'}`} ref={overlayRef}></div>
            <button className="lt:hidden mb:flex text-xl hover:text-extra" onClick={toggleMenu}><FaBars /></button>
            <div ref={menuRef} className={`lt:hidden mb:flex flex-col items-center h-screen space-y-5 p-5 absolute z-90 top-0 bg-bgDark transition-all ease-in-out duration-300 ${menuOpen ? 'left-0' : '-left-full'}`}>
                <h1 className="text-[32px] text-extra font-bold"><span className={`${theme ? 'text-textLight' : 'text-textDark'}`}>Kuwa</span>Movie</h1>
                <Link to={'/'} className={`header-item ${location.pathname === '/' ? 'active' : ''}`}>Trang chủ</Link>
                <Link to={'/movies'} className={`header-item ${location.pathname === '/movies' ? 'active' : ''}`}>Phim lẻ</Link>
                <Link to={'/tvs'} className={`header-item ${location.pathname === '/tvs' ? 'active' : ''}`}>Phim bộ</Link>
                <button className={`header-item ${theme ? 'bg-mainLight' : 'bg-mainDark'}`} onClick={toggleTheme}>Sáng/Tối</button>
            </div>

            <div className="lt:flex mb:hidden items-center space-x-5" id="header-bar">
                <h1 className="text-[32px] text-extra font-bold"><span className={`${theme ? 'text-textLight' : 'text-textDark'}`}>Kuwa</span>Movie</h1>
                <div className="flex space-x-3" id="header-bar-content">
                    <Link to={'/'} className={`header-item ${location.pathname === '/' ? 'active' : ''}`}>Trang chủ</Link>
                    <Link to={'/movies'} className={`header-item ${location.pathname === '/movies' ? 'active' : ''}`}>Phim lẻ</Link>
                    <Link to={'/tvs'} className={`header-item ${location.pathname === '/tvs' ? 'active' : ''}`}>Phim bộ</Link>
                    <button className={`header-item ${theme ? 'bg-mainLight' : 'bg-mainDark'}`} onClick={toggleTheme}>Sáng/Tối</button>
                </div>
            </div>

            <div className="flex gap-5">
                <div className={`px-2 py-1 rounded-tl-xl rounded-br-xl border-solid ${theme ? 'border-textLight' : 'border-textDark'} border space-x-2 flex items-center`}>
                    <input className="bg-transparent border-none outline-none p-1" type="text" placeholder="Bạn muốn tìm gì?" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Link to={`/search/${search}`} className="text-xl hover:text-extra"><FaMagnifyingGlass /></Link>
                </div>
                <button className="lt:flex mb:hidden small-btn main-btn">Đăng nhập</button>
            </div>

            <button className="lt:hidden mb:flex text-xl hover:text-extra"><FaUser /></button>
        </div>
    );
}

export default Header;

import { useState, useEffect, useCallback } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
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
    }, [location]);

    return (
        <div className={`flex items-center justify-between fixed w-full h-16 px-8 z-20 ${scrollHeader ? 'bg-mainDark' : 'bg-transparent'}`}>
            <div className="flex items-center space-x-5">
                <h1 className="text-[32px] text-extra font-bold"><span className="text-textDark">Kuwa</span>Movie</h1>
                <div className="text-mainLight text-base flex space-x-3">
                    <Link to={'/'} className={`header-item ${location.pathname === '/' ? 'active' : ''}`}>Trang chủ</Link>
                    <Link to={'/movies'} className={`header-item ${location.pathname === '/movies' ? 'active' : ''}`}>Phim lẻ</Link>
                    <Link to={'/tvs'} className={`header-item ${location.pathname === '/tvs' ? 'active' : ''}`}>Phim bộ</Link>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="px-2 py-1 rounded-tl-xl rounded-br-xl border-solid border-textDark border space-x-2 flex items-center">
                    <input className="bg-transparent border-none outline-none p-1 text-textDark" type="text" placeholder="Bạn muốn tìm gì?" />
                    <button className="text-textDark text-xl hover:text-extra"><FaMagnifyingGlass /></button>
                </div>
                <a href="" className="small-btn main-btn">Đăng nhập</a>
            </div>
        </div>
    )
}

export default Header;
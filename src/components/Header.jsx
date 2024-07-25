import { FaMagnifyingGlass } from "react-icons/fa6"

const Header = () => {
    return (
        <div className="bg-mainDark flex items-center justify-between fixed w-full h-16 px-8">
            <div className="flex items-center space-x-5">
                <h1 className="text-[32px] text-extra font-bold"><span className="text-textDark">Kuwa</span>Movie</h1>
                <div className="text-mainLight text-base flex space-x-3">
                    <a href="#" className="header-item active" >Trang chủ</a>
                    <a href="#" className="header-item">Phim lẻ</a>
                    <a href="#" className="header-item">Phim bộ</a>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="px-2 py-1 rounded-tl-xl rounded-br-xl border-solid border-textDark border space-x-2 flex items-center">
                    <input className="bg-transparent border-none outline-none p-1 text-textDark" type="text" placeholder="Bạn muốn tìm gì?" />
                    <button className="text-textDark text-xl hover:text-extra"><FaMagnifyingGlass /></button>
                </div>
                <a href="#" className="small-btn main-btn">Đăng nhập</a>
            </div>
        </div>
    )
}

export default Header;
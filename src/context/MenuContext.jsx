import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };


    return (
        <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    )
};

export { MenuContext, MenuProvider };
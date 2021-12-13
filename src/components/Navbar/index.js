import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";
const Navbar = () => {
    return (
        <>
           <Nav>
            <Bars />

            <NavMenu>
                <NavLink to="/movie/popular" >
                    Movies
                </NavLink>
                <NavLink to="/tv/popular" >
                    Tv Shows
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
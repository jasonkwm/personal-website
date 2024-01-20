import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <header>
            <a href="#home">
                <Image src="/next.svg" width={250} height={250} alt="a picture of nextJs logo" />
                <h2>JASON KOH</h2>
            </a>
            <nav>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#achievements">ACHIEVEMENTS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    );
};
export default Navbar;

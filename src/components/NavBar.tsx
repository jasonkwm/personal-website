import React from 'react';

type Props = {}

export default function NavBar({}: Props) {
  return (
    <>
    <header className='sticky flex justify-between items-center w-full p-5 md:px-20 md:py-5 font-bold shadow-lg bg-white top-0 z-10'>
        <div className="left-side-nav flex justify-around items-center">
            <img src={require("../assets/kid_pic.jpg")} alt="picture of me" className="rounded-full w-14 h-14"/>
            <span className='p-4 tracking-wider'>JASON KOH</span>
        </div>
        <div className='right-side-nav-desktop'>
            <ul className='desktop-nav-links hidden md:flex justify-between md:justify-around items-center'>
                <li className='p-4 button-active transition-all duration-300'><a href='#home'>HOME</a></li>
                <li className='p-4 button-active transition-all duration-300'><a href='#about'>ABOUT</a></li>
                <li className='p-4 button-active transition-all duration-300'><a href='#projects'>PROJECTS</a></li>
                <li className='p-4 button-active transition-all duration-300'><a href="#contact">CONTACT</a></li>
            </ul>
            <div className='mobile-buttons-nav md:hidden'>
                <div className='w-8 h-1 bg-black mb-2'></div>
                <div className='w-8 h-1 bg-black mb-2'></div>
                <div className='w-8 h-1 bg-black'></div>
            </div>
        </div>
    </header>
    {/* <div className='mobile-nav-div fixed'>
        <ul className='mobile-nav-links'>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </div> */}
    </>
  )
}
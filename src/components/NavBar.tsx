import {useState} from 'react';

type Props = {}

export default function NavBar({}: Props) {
    const [toggle, setToggle] = useState(false);
    function handleClick (event:any){
        setToggle(current => !current);
    }

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
                <div onClick={handleClick} className={`${toggle ? "nav-menu" : ""} md:hidden transition-all duration-300`}>
                    <div className={`w-8 h-1 rounded-full bg-black mb-2  transition-all duration-300 ${toggle ? "translate-y-[12px] -rotate-45 " : ""}`}></div>
                    <div className={`w-8 h-1 rounded-full bg-black mb-2  transition-all duration-300 ${toggle ? "opacity-0 " : ""}`}></div>
                    <div className={`w-8 h-1 rounded-full bg-black  transition-all duration-300 ${toggle ? "translate-y-[-12px] rotate-45 " : ""}`}></div>
                </div>
            </div>
        </header>
        <ul className={`bg-white w-full mobile-nav-div fixed md:hidden z-10 flex flex-col justify-end ${toggle ? "block" : "hidden"}`}>
            <li className='py-6 px-8 text-right border-t-[1px] border-b-[1px] border-gray font-semibold text-sm'><a onClick={handleClick} href="#home">HOME</a></li>
            <li className='py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm'><a onClick={handleClick} href="#about">ABOUT</a></li>
            <li className='py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm'><a onClick={handleClick} href="#projects">PROJECTS</a></li>
            <li className='py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm shadow-xl'><a onClick={handleClick} href="#contact">CONTACT</a></li>
        </ul>
        </>
    )
}
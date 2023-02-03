import React from 'react'
import uuid from 'react-uuid';

type Props = {}

let socials = [
    {
      link: "https://github.com/jasonkwm",
      img: require("../assets/github-white.png"),
      alt: "GitHub icon by Icons8",
      key: uuid()
    },
    {
      link: "https://www.facebook.com/JasonKWM/",
      img: require("../assets/facebook-white.png"),
      alt: "Facebook icon by Icons8",
      key: uuid()
    },
    {
      link: "https://www.linkedin.com/in/jason-kwm",
      img: require("../assets/linkedin-white.png"),
      alt: "LinkedIn icon by Icons8",
      key: uuid()
    },
    {
      link: "https://www.instagram.com/jasonkwm/",
      img: require("../assets/instagram-white.png"),
      alt: "Instagram icons by Icons8",
      key: uuid()
    }
  ];

function Footer({}: Props) {
  return (
    <footer className='bg-black text-white flex flex-col-reverse lg:flex-row justify-between py-10 lg:py-20 px-5 lg:px-36'>
        <div className='flex flex-col items-start mt-12 lg:mt-0'>
            <h2 className='font-semibold text-lg tracking-wider mb-2 lg:mb-5'>JASON KOH</h2>
            <p className='text-sm w-10/12 lg:w-2/3 text-left'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='font-semibold text-lg tracking-wider mb-2 lg:mb-5'>SOCIAL</h3>
            <div className='footer-social-icon-div flex '>
                {
                    socials.map( social => (<a href={social.link} target="_blank" rel="noreferrer" key={social.key}><img src={social.img} alt={social.alt} className="w-10 h-10 mr-4 hover:scale-110 hover:rotate-6 transition-all duration-300"/></a>))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer
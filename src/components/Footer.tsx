import React from 'react'

type Props = {}

let socials = [
    {
      link: "https://github.com/jasonkwm",
      img: require("../assets/github-white.png"),
      alt: "GitHub icon by Icons8"
    },
    {
      link: "https://www.facebook.com/JasonKWM/",
      img: require("../assets/facebook-white.png"),
      alt: "Facebook icon by Icons8"
    },
    {
      link: "https://www.linkedin.com/in/jason-kwm",
      img: require("../assets/linkedin-white.png"),
      alt: "LinkedIn icon by Icons8"
    },
    {
      link: "https://www.instagram.com/jasonkwm/",
      img: require("../assets/instagram-white.png"),
      alt: "Instagram icons by Icons8"
    }
  ];

function Footer({}: Props) {
  return (
    <footer className='bg-black text-white flex justify-between py-20 px-36'>
        <div className='flex flex-col items-start'>
            <h2 className='font-semibold text-lg tracking-wider'>JASON KOH</h2>
            <p className='text-sm w-2/3 mt-5 text-left'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div>
            <h3 className='font-semibold text-lg tracking-wider'>SOCIAL</h3>
            <div className='footer-social-icon-div flex mt-5'>
                {
                    socials.map( social => (<a href={social.link} target="_blank"><img src={social.img} alt={social.alt} className="w-12 h-12 p-2 hover:scale-110 hover:rotate-6 transition-all duration-300"/></a>))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer
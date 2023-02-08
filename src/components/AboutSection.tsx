import React from 'react'

type Props = {}
let skills=["HTML", "CSS", "SASS", "Tailwind CSS", "JavaScript", "TypeScript", "ReactJS", "D3.js", "Responsive Design",
            "GIT", "Github", "C Programming", "Terminal", "NodeJS", "Python", "Pandas", "Matplotlib"];

export default function AboutSection({}: Props) {
  return (
    <section id='about' className='bg-[#fafafa] py-20'>
        <div className='flex flex-col items-center mb-10'>
            <h2 className='font-semibold text-3xl lg:text-4xl'>ABOUT ME</h2>
            <div className='w-14 h-2 rounded-full bg-gray-400 my-8'></div>
            {/* <p className='font-large text-lg lg:text-xl text-[#555] w-10/12 lg:w-6/12'>Discover an in-depth look at my expertise, and current competencies, within the world of programming and technology</p> */}
        </div>
        <div className='px-10 lg:flex lg:px-20'>
            <div className='w:10/12 flex flex-col items-start text-left lg:w-6/12 lg:px-20'>
                <h3 className='font-bold text-3xl my-10'>Get to know me!</h3>
                <div className='text-lg leading-7 text-[#666]'>
                    <p className='mb-5'>I’m a programmer who enjoys building websites and web applications. I have a strong passion for coding, web development, and software engineering.</p>
                    <p className='mb-5'>I am eager to turn my passion into a career. With solid experience in various programming frameworks, 
                    I have a knack for creating solutions that meet the specific needs of each project. 
                    I am open opportunities to grow my skill set and knowledge and ultimately, to bring valuable impact to an organisation.</p>
                    <p className='mb-10'>When I’m not coding, I enjoy long runs and arguing with ChatGPT on what colour a banana should be.</p>
                    <a href="#contact" className='inline-block px-7 py-3 font-medium bg-black rounded-lg text-white text-sm tracking-wider hover:animate-expandButton transition-all duration-300 lg:px-16 lg:py-4 lg:font-semibold'>CONTACT</a>
                </div>
            </div>
            <div className='w-12/12 h-1 rounded-full bg-gray-200 my-10 lg:hidden'></div>
            <div className='lg:w-6/12 lg:px-20'>
                <h3 className='font-bold text-3xl mb-10 my-6 text-left'>My Skills</h3>
                <div className='flex flex-wrap'>
                    {skills.map( skill => (<div key={skill} className='bg-gray-200 px-4 py-2 text-[#666] m-2 text-sm rounded-lg hover:animate-shakeLittle font-medium lg:px-6 lg:py-3'>{skill}</div>))}
                </div>
            </div>
        </div>
    </section>
  )
}
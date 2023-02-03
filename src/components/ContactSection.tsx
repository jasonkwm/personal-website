import React from 'react'

type Props = {}

export default function ContactSection({}: Props) {
  return (
    <section id="contact" className='home-section pb-10'>
      <div className='flex flex-col items-center py-20'>
        <h2 className='font-semibold text-4xl'>CONTACT</h2>
        <div className='w-10 h-2 rounded-full bg-amber-400 my-8'></div>
        <p className='font-large text-xl text-[#555] w-6/12'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <form className='max-w-3xl w-10/12 mx-auto p-10 bg-white rounded-md shadow-2xl' action="" method='post'>
        <div className='form-input-div flex flex-col items-start mb-10'>
          <label className='font-medium text-l text-[#666] mb-3' htmlFor="name">Name</label>
          <input className='w-full p-5 bg-gray-200 rounded-lg outline-none' required placeholder='Enter Your Name' name='name' type="text" id='name'/>
        </div>
        <div className='form-input-div flex flex-col items-start mb-10'>
          <label className='font-medium text-l text-[#666] mb-3' htmlFor="email">Email</label>
          <input className='w-full p-5 bg-gray-200 rounded-lg outline-none' required placeholder="Enter Your Email" type="email" name="email" id="email" />
        </div>
        <div className='form-input-div flex flex-col items-start mb-10'>
          <label className='font-medium text-l text-[#666] mb-3' htmlFor="message">Message</label>
          <textarea className='w-full p-5 bg-gray-200 rounded-lg resize-none outline-none' placeholder='Enter Your Message' required name="message" id="message" cols={30} rows={10}></textarea>
        </div>
        <input className='block px-16 py-5 bg-black text-white w-full rounded-lg ml-auto text-sm font-semibold tracking-wider hover:animate-expandButton transition-all duration-300' type="submit" value="SUBMIT" />
      </form>
    </section>
  )
}
'use client';

import React from 'react';
import SectionHeading from './SectionHeading';

const ContactSection = () => {
	function handleSubmit(e: any): void {
		e.preventDefault();
		const data = new FormData(e.target as HTMLFormElement);
		const action = e.target.action;
		e.target.reset();
		fetch(action, {
			method: 'post',
			body: data,
		}).then(() => {
			alert('Thank you for reaching out!');
		});
	}
	return (
		<section id="contact" className="pb-10">
			<SectionHeading
				heading="CONTACT"
				divider={true}
				description="Feel free to contact me by submitting the form below and I will get back to you as soon as possible"
			/>
			<form
				className="max-w-3xl w-11/12 md:w-10/12 mx-auto p-6 md:px-10 bg-white rounded-md shadow-2xl"
				onSubmit={handleSubmit}
				action="https://script.google.com/macros/s/AKfycbzEdlI76OaQSIIkgI9Un_3BB_6ryXTzr8RUP55cjInAzSGVJO0f9S5dcaM_Yz3k9tcMlA/exec"
				method="post"
			>
				<div className="form-input-div flex flex-col items-start mb-5 md:mb-10">
					<label
						className="font-medium text-sm md:text-l text-[#666] mb-3"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="w-full p-4 md:p-5 bg-gray-200 text-sm md:text-l rounded-lg outline-none"
						required
						placeholder="Enter Your Name"
						name="name"
						type="text"
						id="name"
					/>
				</div>
				<div className="form-input-div flex flex-col items-start mb-5 md:mb-10">
					<label
						className="font-medium text-sm md:text-l text-[#666] mb-3"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="w-full p-4 md:p-5 bg-gray-200 text-sm md:text-l rounded-lg outline-none"
						required
						placeholder="Enter Your Email"
						type="email"
						name="email"
						id="email"
					/>
				</div>
				<div className="form-input-div flex flex-col items-start mb-10">
					<label
						className="font-medium text-sm md:text-l text-[#666] mb-3"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="w-full p-4 md:p-5 bg-gray-200 text-sm md:text-l rounded-lg resize-none outline-none"
						placeholder="Enter Your Message"
						required
						name="message"
						id="message"
						cols={30}
						rows={10}
					></textarea>
				</div>
				<input
					className="block md:px-16 md:py-5 py-3 bg-black text-white w-full rounded-lg ml-auto text-sm font-semibold tracking-widest hover:animate-expandButton transition-all duration-300"
					type="submit"
					value="SUBMIT"
				/>
			</form>
		</section>
	);
};

export default ContactSection;

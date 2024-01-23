type HeadingType = {
	heading: string;
	description?: string;
	divider?: boolean;
};

const SectionHeading = ({ heading, description, divider }: HeadingType) => {
	return (
		<div className="flex flex-col items-center py-14 md:py-20">
			<h2 className="font-semibold text-3xl md:text-4xl">{heading}</h2>
			{divider && <div className="w-14 h-2 rounded-full bg-gray-500 my-8"></div>}
			<p className="font-large text-xl text-[#555] w-10/12 md:w-6/12">{description}</p>
		</div>
	);
};

export default SectionHeading;

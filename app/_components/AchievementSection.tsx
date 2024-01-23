import React from 'react';
import SectionHeading from './SectionHeading';
const AchievementSection = () => {
	return (
		<section id="achievements" className="bg-[#fafafa] py-20">
			<SectionHeading
				heading="ACHIEVEMENTS"
				divider={true}
				description="Browse through my hackathon journey, where each achievement reflects not just wins but the invaluable lessons learned in the heat of coding challenges."
			/>
		</section>
	);
};

export default AchievementSection;

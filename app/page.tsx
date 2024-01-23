import Image from 'next/image';
import HeroSection from './_components/HeroSection';
import ProjectSection from './_components/ProjectSection';
import ContactSection from './_components/ContactSection';
import AchievementSection from './_components/AchievementSection';
export default function Home() {
	return (
		<main>
			<HeroSection />
			<AchievementSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
}

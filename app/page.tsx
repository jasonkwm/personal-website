import Image from 'next/image';
import HeroSection from './_components/HeroSection';
import ProjectSection from './_components/ProjectSection';
import ContactSection from './_components/ContactSection';
export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
}

import Image from 'next/image';
import HeroSection from './_components/HeroSection';
import ProjectSection from './_components/ProjectSection';
export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProjectSection />
		</main>
	);
}

import { Hero, About, Education, Skills, ExperienceSection, FeaturedProjects, Contact, AchievementsBanner, CurrentlyExploring } from '@/components/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AchievementsBanner />
      <ExperienceSection />
      <FeaturedProjects />
      <Skills />
      <CurrentlyExploring />
      <Education />
      <About />
      <Contact />
    </>
  );
}

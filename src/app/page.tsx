import {
  Hero,
  About,
  Education,
  Skills,
  ExperienceSection,
  FeaturedProjects,
  Contact,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <ExperienceSection />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
}

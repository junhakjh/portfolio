import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Projects from '@/components/Projects/ProjectsSection';

export default function Page() {
  return (
    <div>
      <Home />
      <div className='bg-background px-96'>
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

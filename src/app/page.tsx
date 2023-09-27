import AboutMe from '@/components/AboutMe';
import Home from '@/components/Home';
import Projects from '@/components/Projects/ProjectsSection';

export default function Page() {
  return (
    <div>
      <Home />
      <div className='bg-background px-96'>
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
}

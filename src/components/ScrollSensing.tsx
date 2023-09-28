'use client';

import { useEffect, useRef } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import ProjectsSection from './Projects/ProjectsSection';
import { useRecoilValue } from 'recoil';
import { NavigationState, navigationState } from '@/recoil/navigationAtom';
import moveScroll from '@/util/moveScroll';

export default function ScrollSensing() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const curMenu = useRecoilValue<NavigationState>(navigationState);

  useEffect(() => {
    switch (curMenu) {
      case 'Home':
        moveScroll(homeRef);
        break;
      case 'Projects':
        moveScroll(projectsRef);
        break;
      case 'About me':
        moveScroll(aboutMeRef);
        break;
      case 'Contact':
        moveScroll(contactRef);
        break;
    }
  }, [curMenu]);

  return (
    <ul>
      <Home homeRef={homeRef} />
      <div className='bg-background w-full'>
        <div className='mx-auto xl:w-[60rem] md:w-[50rem] w-full md:px-0 px-6'>
          <ProjectsSection projectsRef={projectsRef} />
          <AboutMe aboutMeRef={aboutMeRef} />
          <Contact contactRef={contactRef} />
        </div>
      </div>
    </ul>
  );
}

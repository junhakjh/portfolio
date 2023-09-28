'use client';

import { ProjectInfoType } from '@/model/project';
import FadeReveal from '../reveal/FadeReveal';
import CategoryTitle from '../typography/CategoryTitle';
import ProjectInfo from './ProjectInfo';
import useSWR from 'swr';

type Props = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectsSection({ projectsRef }: Props) {
  const { data } = useSWR<ProjectInfoType[]>('/api/projects');

  return (
    <section className='py-24' ref={projectsRef}>
      <FadeReveal>
        <CategoryTitle>Projects</CategoryTitle>
      </FadeReveal>
      {data && (
        <ul>
          {data.map((project, index) => (
            <li key={index}>
              <FadeReveal>
                <ProjectInfo data={project} isLast={index === data.length - 1} />
              </FadeReveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

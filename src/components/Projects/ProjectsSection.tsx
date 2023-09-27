'use client';

import { ProjectInfoType } from '@/model/project';
import FadeReveal from '../reveal/FadeReveal';
import CategoryTitle from '../typography/CategoryTitle';
import ProjectInfo from './ProjectInfo';
import useSWR from 'swr';

export default function ProjectsSection() {
  const { data } = useSWR<ProjectInfoType[]>('/api/projects');

  return (
    <section className='py-24'>
      <CategoryTitle>Projects</CategoryTitle>
      {/* <FadeReveal> */}
      {data && (
        <ul>
          {data.map((project, index) => (
            <li key={index}>
              <ProjectInfo data={project} />
            </li>
          ))}
        </ul>
      )}
      {/* </FadeReveal> */}
    </section>
  );
}

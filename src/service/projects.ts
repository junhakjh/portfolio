import { ProjectInfoType } from '@/model/project';
import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export const getProjects = async () => {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  return readFile(filePath, 'utf-8').then<ProjectInfoType[]>(JSON.parse);
};

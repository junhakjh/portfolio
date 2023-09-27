import { getProjects } from '@/service/projects';
import { NextResponse } from 'next/server';

export async function GET() {
  return getProjects().then((data) => NextResponse.json(data));
}

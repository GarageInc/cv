import type { Project } from './resumeData';

export interface ResumeProfile {
  name: string;
  initials: string;
  location: string;
  contact: {
    telegram: string;
    email: string;
    linkedin: string;
    github: string;
  };
  projects: Project[];
}

// Personal information belongs only to the main page's entry point.
// The anonymous page never imports this module at runtime.
export const profileData: ResumeProfile = {
  name: 'Rinat Fihtengolts',
  initials: 'RF',
  location: 'Dubai, UAE',
  contact: {
    telegram: 'https://t.me/rfihtengolts',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },
  projects: [
    {
      name: 'Rust stream consumer',
      url: 'https://github.com/GarageInc/stream-consumer',
      description: 'Public code sample: Tokio, at-least-once processing, idempotent writes, backpressure and graceful shutdown.',
    },
  ],
};

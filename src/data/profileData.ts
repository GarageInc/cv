export interface ResumeProfile {
  name: string;
  initials: string;
  location: string;
  googleDocsUrl?: string;
  contact: {
    telegram: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

// Personal information belongs only to the main page's entry point.
// The anonymous page never imports this module at runtime.
export const profileData: ResumeProfile = {
  name: 'Rinat Fihtengolts',
  initials: 'RF',
  location: 'Dubai, UAE',
  googleDocsUrl: 'https://docs.google.com/document/d/1KZ1LqlrReOTqxsUlWmWCTu0w60O-I-4kw_MlfuNSx0w/edit',
  contact: {
    telegram: 'https://t.me/rfihtengolts',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },
};

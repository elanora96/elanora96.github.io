declare module 'posting' {
  import { Dayjs } from 'dayjs';

  export interface BlogPost {
    postName: string;
    date: Dayjs;
    postIndexPath: string;
    description?: string;
  }

  export interface Project extends BlogPost {
    externalLink?: string | string[];
    collectedPosts?: BlogPost[];
    tags?: string[];
  }
}

declare module 'resume' {
  export interface Profile {
    network: string;
    username?: string;
    url: string;
  }

  export interface Location {
    city: string;
    countryCode: string;
    region: string;
  }

  export interface Basics {
    name: string;
    image?: string;
    pronouns?: string[];
    label: string;
    email: string;
    summary: string;
    location: Location;
    profiles: Profile[];
  }

  export interface Experience {
    organization: string;
    location: string | Location;
    area: string;
    url?: string;
    startDate: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
  }

  export interface Skill {
    name: string;
    keywords?: string[];
    summary?: string;
  }

  export interface Language {
    language: string;
    fluency: string;
  }

  export interface Resume {
    revisionDate: string;
    basics: Basics;
    work: Experience[];
    volunteer?: Experience[];
    education?: Experience[];
    awards?: string[];
    publications?: string[];
    skills?: Skill[];
    languages?: Language[];
    interests?: Skill[];
  }
}

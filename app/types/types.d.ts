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

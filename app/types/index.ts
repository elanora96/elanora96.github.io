import { route } from '@react-router/dev/routes';

import { type BlogPost, type Project } from 'posting';

export class PostCollection {
  posts: BlogPost[] | Project[];

  constructor(posts: BlogPost[] | Project[]) {
    this.posts = posts;
  }

  getNestedRoutes() {
    return this.posts.map(({ postName, postIndexPath }) =>
      route(postName, postIndexPath),
    );
  }
}

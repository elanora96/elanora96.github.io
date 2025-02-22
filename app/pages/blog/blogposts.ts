export interface BlogPost {
  postName: string;
  date: string;
  blogPostIndexPath: string;
}

export const blogPosts: BlogPost[] = [
  {
    postName: 'This is a blog post',
    date: '2024-09-02 14:35:00',
    blogPostIndexPath: 'pages/blog/posts/test.mdx',
  },
  {
    postName: '28 Years Later',
    date: '2024-09-07 18:33:00',
    blogPostIndexPath: 'pages/blog/posts/28yearslater/28yearslater.mdx',
  },
];

export default blogPosts;

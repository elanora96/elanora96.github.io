import { type BlogPost } from 'posting';
import { PostCollection } from '../../types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('America/Los_Angeles');

export const blogPosts: BlogPost[] = [
  {
    postName: 'This is a blog post',
    date: dayjs('2024-09-02 14:35:00'),
    postIndexPath: 'pages/blog/posts/test.mdx',
    description: 'This is a test post',
  },
  {
    postName: '28 Years Later',
    date: dayjs('2024-09-07 18:33:00'),
    postIndexPath: 'pages/blog/posts/28yearslater/28yearslater.mdx',
    description: 'A once dynamic invite to my 28th Birthday Party',
  },
];

export const blogPostCollection = new PostCollection(blogPosts);

export default blogPosts;

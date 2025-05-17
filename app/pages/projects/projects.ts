import { type Project } from 'posting';
import { PostCollection } from '../../types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('America/Los_Angeles');

export const projects: Project[] = [
  {
    postName: 'qremote',
    date: dayjs(),
    postIndexPath: 'pages/projects/projects/qremote/qremote.mdx',
    description: '',
    externalLink: 'https://github.com/elanora96/qremote',
    tags: ['rust', 'nix', 'crossplatform'],
  },
  {
    postName: 'elanora.lol',
    date: dayjs(),
    postIndexPath: 'pages/projects/projects/qremote/qremote.mdx',
    description: '',
    externalLink: 'https://github.com/elanora96/qremote',
    tags: ['rust', 'nix', 'crossplatform'],
  },
  {
    postName: 'msn-show-source',
    date: dayjs(),
    postIndexPath: 'pages/projects/projects/qremote/qremote.mdx',
    description: '',
    externalLink: 'https://github.com/elanora96/qremote',
    tags: ['rust', 'nix', 'crossplatform'],
  },
];

export const projectPostCollection = new PostCollection(projects);

export default projectPostCollection;

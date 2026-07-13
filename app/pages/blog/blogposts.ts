import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { BlogPost } from "posting";
import { PostCollection } from "../../types";

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("America/Los_Angeles");

export const blogPosts: BlogPost[] = [
	{
		postName: "This is a blog post",
		date: dayjs("2024-09-02 14:35:00"),
		postIndexPath: "pages/blog/posts/test.mdx",
		description: "This is a test post",
	},
	{
		postName: "28 Years Later",
		date: dayjs("2024-09-07 18:33:00"),
		postIndexPath: "pages/blog/posts/28yearslater/28yearslater.mdx",
		description: "A once dynamic invite to my 28th Birthday Party",
	},
	{
		postName: "Using Dislocker To Mount Bitlocker Volumes",
		date: dayjs("2025-10-02 11:40:41"),
		postIndexPath: "pages/blog/posts/dislocker-notes.mdx",
		description: "I was having trouble finding documentation for `dislocker`",
	},
	{
		postName: "Installing 20 Years Of Fonts Ephemerally with Nix",
		date: dayjs("2026-07-12 15:11:07"),
		postIndexPath: "pages/blog/posts/nix-old-fonts.mdx",
		description: "A somewhat clean solution to too many fonts",
	},
];

export const blogPostCollection = new PostCollection(blogPosts);

export default blogPosts;

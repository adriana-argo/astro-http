import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
<<<<<<< HEAD
			link: `/blog/${post.slug}/`,
=======
			link: `/blog/${post.id}/`,
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
		})),
	});
}

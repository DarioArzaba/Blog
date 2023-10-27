/*
Get featured automatically (inside UL)
				{!posts.length && 'No posts found.'}
				{posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
					const { slug, date, title, } = frontMatter
					return ( <BlogPostCard key={slug} date={date} index={index + 1} title={title} slug={slug} /> );
				})}
*/

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import BlogPostCard from '@/components/BlogPostCard';

export const FeaturedPosts = [
	{ slug: 'random/jekylladventures', title: "Static Gen Jekyll 📚", date: '2022-06-27' },
	{ slug: 'programming/markdown', title: 'Markdown Example 📺', date: '2022-06-27' },
];

export default function Home({ posts }) {

	return (

		<>
		
		<PageSEO title={siteMetadata.title} description={siteMetadata.description} />
		
		<div className="divide-y divide-gray-700 dark:divide-gray-700">
			
			<div className="space-y-2 pt-6 pb-8 md:space-y-5">
				<h1 className="font-tags text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3x1 md:leading-14">
					Featured
				</h1>
			</div>

			<ul className="font-tags divide-y divide-gray-200 dark:divide-gray-700">
				<BlogPostCard key={FeaturedPosts[0].slug} date={FeaturedPosts[0].date} index={1} title={FeaturedPosts[0].title} slug={FeaturedPosts[0].slug} />
				<BlogPostCard key={FeaturedPosts[1].slug} date={FeaturedPosts[1].date} index={2} title={FeaturedPosts[1].title} slug={FeaturedPosts[1].slug} />
			</ul>

		</div>

		<a rel="me" href="https://mastodon.social/@DarioArzaba">.</a>

		</>
	)

}

import { defineConfig, passthroughImageService } from "astro/config";
import starlight from '@astrojs/starlight';

export default defineConfig({
	image: {
		service: passthroughImageService(),
	  },
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightLinksValidator from 'starlight-links-validator';
// import starlightPackageManagers from 'starlight-package-managers'; // Still has compatibility issues
import react from '@astrojs/react';
import { remarkBaseUrl } from './src/plugins/remark-base-url.ts';

const base = '/astro-opendocs-template';

// https://astro.build/config
export default defineConfig({
	site: 'https://svallory.github.io',
	base,
	prefetch: true,
	devToolbar: {
		enabled: true
	},
	markdown: {
		remarkPlugins: [[remarkBaseUrl, { base }]],
	},
	integrations: [
		react(),
		starlight({
			credits: true,

			title: 'My Documentation site',
			description: 'A beautiful documentation site built with Astro, Starlight and OpenDocs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/svallory/astro-opendocs-template' },
			],
			plugins: [
				starlightLlmsTxt(),
				starlightLinksValidator(),
				// starlightPackageManagers(), // Still has compatibility issues
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Components', slug: 'reference/components' },
					],
				},
			],
		}),
	],
});

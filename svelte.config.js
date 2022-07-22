import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			envPrefix: 'APATCOM_'

		}),
	}
};
export default config;

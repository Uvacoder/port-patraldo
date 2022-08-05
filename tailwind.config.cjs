const config = {
  content: [
        './node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}',
	  "./src/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    extend: {},
  },

  plugins: [
	          require('@brainandbones/skeleton/tailwind.cjs')

  ],
};

module.exports = config;

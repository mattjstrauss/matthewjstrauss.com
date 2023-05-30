/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Add packages here https://nextjs.org/docs/advanced-features/compiler#module-transpilation
	transpilePackages: ['@strauss/components'],
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};

module.exports = nextConfig;

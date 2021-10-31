module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `${process.env.API_URL}/:path*` || 'http://localhost:5000/:path*',
			},
		];
	},
};

const destination =
	process.env.NODE_ENV === 'production'
		? process.env.API_URL + '/:path*'
		: 'http://localhost:5000/:path*';

module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: destination,
			},
		];
	},
};

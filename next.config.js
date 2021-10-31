const destination =
	process.env.NODE_ENV === 'production'
		? process.env.API_URL + '/api/:path*'
		: 'http://localhost:5000/api/:path*';

module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: destination,
			},
		];
	},
};

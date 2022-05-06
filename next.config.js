/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

var genericConfig = {
  /* config options for all phases except development here */
  local : 'en-GH',
  basePath: '',
  webpack(config, {webpack},) {

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
   
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config;
  },
}

module.exports = nextConfig

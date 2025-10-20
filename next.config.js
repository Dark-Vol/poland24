/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]);
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Добавляем алиас для @firebase
    config.resolve.alias = {
      ...config.resolve.alias,
      '@firebase': require('path').resolve(__dirname, 'firebase.js'),
    };

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["poland24.com.ua"],
  },
};

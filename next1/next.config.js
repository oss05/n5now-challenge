/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    next2: `next2@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    next3: `next3@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "next1",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        exposes: {
          './i18n': './i18n.js', 
          './mainLayout': './layouts/mainLayout.jsx'
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
        shared:{
          "react-i18next": {
            singleton: true,
            requiredVersion: require("react-i18next").version,
          },
        }
      })
    );
    return config;
  },
};

module.exports = nextConfig;

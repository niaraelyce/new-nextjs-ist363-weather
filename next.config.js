module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/wn/**",
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enable WebAssembly experiments
    config.experiments = {
      asyncWebAssembly: true,
    };

    // Return the modified config
    return config;
  },
};

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

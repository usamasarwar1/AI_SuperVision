// /** @type {import('next').NextConfig} */
// import  config  from './next-i18next.config.js'; 
// const { i18n } = config;
// const nextConfig = {
//   images: {
//     domains: ['demo-egenslab.b-cdn.net'],
//   },
//   i18n,
//   reactStrictMode: true,
// };

// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);


  
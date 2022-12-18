/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ['static.mydomain.com'],
    disableStaticImages: true
},
  
  
}

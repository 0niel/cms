module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'mirea-strapi.s3.eu-west-2.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'mirea-strapi.s3.eu-west-2.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

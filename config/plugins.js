module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  // "import-export-entries": {
  //   enabled: true,
  // },
  "encryptable-field": {
    enabled: true,
  },
  scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
  upload: {
    config: {
      provider: "aws-s3-cdn",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        endpoint: env("AWS_ENDPOINT"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
        baseUrl: env("CDN_URL"), //optional
      },
    },
  },
});

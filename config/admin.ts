export default ({ env }) => ({
  auth: {
    secret: env("16cc37b1a32ee3411d5b73309b89f0e5dc17a1256e7a6aa2110b54f3771956d5"),
  },
  apiToken: {
    salt: env("183f5bcfb45272d3160153518d77dfdd6bacf2f1cc7f3ee3865219fad5822f7d"),
  },
  transfer: {
    token: {
      salt: env("e090de5f09a4896c976935921ee7cd16e3882c65b80be64ca5e4fa4f66c5f6c1"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});

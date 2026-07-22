import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    disable: process.env.NODE_ENV === "development",
})

export default withSerwist({
  // Your existing Next.js config
});

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

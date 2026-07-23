import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    disable: process.env.NODE_ENV === "development",
    additionalPrecacheEntries: [
        { url: "/", revision: crypto.randomUUID() }
    ]
})

export default withSerwist({
  // Your existing Next.js config
});

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

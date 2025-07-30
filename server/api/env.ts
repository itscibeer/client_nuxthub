// server/api/env.ts
export default defineEventHandler(() => {
  return {
    env: process.env.NODE_ENV,
    projectKey: process.env.NUXT_HUB_PROJECT_KEY,
  };
});

// NOTE: @about 17:00 -  minutes

import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-sharing-oryx-41733.upstash.io",
  token: process.env.REDIS_KEY!,
});

// const data = await redis.set("foo", "bar");

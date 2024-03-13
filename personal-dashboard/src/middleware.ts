// NOTE: @about 6:00 minutes
import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
  // Anytime the url is `http://localhost:3000/`, `req.nextUrl.pathname === "/"` will evaluates to `true`, it is truthy.
  if (req.nextUrl.pathname === "/") {
    // track analytics event
    // console.log("Tracking");
    // NOTE: @about ?:00 -  minutes
    try {
      // what are we going to track?
      //   pageview is our namespace that we are going to track
      //   namespace fancy word for event name
      analytics.track("pageview", { page: "/", country: req.geo?.country });
    } catch (error) {
      // fail silently
      console.log(error);
    }
  }
  return NextResponse.next();
}

// See NextJS documentation for why this is needed.
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const matcher = {
  matcher: ["/"],
};

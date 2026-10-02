import { describe, expect, it } from "vitest";

import { instagramFeedFrameClassName } from "@/components/InstagramFeed";

describe("InstagramFeed layout", () => {
  it("keeps the feed frame compact on desktop while preserving mobile width", () => {
    expect(instagramFeedFrameClassName).toContain("w-full");
    expect(instagramFeedFrameClassName).toContain("md:max-w-[760px]");
    expect(instagramFeedFrameClassName).toContain("md:mx-auto");
  });
});

import { describe, expect, it } from "vitest";

import nextConfig from "../../next.config";

describe("Next image configuration", () => {
  it("allows the quality used by portfolio image components", () => {
    expect(nextConfig.images?.qualities).toContain(90);
  });
});

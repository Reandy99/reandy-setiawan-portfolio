import { describe, expect, it } from "vitest";

import { navigation, siteConfig } from "@/content/site";

describe("site content", () => {
  it("keeps the canonical URL and primary navigation complete", () => {
    expect(siteConfig.baseUrl).toMatch(/^https:\/\//);
    expect(navigation.map((item) => item.sectionId)).toEqual([
      "home",
      "selected-work",
      "capabilities",
      "experience",
      "about",
      "contact",
    ]);
  });
});

import { describe, expect, it } from "vitest";

import { googleSearchConsoleVerificationToken } from "@/lib/search-console";

describe("googleSearchConsoleVerificationToken", () => {
  it("keeps the Search Console verification token available to metadata", () => {
    expect(googleSearchConsoleVerificationToken).toBe(
      "30XCYhRWOJqUiIRqDwkUeVX92AORNjlgD-l6lZ6uFSU",
    );
  });
});

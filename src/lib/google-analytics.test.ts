import { describe, expect, it } from "vitest";

import {
  googleAnalyticsScriptStrategy,
  isGoogleAnalyticsMeasurementId,
} from "@/lib/google-analytics";

describe("isGoogleAnalyticsMeasurementId", () => {
  it("accepts a GA4 measurement ID", () => {
    expect(isGoogleAnalyticsMeasurementId("G-MPV5EP403P")).toBe(true);
  });

  it("rejects values that are not GA4 measurement IDs", () => {
    expect(isGoogleAnalyticsMeasurementId("UA-12345-1")).toBe(false);
    expect(isGoogleAnalyticsMeasurementId("G-INVALID-ID")).toBe(false);
    expect(isGoogleAnalyticsMeasurementId(undefined)).toBe(false);
  });

  it("loads the tag in the document head for Search Console verification", () => {
    expect(googleAnalyticsScriptStrategy).toBe("beforeInteractive");
  });
});

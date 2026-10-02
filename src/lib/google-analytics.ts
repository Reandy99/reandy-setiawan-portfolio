export const googleAnalyticsScriptStrategy = "beforeInteractive";

export function isGoogleAnalyticsMeasurementId(value: string | undefined) {
  return /^G-[A-Z0-9]+$/.test(value ?? "");
}

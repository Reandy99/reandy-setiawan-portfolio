import Script from "next/script";

import {
  googleAnalyticsScriptStrategy,
  isGoogleAnalyticsMeasurementId,
} from "@/lib/google-analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!isGoogleAnalyticsMeasurementId(measurementId)) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy={googleAnalyticsScriptStrategy}
      />
      <Script id="google-analytics" strategy={googleAnalyticsScriptStrategy}>
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${measurementId}");`}
      </Script>
    </>
  );
}

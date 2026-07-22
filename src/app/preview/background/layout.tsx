import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackgroundPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

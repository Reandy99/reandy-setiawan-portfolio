import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MotionPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

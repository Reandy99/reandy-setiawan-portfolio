import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-sm uppercase tracking-[0.26em] text-[var(--color-muted)]">
        404
      </p>
      <h1 className="font-serif text-4xl text-[var(--color-foreground)]">
        Page not found
      </h1>
      <p className="max-w-md text-[var(--color-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="button-primary">
        Back to home
      </Link>
    </div>
  );
}

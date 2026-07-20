import Link from "next/link";
import type { Metadata } from "next";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[8rem] font-bold leading-none text-gradient sm:text-[12rem]">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-glow transition-all hover:brightness-110"
      >
        <Home className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  );
}

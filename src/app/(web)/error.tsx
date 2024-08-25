"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container mx-auto">
      <h2 className="font-heading mb-10 text-red-800">Something went wrong!</h2>
      <button onClick={() => reset()} className="btn-primary">
        Try Again
      </button>
    </section>
  );
}

"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="h-screen flex justify-center items-center flex-col">
          <h2 className="mb-4 text-center">
            Oops, Something went wrong. Please try
            <br />
            again later.
          </h2>
          <button
            className="px-3 py-2 bg-primary text-white rounded-3xl"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

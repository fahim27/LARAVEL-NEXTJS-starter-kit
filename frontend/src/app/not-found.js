import Link from "next/link";
import PublicLayout from "@/components/layouts/PublicLayout";

export default function NotFound() {
  return (
    <PublicLayout>
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh" }}
      >
        {/* 404 Code */}
        <h1 className="display-1 fw-bold text-dark mb-3">404</h1>

        {/* Title */}
        <h2 className="mb-3">Page Not Found</h2>

        {/* Description */}
        <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back Home Button */}
        <Link href="/" className="btn btn-primary px-4 py-2">
          Return Home
        </Link>
      </div>
    </PublicLayout>
  );
}

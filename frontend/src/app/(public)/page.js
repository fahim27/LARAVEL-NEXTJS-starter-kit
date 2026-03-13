export default function Home() {
  return (
    <div className="container py-5 text-center">
      {/* Main title */}
      <h1 className="mb-4">Full-Stack Starter Kit</h1>

      {/* Highlighted technologies */}
      <h2 className="mb-3 display-4 text-primary">Next.js</h2>
      <h2 className="mb-5 display-4 text-danger">Laravel</h2>

      {/* Short description */}
      <p className="text-muted fs-5">
        A production-ready starter kit providing secure authentication, user
        management, Google login, and API-based architecture using Laravel
        Sanctum. Skip repetitive setup and start building scalable web
        applications faster with clean code and modern best practices.
      </p>
    </div>
  );
}

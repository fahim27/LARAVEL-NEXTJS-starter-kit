// app/dashboard/UserDashboard.jsx
import React from "react";
import { getCookieFromServer } from "@/lib/utilities/serverCookie";
import { getUserDetails } from "@/lib/api/user";
import ErrorManager from "@/components/custom_error/ErrorManager";

export default async function UserDashboard() {
  const authToken = await getCookieFromServer();
  const {
    success,
    message,
    data: { user },
  } = await getUserDetails(authToken);

  if (!success) return <ErrorManager message={message} showPage={false} />;

  return (
    <main className="col-md-8 ms-sm-auto col-lg-10 px-md-4 py-4 ms-5">
      <h1 className="mb-4">User Dashboard</h1>

      {/* User Information Card */}
      <div className="card" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-primary text-white">
          User Information
        </div>
        <div className="card-body">
          <p>
            <strong>Name:</strong> {user.name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user.email || "N/A"}
          </p>
          <p>
            <strong>ID:</strong> {user.id || "N/A"}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {user.created_at
              ? new Date(user.created_at).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>
    </main>
  );
}

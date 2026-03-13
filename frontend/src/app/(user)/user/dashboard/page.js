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
      <div className="card">
        <div className="card-header">
          <h4>User Information</h4>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Name:</strong> {user.name || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Email:</strong> {user.email || "N/A"}
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Address:</strong> {user.address || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>City:</strong> {user.city || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>State:</strong> {user.state || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Postal Code:</strong> {user.postal_code || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Country:</strong> {user.country || "N/A"}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <strong>Joined:</strong>{" "}
              {user.created_at
                ? new Date(user.created_at).toLocaleDateString()
                : "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

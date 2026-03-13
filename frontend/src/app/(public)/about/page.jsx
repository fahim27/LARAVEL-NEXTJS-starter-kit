import React from "react";

export default function About() {
    return (
        <div className="container py-5">
            <h1 className="mb-4">About This Starter Kit</h1>

            <p>
                This starter kit is a modern full-stack authentication solution built
                using Next.js for the frontend and Laravel for the backend. It provides
                a clean and scalable foundation for developers who want to launch web
                applications quickly without rebuilding common authentication features
                from scratch.
            </p>

            <p>
                The project includes secure user registration, login, profile
                management, password reset, and change password functionality. With API
                based authentication using Laravel Sanctum, the system ensures a smooth
                and secure communication between frontend and backend.
            </p>

            <p>
                Designed with best development practices in mind, this starter kit helps
                developers focus on business logic instead of boilerplate setup. It is
                suitable for SaaS platforms, admin dashboards, client portals, and
                scalable production applications.
            </p>

            <p>
                Key features include reusable components, protected routes, API
                integration, responsive UI, and a flexible architecture that can be
                extended easily. Whether you are building a startup product or a client
                project, this starter kit saves time and accelerates development.
            </p>

            <p className="mt-4">
                Our goal is to provide a reliable, developer-friendly foundation that
                combines the power of Next.js and Laravel into a seamless full-stack
                experience.
            </p>
        </div>
    );
}
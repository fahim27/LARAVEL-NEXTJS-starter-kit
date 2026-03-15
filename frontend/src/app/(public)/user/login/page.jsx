import React from "react";
import LoginForm from "./form";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 420, width: "100%" }}>
                <h3 className="text-center mb-4">Welcome Back</h3>

                <LoginForm />
                

                {/* Register */}
                <p className="text-center mt-4 mb-0">
                    Don’t have an account?{" "}
                    <Link href="/user/register" className="text-decoration-none">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
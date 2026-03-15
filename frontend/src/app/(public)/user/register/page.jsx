import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

export default function Register() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 520, width: "100%" }}>
                <h3 className="text-center mb-4">Welcome Back</h3>

                <RegisterForm />
               

                {/* Register */}
                <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}
                    <Link href="/user/login" className="text-decoration-none">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
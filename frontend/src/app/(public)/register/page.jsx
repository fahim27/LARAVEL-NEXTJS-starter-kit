import React from "react";

export default function Register() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 420, width: "100%" }}>
                <h3 className="text-center mb-4">Welcome Back</h3>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Forgot */}
                <div className="text-end mb-3">
                    <a href="#" className="small text-decoration-none">
                        Forgot password?
                    </a>
                </div>

                {/* Login Button */}
                <button className="btn btn-primary w-100 mb-3">
                    Login
                </button>

                {/* Divider */}
                <div className="text-center text-muted mb-3">or</div>

                {/* Google Login */}
                <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        width="18"
                        height="18"
                    />
                    Continue with Google
                </button>

                {/* Register */}
                <p className="text-center mt-4 mb-0">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-decoration-none">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
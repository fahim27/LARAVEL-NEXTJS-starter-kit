import React from 'react'
import ForgetPasswordForm from './forgetPasswordForm'
import Link from 'next/link'

export default function ForGetPasswordPage() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 420, width: "100%" }}>
                <h3 className="text-center mb-4">Forget Password</h3>
                <ForgetPasswordForm />
                {/* Register */}
                <p className="text-center mt-4 mb-0">
                    <Link href="/user/login" className="text-decoration-none">
                        Back to Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'
import ResetPasswordFormPage from './resetPasswordFormPage'

export default function ResetPasswordPage() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 520, width: "100%" }}>
                <h3 className="text-center mb-4">Reset Password</h3>

                <ResetPasswordFormPage />

               
            </div>
        </div>
    )
}

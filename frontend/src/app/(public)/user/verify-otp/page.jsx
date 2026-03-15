import React from 'react'
import VerifyFormPage from './verifyFormPage'
import Link from 'next/link'
import UserResendCodeButton from '@/components/button/userResendCodeButton'

export default function VerifyOtpPage() {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-sm p-4" style={{ maxWidth: 420, width: "100%" }}>
                <h3 className="text-center mb-4">Verify OTP</h3>
                <VerifyFormPage />
               
            </div>
        </div>
    )
}

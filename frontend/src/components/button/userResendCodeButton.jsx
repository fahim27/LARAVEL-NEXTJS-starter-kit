'use client';
import React from 'react'
import toast from 'react-hot-toast';
import { resendUserOtp } from '@/lib/api/user_password_reset';

export default function UserResendCodeButton({ email }) {
    const userResendOtp = async () => {
        const { success, message } = await resendUserOtp({ email });
        if (success) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }
    return (
        <a role='button' className="text-decoration-none" onClick={userResendOtp}>
            Resent OTP
        </a>
    )
}

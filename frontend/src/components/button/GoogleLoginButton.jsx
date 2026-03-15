"use client";
import { attemptUserGoogleLogin } from '@/lib/api/user';
import { GoogleLogin } from '@react-oauth/google'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function GoogleLoginButton() {
    const router = useRouter();
    const handleSuccess = async (credentialResponse) => {
        const googleToken = credentialResponse.credential;
        const { success, message, data } = await attemptUserGoogleLogin(googleToken);
        if (!success) return toast.error(message);
        Cookies.set("auth_token", data.token, {
            expires: 7,
            sameSite: "lax"
        });
        toast.success(message)
        router.push("/user/dashboard");
    };

    const handleFail = () => {
        toast.error("Google login failed");
    }

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleFail}
            size="large"
            width="380px"
            ux_mode="popup"
            logo_alignment="left"
        />
    )
}

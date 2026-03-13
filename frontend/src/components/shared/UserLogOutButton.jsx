'use client';
import { userLogout } from '@/lib/api/user';
import Cookies from 'js-cookie';
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

export default function UserLogOutButton() {
    const router = useRouter();
    const userLogoutAction = async () => {
        const token = Cookies.get('auth_token') // => 'value'
        const { success, message } = await userLogout(token);
        if (success) {
            toast.success(message);
            Cookies.remove('auth_token');
            router.push("/login");
        }
    }
    return (
        <button className="nav-link text-white" onClick={userLogoutAction}>
            Logout
        </button>
    )
}

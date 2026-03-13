import React from 'react'
import ChangePasswordForm from './changePasswordForm'
import { getCookieFromServer } from '@/lib/utilities/serverCookie';

export default async function ChangePasswordPage() {
    const authToken = await getCookieFromServer();
    return (
        <main className="col-md-8 ms-sm-auto col-lg-10 px-md-4 py-4 ms-5">
            <h1 className="mb-4">Change Password</h1>
            <ChangePasswordForm authToken={authToken} />
        </main>
    )
}

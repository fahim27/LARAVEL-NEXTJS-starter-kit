import Link from 'next/link'
import React from 'react'
import UserLogOutButton from './UserLogOutButton'

export default function UserSideBar() {
    return (
        <>
            {/* Sidebar */}
            <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar collapse p-3 mt-5">
                <h4 className="text-center mb-4">Dashboard</h4>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link href="/user/dashboard" className="nav-link text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link href="/user/profile" className="nav-link text-white">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link href="/user/change-password" className="nav-link text-white">
                            Change Password
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <UserLogOutButton />
                    </li>
                </ul>
            </nav>
        </>
    )
}

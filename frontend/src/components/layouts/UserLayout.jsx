import React from 'react'
import TopNav from '../shared/TopNav'
import UserSideBar from '../shared/UserSideBar'

export default function UserLayout({ children }) {
    return (
        <div className="container">
            <TopNav />
            <div className="container-fluid vh-50">
                <div className="row h-100">
                    <UserSideBar />
                    {/* Main Content */}
                    {children}
                </div>
            </div>
        </div>
    )
}

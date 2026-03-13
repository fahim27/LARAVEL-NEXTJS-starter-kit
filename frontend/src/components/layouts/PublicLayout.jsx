import React from 'react'
import TopNav from '../shared/TopNav'


export default function PublicLayout({ children }) {
    return (
        <div className="container">
            <TopNav />
            {children}
        </div>
    )
}

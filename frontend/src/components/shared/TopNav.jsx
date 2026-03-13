import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { getCookieFromServer } from '@/lib/utilities/serverCookie';
import UserLogOutButton from './UserLogOutButton';

export default async function TopNav() {
    const authToken = await getCookieFromServer();
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-white my-3 py-3 rounded px-3">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand" href="#">
                    <Image
                        src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                        width={50}
                        height={40}
                        alt="Picture of the author"
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/posts">Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/contact">Contact</Link>
                        </li>
                        {
                            authToken ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href="/user/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <UserLogOutButton btnClass="btn btn-danger" />
                                    </li>
                                </>
                            ) : <li className="nav-item">
                                <Link className="nav-link text-white" href="/user/login">Login</Link>
                            </li>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}

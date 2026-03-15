"use client";
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput from '@/components/ui/input/formikInput';
import { attemptUserLogin } from '@/lib/api/user';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import GoogleLoginButton from '@/components/button/GoogleLoginButton';

export default function LoginForm() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: Yup.string()
                .min(5, "Minimum 6 characters")
                .required("Password is required")
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await attemptUserLogin(values);
            if (!success) return toast.error(message);
            Cookies.set("auth_token", data.token, {
                expires: 7,
                sameSite: "lax"
            });
            toast.success(message)
            router.push("/user/dashboard");
        }
    });




    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <FormikInput formik={formik} name="email" placeholder="Enter your email" type="email" />
            </div>

            {/* Password */}
            <div className="mb-2">
                <label className="form-label">Password</label>
                <FormikInput formik={formik} name="password" placeholder="Enter your password" type="password" />
            </div>

            <div className="text-end mb-3">
                <a href="#" className="small text-decoration-none">
                    Forgot password?
                </a>
            </div>

            {/* Login Button */}
            <button type='submit' className="btn btn-primary w-100 mb-3">
                Login
            </button>

            <div className="text-center text-muted mb-3">or</div>

            <GoogleLoginButton />

        </form>
    )
}

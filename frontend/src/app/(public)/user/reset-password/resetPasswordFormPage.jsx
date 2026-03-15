"use client";
import FormikInput from '@/components/ui/input/formikInput'
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react'
import { userResetPassword, userVerifyOtp } from '@/lib/api/user_password_reset';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordFormPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const formik = useFormik({
        initialValues: {
            password: "",
            password_confirmation: "",
            email: searchParams.get("email") || ""
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
            password_confirmation: Yup.string()
                .required("Password confirmation is required")
                .oneOf([Yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await userResetPassword(values);
            if (!success) return toast.error(message);
            toast.success(message)
            router.push("/user/login");
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <FormikInput formik={formik} name="password" placeholder="Enter your new password" type="password" />
            </div>

            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <FormikInput formik={formik} name="password_confirmation" placeholder="Confirm your new password" type="password" />
            </div>


            {/* Login Button */}
            <button type='submit' className="btn btn-primary w-100 mb-3" disabled={formik.isSubmitting}>
                Reset Password
            </button>

            <p className="text-center mt-4 mb-0">
                <Link href="/user/login" className="text-decoration-none">
                    Back to Login
                </Link>
            </p>
        </form>
    )
}

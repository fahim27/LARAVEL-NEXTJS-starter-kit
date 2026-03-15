"use client";
import FormikInput from '@/components/ui/input/formikInput'
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react'
import { userVerifyOtp } from '@/lib/api/user_password_reset';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import UserResendCodeButton from '@/components/button/userResendCodeButton';

export default function VerifyFormPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const formik = useFormik({
        initialValues: {
            otp: "",
            email: searchParams.get("email") || ""
        },
        validationSchema: Yup.object({
            otp: Yup.number()
                .required("OTP is required"),
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await userVerifyOtp(values);
            if (!success) return toast.error(message);
            toast.success(message)
            router.push("/user/reset-password?email=" + values.email);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">OTP</label>
                <FormikInput formik={formik} name="otp" placeholder="Enter your OTP" type="number" />
            </div>

            {/* Login Button */}
            <button type='submit' className="btn btn-primary w-100 mb-3" disabled={formik.isSubmitting}>
                Verify OTP
            </button>

            {/* Register */}
            <div className="d-flex justify-content-between mt-1 ">
                <Link href="/user/login" className="text-decoration-none">
                    Back to Login
                </Link>

                <UserResendCodeButton email={formik.values.email} />

            </div>
        </form>
    )
}

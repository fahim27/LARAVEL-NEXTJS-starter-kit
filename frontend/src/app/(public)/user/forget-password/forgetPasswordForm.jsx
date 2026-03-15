"use client";
import FormikInput from '@/components/ui/input/formikInput'
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react'
import { userFindAccount } from '@/lib/api/user_password_reset';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ForgetPasswordForm() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required")
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await userFindAccount(values);
            if (!success) return toast.error(message);
            toast.success(message)
            router.push("/user/verify-otp?email=" + values.email);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <FormikInput formik={formik} name="email" placeholder="Enter your email" type="email" />
            </div>

            {/* Login Button */}
            <button type='submit' className="btn btn-primary w-100 mb-3" disabled={formik.isSubmitting}>
                Find Account
            </button>
        </form>
    )
}

"use client";
import FormikInput from '@/components/ui/input/formikInput'
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { attemptUserRegistration } from '@/lib/api/user';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '@/components/button/GoogleLoginButton';
export default function RegisterForm() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Minimum 3 characters")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: Yup.string()
                .min(5, "Minimum 6 characters")
                .required("Password is required"),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm password is required")
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await attemptUserRegistration(values);
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
        <form className='row gy-3' onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div className="form-group col-12">
                <label className="form-label">Name</label>
                <FormikInput formik={formik} name="name" placeholder="Enter your name" type="text" />
            </div>
            <div className="form-group col-12">
                <label className="form-label">Email</label>
                <FormikInput formik={formik} name="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="form-group col-12">
                <label className="form-label">Password</label>
                <FormikInput formik={formik} name="password" placeholder="Enter your password" type="password" />
            </div>

            <div className="form-group col-12">
                <label className="form-label"> Password</label>
                <FormikInput formik={formik} name="password" placeholder="Enter your password" type="password" />
            </div>
            <div className="form-group col-12">
                <div className='d-flex gap-2 justify-content-between'>
                    <label className="form-label">Confirm Password</label>
                    <a href="#" className="small text-decoration-none">
                        Forgot password?
                    </a>
                </div>
                <FormikInput formik={formik} name="password_confirmation" placeholder="Confirm your password" type="password" />
            </div>
            <div className="col-12">
                <button className="btn btn-primary w-100 mb-3" disabled={formik.isSubmitting} type='submit'>
                    Register
                </button>
            </div>
            {/* Divider */}
            <div className="text-center text-muted mb-3">or</div>

            {/* Google Login */}
            <GoogleLoginButton />
        </form>
    )
}

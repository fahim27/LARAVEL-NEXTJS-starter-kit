'use client';
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { userChangePassword } from '@/lib/api/user';
import FormikInput from '@/components/ui/input/formikInput';
import toast from 'react-hot-toast';

export default function ChangePasswordForm({ authToken }) {
    const formik = useFormik({
        initialValues: {
            current_password: '',
            password: '',
            password_confirmation: '',
        },
        validationSchema: Yup.object({
            current_password: Yup.string().required('Current password is required'),
            password: Yup.string()
                .min(5, 'Password must be at least 8 characters')
                .required('New password is required'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Please confirm your new password'),
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await userChangePassword(authToken, values);
            if (!success) return toast.error(message);
            toast.success(message)
        },
    });
    return (
        <div className='card'>
            <div className="card-header bg-primary text-white">
                Change Password
            </div>
            <div className="card-body">
                <form onSubmit={formik.handleSubmit} className='row gy-3'>
                    <div className='col-12'>
                        <label className='form-label' htmlFor="current_password">Current Password</label>
                        <FormikInput formik={formik} name="current_password" placeholder="Enter your current password" type="password" />
                    </div>
                    <div className='col-12'>
                        <label className='form-label' htmlFor="password">New Password</label>
                        <FormikInput formik={formik} name="password" placeholder="Enter your new password" type="password" />
                    </div>
                    <div className='col-12'>
                        <label className='form-label' htmlFor="password_confirmation">Confirm New Password</label>
                        <FormikInput formik={formik} name="password_confirmation" placeholder="Confirm your new password" type="password" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Update Password</button>
                </form>
            </div>
        </div>
    )
}

'use client'
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput from '@/components/ui/input/formikInput';
import { userUpdateUserProfile } from '@/lib/api/user';
import toast from 'react-hot-toast';
export default function UpdateForm({ user, authToken }) {
    const formik = useFormik({
        initialValues: {
            name: user.name || "",
            email: user.email || "",
            address: user.address || "",
            city: user.city || "",
            state: user.state || "",
            postal_code: user.postal_code || "",
            country: user.country || ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            address: Yup.string()
                .required("Address is required"),
            city: Yup.string()
                .required("City is required"),
            state: Yup.string()
                .required("State is required"),
            postal_code: Yup.string()
                .required("Postal code is required"),
            country: Yup.string()
                .required("Country is required")
        }),
        onSubmit: async (values) => {
            const { success, message, data } = await userUpdateUserProfile(authToken, values);
            console.log('this is message', message);
            if (!success) return toast.error(message);
            toast.success(message)

        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className='row gy-3'>
            <div className="form-group col-12">
                <label className='form-label' htmlFor="name">Name</label>
                <FormikInput formik={formik} name="name" placeholder="Enter your name" type="text" />
            </div>
            <div className="form-group col-12">
                <label className='form-label' htmlFor="email">Email address</label>
                <FormikInput formik={formik} name="email" placeholder="Enter your email" type="email" />
            </div>

            <div className="form-group col-12">
                <label className='form-label' htmlFor="address">Address</label>
                <FormikInput formik={formik} name="address" placeholder="Enter address" type="text" />
            </div>
            <div className="form-group col-12">
                <label className='form-label' htmlFor="city">City</label>
                <FormikInput formik={formik} name="city" placeholder="Enter city" type="text" />
            </div>
            <div className="form-group col-6">
                <label className='form-label' htmlFor="state">State</label>
                <FormikInput formik={formik} name="state" placeholder="Enter state" type="text" />
            </div>
            <div className="form-group col-6">
                <label className='form-label' htmlFor="postcode">PostCode</label>
                <FormikInput formik={formik} name="postal_code" placeholder="Enter postcode" type="text" />
            </div>

            <div className="form-group col-12">
                <label className='form-label' htmlFor="country">Country</label>
                <FormikInput formik={formik} name="country" placeholder="Enter country" type="text" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}

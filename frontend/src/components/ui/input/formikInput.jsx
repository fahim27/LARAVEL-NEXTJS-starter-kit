import React from 'react'

export default function FormikInput({ formik, name, placeholder, type = "text" }) {
    return (
        <>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                name={name}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="text-danger">{formik.errors[name]}</div>
            )}
        </>
    )
}

import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navg = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navg("/")
        }, 1000)
    }, [])
    return (
        <div><h1>NotFound Page</h1></div>
        // <Navigate to="/" />
    )
}

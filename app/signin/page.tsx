"use client"
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center h-full"><SignIn /></div>
    )
}

export default SignInPage;
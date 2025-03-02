"use client";
import dynamic from "next/dynamic";

// Dynamically import SignupForm as a pure client component
const SignupForm = dynamic(() => import("./SignupForm"), { ssr: false });

export default function SignupPage() {
    return <SignupForm />;
}

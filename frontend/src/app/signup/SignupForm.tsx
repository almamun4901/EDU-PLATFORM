"use client";  // ✅ Ensure this is a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/api/auth";

export default function SignupForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "student" });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await register(formData);
            router.push("/login");
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "error" in error) {
                setError((error as { error: string }).error);
            } else {
                setError("Signup failed.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded"
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded"
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded"
                        required 
                    />
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded"
                    >
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    <button type="submit" className="w-full bg-blue-500 text-black p-2 rounded">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

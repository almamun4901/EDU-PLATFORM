"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserProfile, updateUserProfile } from "@/api/auth";

interface UserProfile {
    username: string;
    email: string;
    role: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userData = await getUserProfile();
                setProfile(userData);
                setFormData({ username: userData.username, email: userData.email, password: "" });
            } catch {
                router.push("/login"); // Redirect if not logged in
            }
        };

        fetchProfile();
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            await updateUserProfile(formData);
            setMessage("Profile updated successfully!");
        } catch {
            setMessage("Failed to update profile.");
        }
    };

    if (!profile) {
        return <p className="text-center mt-10 text-lg">Loading profile...</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800">User Profile</h2>
                <p className="text-center text-gray-500">Role: {profile.role}</p>

                {message && <p className="text-center text-green-600 mt-4">{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                        placeholder="New Password (leave blank to keep current)"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Save Changes
                    </button>
                </form>

                <button
                    className="mt-4 w-full bg-red-500 text-white p-2 rounded"
                    onClick={() => router.push("/dashboard")}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

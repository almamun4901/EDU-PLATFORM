"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            router.push("/login"); // Redirect to login if no token
        } else {
            setUserAuthenticated(true);
        }
    }, [router]);

    if (!userAuthenticated) {
        return <p className="text-center mt-10 text-lg">Redirecting...</p>;
    }

    // return (
    //     <div className="flex justify-center items-center h-screen bg-gray-100">
    //         <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
    //             <h2 className="text-2xl font-semibold mb-4">Welcome to Dashboard</h2>
    //             <p className="text-gray-600">You are successfully logged in.</p>

    //             <button
    //                 className="mt-6 w-full bg-red-500 text-white p-2 rounded"
    //                 onClick={() => {
    //                     localStorage.removeItem("access_token"); // Remove token
    //                     localStorage.removeItem("refresh_token");
    //                     router.push("/login"); // Redirect to login
    //                 }}
    //             >
    //                 Logout
    //             </button>
    //         </div>
    //     </div>
    // );

    return (
        <div className="min-h-screen bg-gradient-to-r from-black-500 to-grey-600 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h2>
                <p className="text-gray-600 mt-2">You are successfully logged in.</p>

                {/* User Profile Card */}
                <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
                    <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
                            👤
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-semibold text-gray-700">User: <span className="text-blue-600">John Doe</span></p>
                            <p className="text-sm text-gray-500">Email: johndoe@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 space-y-3">
                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition duration-200"
                        onClick={() => router.push("/profile")}
                    >
                        View Profile
                    </button>

                    <button
                        className="w-full bg-gray-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition duration-200"
                        onClick={() => router.push("/settings")}
                    >
                        Settings
                    </button>

                    {/* Logout Button */}
                    <button
                        className="w-full bg-red-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-red-600 transition duration-200"
                        onClick={() => {
                            localStorage.removeItem("access_token");
                            localStorage.removeItem("refresh_token");
                            router.push("/login");
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

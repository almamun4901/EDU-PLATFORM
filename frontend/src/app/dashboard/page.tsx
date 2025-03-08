"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            router.push("/login");
        } else {
            setUserAuthenticated(true);
        }
    }, [router]);

    // if (!userAuthenticated) {
    //     return <p className="text-center mt-10 text-lg">Redirecting...</p>;
    // }

    // return (
    //     <div className="min-h-screen bg-gradient-to-r from-black-500 to-grey-600 flex items-center justify-center">
    //         <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
    //             <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h2>
    //             <p className="text-gray-600 mt-2">You are successfully logged in.</p>

    //             {/* User Profile Card */}
    //             <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
    //                 <div className="flex items-center space-x-4">
    //                     <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
    //                         👤
    //                     </div>
    //                     <div className="text-left">
    //                         <p className="text-lg font-semibold text-gray-700">User: <span className="text-blue-600">John Doe</span></p>
    //                         <p className="text-sm text-gray-500">Email: johndoe@example.com</p>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Navigation Buttons */}
    //             <div className="mt-6 space-y-3">
    //                 <button
    //                     className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition duration-200"
    //                     onClick={() => router.push("/profile")}
    //                 >
    //                     View Profile
    //                 </button>

    //                 <button
    //                     className="w-full bg-gray-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition duration-200"
    //                     onClick={() => router.push("/settings")}
    //                 >
    //                     Settings
    //                 </button>

    //                 {/* Logout Button */}
    //                 <button
    //                     className="w-full bg-red-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-red-600 transition duration-200"
    //                     onClick={() => {
    //                         localStorage.removeItem("access_token");
    //                         localStorage.removeItem("refresh_token");
    //                         router.push("/login");
    //                     }}
    //                 >
    //                     Logout
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );

    
    if (!userAuthenticated) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-slate-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-700 font-medium">Authenticating...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-64 bg-white shadow-lg hidden lg:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600">Dash<span className="text-slate-800">Board</span></h1>
                </div>
                
                <div className="px-4 py-6 border-t border-slate-100">
                    <div className="flex items-center px-2">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-xl">
                            JD
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-800">John Doe</p>
                            <p className="text-xs text-slate-500">Administrator</p>
                        </div>
                    </div>
                </div>

                <nav className="px-4 py-4 flex-1 overflow-y-auto">
                    <div className="space-y-1">
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            Dashboard
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg" onClick={(e) =>{e.preventDefault(); router.push("/profile");}}>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Profile
                        </a>
                        
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Calendar
                        </a>
                        
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                            </svg>
                            Messages
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            Tasks
                        </a>
                        
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Settings
                        </a>
                    </div>
                </nav>
                
                {/* logout button container */}
                <div className="px-4 mt-auto my-4 w-64 ">
                    <button
                        onClick={() => {
                            localStorage.removeItem("access_token");
                            localStorage.removeItem("refresh_token");
                            router.push("/login");
                        }}
                        className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Logout
                    </button>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold text-indigo-600">Dash<span className="text-slate-800">Board</span></h1>
                    <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 min-w-0">
                <div className="px-6 py-8 pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 max-w-full">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">Welcome back, John!</h2>
                            <p className="text-slate-500 mt-1">Here what happening with your projects today.</p>
                        </div>
                        <div className="mt-4 lg:mt-0 flex space-x-3">
                            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Export
                            </button>
                            <button className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                Add Project
                            </button>
                        </div>
                    </div>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 overflow-x-auto">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Total Projects</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">24</h3>
                                </div>
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-green-500 text-sm font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                    </svg>
                                    12.5%
                                </span>
                                <span className="text-slate-400 text-sm ml-2">from last month</span>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">In Progress</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">8</h3>
                                </div>
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-yellow-500 text-sm font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                                    </svg>
                                    0%
                                </span>
                                <span className="text-slate-400 text-sm ml-2">same as last week</span>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Completed</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">16</h3>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-green-500 text-sm font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                    </svg>
                                    18.2%
                                </span>
                                <span className="text-slate-400 text-sm ml-2">from last month</span>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Team Members</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">12</h3>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-green-500 text-sm font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                    </svg>
                                    2
                                </span>
                                <span className="text-slate-400 text-sm ml-2">new this month</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="mb-8 w-full max-w-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-800">Recent Projects</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-xs font-semibold text-slate-500 border-b border-slate-200">
                                        <th className="px-4 py-3">Project</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Completion</th>
                                        <th className="px-4 py-3">Due Date</th>
                                        <th className="px-4 py-3">Team</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="text-sm text-slate-700">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                                    </svg>
                                                </div>
                                                <span className="font-medium">Website Redesign</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                            </div>
                                            <span className="text-xs text-slate-500 mt-1 block">65%</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span>Oct 25, 2023</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex -space-x-2">
                                                <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">JD</div>
                                                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">AM</div>
                                                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">RK</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="text-slate-400 hover:text-indigo-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    
                                    <tr className="text-sm text-slate-700">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                                    </svg>
                                                </div>
                                                <span className="font-medium">Mobile App Development</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                            <span className="text-xs text-slate-500 mt-1 block">100%</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span>Oct 15, 2023</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex -space-x-2">
                                                <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">JD</div>
                                                <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">TS</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="text-slate-400 hover:text-indigo-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    
                                    <tr className="text-sm text-slate-700">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mr-3">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                                    </svg>
                                                </div>
                                                <span className="font-medium">Marketing Campaign</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Delayed</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                            </div>
                                            <span className="text-xs text-slate-500 mt-1 block">30%</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span>Oct 10, 2023</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex -space-x-2">
                                                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">LW</div>
                                                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs font-bold">RJ</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="text-slate-400 hover:text-indigo-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Activity & Calendar Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full">
                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">Project completed</p>
                                        <p className="text-sm text-slate-500 mt-1">Mobile App Development has been marked as completed.</p>
                                        <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                                    </div>
                                </div>
                                
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">New comment</p>
                                        <p className="text-sm text-slate-500 mt-1">Alex Morgan commented on Website Redesign project.</p>
                                        <p className="text-xs text-slate-400 mt-1">5 hours ago</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">New milestone reached</p>
                                        <p className="text-sm text-slate-500 mt-1">Website Redesign project has reached 65% completion.</p>
                                        <p className="text-xs text-slate-400 mt-1">1 day ago</p>
                                    </div>
                                </div>
                                
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">Meeting scheduled</p>
                                        <p className="text-sm text-slate-500 mt-1">Project review meeting for Marketing Campaign scheduled.</p>
                                        <p className="text-xs text-slate-400 mt-1">2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Calendar / Upcoming */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-slate-800">Upcoming Deadlines</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View calendar</a>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                                        <span className="font-bold">25</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-slate-800">Website Redesign Deadline</p>
                                        <p className="text-xs text-slate-500">10:00 AM - 11:30 AM</p>
                                    </div>
                                    <div className="ml-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Soon
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                                        <span className="font-bold">28</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-slate-800">Client Presentation</p>
                                        <p className="text-xs text-slate-500">2:00 PM - 4:00 PM</p>
                                    </div>
                                    <div className="ml-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Planned
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                                        <span className="font-bold">02</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-slate-800">Team Retrospective</p>
                                        <p className="text-xs text-slate-500">11:00 AM - 12:30 PM</p>
                                    </div>
                                    <div className="ml-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Planned
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                                        <span className="font-bold">10</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-slate-800">Marketing Campaign Launch</p>
                                        <p className="text-xs text-slate-500">All day</p>
                                    </div>
                                    <div className="ml-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Critical
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full border-t border-slate-200 bg-white py-6 px-6">
                    <div className="text-center text-sm text-slate-500 mx-auto max-w-screen-2xl">
                        <p>© 2023 DashBoard. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

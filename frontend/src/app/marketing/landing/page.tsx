"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-purple-600">L<span className="text-purple-600">∞</span>P</div>
                    <div className="ml-6">
                        <button className="px-3 py-1 text-gray-700 font-medium flex items-center">
                            Courses <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="#" className="px-3 py-2 text-gray-700">Features</a>
                    <a href="#" className="px-3 py-2 text-gray-700">Templates</a>
                    <a href="#" className="px-3 py-2 text-gray-700">Pricing</a>
                    <a href="#" className="px-3 py-2 text-gray-700">Blog</a>
                    <button 
                        className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-md"
                        onClick={() => router.push("/register")}
                    >
                        Try Free
                    </button>
                </div>
            </nav>

            {/* Main Content with 75% Width */}
            <div className="w-3/4 mx-auto mt-10">
                {/* Hero Section */}
                <section className="py-16 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900">Welcome to EduPlatform</h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                        Learn from the best students worldwide. Get access to high-quality courses in programming, engineering, and job preparation.
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={() => router.push("/signup")}
                            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => router.push("/login")}
                            className="ml-4 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
                        >
                            Log In
                        </button>
                    </div>
                </section>

                {/* Popular Courses Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">POPULAR COURSES</h2>
                    
                    {/* Course Categories */}
                    <div className="flex mb-6 space-x-8">
                        {["CSE", "MATH", "EEE", "CIVIL", "Menu Item", "Menu Item"].map((category) => (
                            <button 
                                key={category} 
                                className="text-gray-700 font-medium hover:underline"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex justify-end mb-4 space-x-2">
                        <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Course Cards Grid */}
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            "The Future of Design with AI",
                            "Real-World Examples of AI Success Stories",
                            "Streamlining Creativity",
                            "Industry Applications of AI",
                            "Human-Centered Design and AI",
                            "Ethical Considerations in AI",
                        ].map((course, index) => (
                            <div 
                                key={index} 
                                className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
                                onClick={() => alert(`Clicked on ${course}`)}
                            >
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-800">{course}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-16">
                <div className="container mx-auto grid grid-cols-3 gap-8 p-12">
                    {/* Logo and Contact Info */}
                    <div>
                        <div className="text-2xl font-bold mb-6">A Studio</div>
                        <p className="text-gray-400">1777 West Street, Portland, OR 97205</p>
                        <p className="text-gray-400">(+1) 123 456 7893</p>
                        <p className="text-gray-400">name@email.com</p>
                    </div>

                    {/* Links */}
                    <div>
                        <ul className="space-y-3">
                            {["About", "Services", "Projects", "Contact"].map((link) => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Would you like to talk about your project?</h3>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get in touch</button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 py-4 text-sm text-gray-500 flex justify-center">
                    <p>© 2023 Brand, Inc.</p>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-gray-400">Privacy</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-gray-400">Terms</a>
                </div>
            </footer>
        </div>
    );
}

// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/accounts/";

// // Define user data structure
// interface UserData {
//     username: string;
//     email?: string;
//     password: string;
//     role?: string;
// }

// // Define the expected response from the API
// interface AuthResponse {
//     message: string;
//     token: string;
//     access_token?: string;  // ✅ Make tokens optional to prevent errors
//     refresh_token?: string;
    
// }

// // Define the expected structure of an API error
// export interface APIError {
//     error?: string;
// }

// // Function to register a new user
// export const register = async (userData: UserData): Promise<AuthResponse> => {
//     try {
//         const response = await axios.post<AuthResponse>(`${API_URL}register/`, userData);

//         if (response.data.access_token) {  // ✅ Ensure token exists before storing
//             localStorage.setItem("access_token", response.data.access_token);
//             localStorage.setItem("refresh_token", response.data.refresh_token || "");
//         }

//         return response.data;
//     } catch (error: unknown) {
//         if (axios.isAxiosError(error) && error.response) {
//             throw new Error(error.response.data?.error || "Registration failed");
//         } else {
//             throw new Error("Something went wrong");
//         }
//     }
// };

// // Function to login a user
// export const login = async (userData: Pick<UserData, "username" | "password">): Promise<AuthResponse> => {
//     try {
//         const response = await axios.post<AuthResponse>(`${API_URL}login/`, userData);

//         if (response.data.access_token) {  // ✅ Ensure token exists before storing
//             localStorage.setItem("access_token", response.data.access_token);
//             localStorage.setItem("refresh_token", response.data.refresh_token || "");
//         }

//         return response.data;
//     } catch (error: unknown) {
//         if (axios.isAxiosError(error) && error.response) {
//             throw new Error(error.response.data?.error || "Invalid credentials");
//         } else {
//             throw new Error("Something went wrong");
//         }
//     }
// };

// // Function to logout a user
// export const logout = (): void => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");
// };


import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/accounts/";

// Define user data structure
interface UserData {
    username: string;
    email?: string;
    password: string;
    role?: string;
}

// Define the expected response from the API
interface AuthResponse {
    message: string;
    access_token?: string;  // ✅ Make tokens optional
    refresh_token?: string;
}

// Define the expected structure of an API error
export interface APIError {
    error?: string;
}

// ✅ Function to register a new user
export const register = async (userData: UserData): Promise<AuthResponse> => {
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}register/`, userData);

        if (response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token || "");
        }

        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.error || "Registration failed");
        } else {
            throw new Error("Something went wrong");
        }
    }
};

// ✅ Function to login a user
export const login = async (userData: Pick<UserData, "username" | "password">): Promise<AuthResponse> => {
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}login/`, userData);

        if (response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token || "");
        }

        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.error || "Invalid credentials");
        } else {
            throw new Error("Something went wrong");
        }
    }
};

// ✅ Function to logout a user
export const logout = (): void => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

// ✅ Fetch user profile
export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("No token found");

        const response = await axios.get(`${API_URL}profile/`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw new Error("Failed to load profile");
    }
};

// ✅ Update user profile
export const updateUserProfile = async (data: { username?: string; email?: string; password?: string }) => {
    try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("No token found");

        const response = await axios.patch(`${API_URL}profile/`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw new Error("Failed to update profile");
    }
};


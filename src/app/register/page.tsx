"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("/api/auth/register", {
                name,
                email,
                password,
            });
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Register
                </h1>
                <form className="space-y-6" onSubmit={handleRegister}>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <p
                        className="text-sm text-center mt-1"
                        onClick={() => router.push("/login")}
                    >
                        Already have an account ?{" "}
                        <span className="text-blue-400 hover:underline cursor-pointer">
                            login
                        </span>
                    </p>

                    <button className="w-full py-2 px-4 bg-white text-black cursor-pointer font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                        Register
                    </button>
                </form>

                <div className="flex items-center gap-1.25 justify-center my-3.75">
                    <hr className="grow border-gray-50" />
                    <span>OR</span>
                    <hr className="grow border-gray-50" />
                </div>

                <button
                    className="w-full flex items-center justify-center font-semibold gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black cursor-pointer hover:bg-gray-300 transition-colors"
                    onClick={async () => {
                        await signIn("google", { callbackUrl: "/" });
                    }}
                >
                    <FcGoogle />
                    <span>Sign Up with Google</span>
                </button>
            </div>
        </div>
    );
}

export default Register;

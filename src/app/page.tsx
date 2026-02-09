"use client";

import { signOut } from "next-auth/react";
import { useContext } from "react";
import Image from "next/image";
import { BsPencil } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { userDataContext } from "../context/UserContext";

function Page() {
    const router = useRouter();

    const data = useContext(userDataContext);
    console.log(data);

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            {data && (
                <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center">
                    <BsPencil
                        size={22}
                        color="white"
                        className="absolute right-5 top-5 cursor-pointer"
                        onClick={() => router.push("/edit")}
                    />

                    {data.user?.image && (
                        <div className="relative w-50 h-50 border-2 border-white rounded-full overflow-hidden">
                            <Image src={data.user.image} fill alt="userImage" />
                        </div>
                    )}
                    <h1 className="text-white font-semibold my-4 text-2xl">
                        Welecome, {data.user?.name}
                    </h1>
                    <button
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-300 transition-colors font-semibold cursor-pointer"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}

            {!data && <div className="text-white text-2xl">Loading...</div>}
        </div>
    );
}

export default Page;

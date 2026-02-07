"use client";

import { userDataContext } from "@/context/UserContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

function Page() {
    const [name, setName] = useState("");
    const [frontendImage, setFrontendImage] = useState("");
    const [backendImage, setBackendImage] = useState<File>();
    const imageInput = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const data = useContext(userDataContext);


    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length == 0) return;
        const file = files[0];
        setBackendImage(file);
        setFrontendImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e:React.FormEvent) => {
        setLoading(true);
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            if(backendImage) {
                formData.append("file", backendImage);
            }
            const result = await axios.post('/api/edit', formData);

            data?.setUser(result.data);
            setLoading(false);

            router.push("/");

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    useEffect(() => {
        if (data) {
            setName(data?.user?.name || "");
            setFrontendImage(data?.user?.image as string);
        }
    }, [data?.user?.name, data?.user?.image]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-2">
                    Edit Profile
                </h1>
                <form className="space-y-2 flex flex-col w-full items-center" onSubmit={handleSubmit}>
                    <div
                        className="w-25 h-25 rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative"
                        onClick={() => imageInput.current?.click()}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            ref={imageInput}
                            onChange={handleImage}
                        />

                        {frontendImage ? (
                            <Image src={frontendImage} fill alt="image" />
                        ) : (
                            <CgProfile size={22} color="white" />
                        )}
                    </div>
                    <div className="w-full">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full border-b border-white py-1 px-1 bg-black text-white outline-none placeholder-gray-400"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <button className="w-full py-2 px-4 mt-5 bg-white text-black font-semibold rounded-lg cursor-pointer hover:bg-gray-200 transition-colors" disabled={loading}>
                        {loading ? "Loading..." : "Save"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;

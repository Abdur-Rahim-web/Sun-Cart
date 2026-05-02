"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    
    if (isPending) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    
    if (!user) {
        return <div className="text-center mt-10">Please login first</div>;
    }

    return (
        <div className="min-h-[80vh] flex justify-center items-center bg-slate-100">
            <Card className="min-h-[60vh] min-w-[60vh] p-6 flex flex-col items-center gap-4">

                
                {user.image && (
                    <Image
                        className="rounded-full mt-15"
                        src={user.image}
                        alt="User Avatar"
                        width={80}
                        height={80}
                    />
                )}

                
                <h2 className="font-semibold text-xl">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>

                
                <Link href={'/profile'}>
                    <Button className="bg-slate-100 text-blue-500">
                        Update your profile
                    </Button>
                </Link>

            </Card>
        </div>
    );
};

export default ProfilePage;
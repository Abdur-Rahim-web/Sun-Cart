"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log('user', user)
    return (
        <div className='min-h-[80vh] flex justify-center items-center bg-slate-100'>

            <Card className='min-h-[60vh] min-w-[60vh] '>
                <ul className="flex flex-col items-center gap-4 mt-20">

                    <Image className='rounded-full' src={user.image} alt='User Avatar' width={80} height={80}></Image>

                    <h2 className='font-semibold'>{user.name}</h2>

                    <p className='text-gray-500'>{user.email}</p>

                    <Button className="w-full bg-slate-100 text-blue-500">Update your profile</Button>
                </ul>
            </Card>
        </div>
    );
};

export default ProfilePage;
"use client";
import { authClient } from "@/lib/auth-client";
import {Button,Description,Form,Input,Label,TextField,} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const LogInPage = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm();

    const handleLoginFunction = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            alert("Login successfully");
            router.push("/"); 
            router.refresh();
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-8 rounded-2xl bg-white mt-10">
                <h2 className="font-bold text-2xl text-center mb-5">
                    Login Your Account
                </h2>

                <Form
                    className="flex w-96 flex-col gap-4"
                    onSubmit={handleSubmit(handleLoginFunction)}
                >
                    <TextField isRequired>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                    </TextField>

                    <TextField isRequired>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        <Description>Minimum 8 characters</Description>
                    </TextField>

                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </Form>

                <p className="mt-4">
                    Do not have an account?{" "}
                    <Link href="/register" className="text-blue-500">
                        Register
                    </Link>
                </p>

                <p className="m-4 text-center">or</p>

                <Button
                    onClick={handleGoogleSignIn}
                    className="w-full rounded-2xl p-3 bg-gray-100 text-blue-500 flex items-center justify-center gap-2"
                >
                    <FaGoogle /> Login with Google
                </Button>
            </div>
        </div>
    );
};

export default LogInPage;
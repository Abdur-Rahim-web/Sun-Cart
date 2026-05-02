"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const RegisterPage = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunction = async (data) => {
        const { email, password, name, photo } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photo,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            alert("Register successfully");
            router.push("/login");
        }
    };

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        });
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-8 rounded-2xl bg-white my-10">
                <h2 className="font-bold text-2xl text-center mb-5">
                    Register Your Account
                </h2>

                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit(handleRegisterFunction)}>
                    <TextField isRequired>
                        <Label>Name</Label>
                        <Input {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </TextField>

                    <TextField isRequired>
                        <Label>Photo URL</Label>
                        <Input {...register("photo", { required: "Photo URL is required" })} />
                        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                    </TextField>

                    <TextField isRequired>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </TextField>

                    <TextField isRequired>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum 8 characters",
                                },
                            })}
                        />
                        <Description>Must be at least 8 characters</Description>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </TextField>

                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                </Form>

                <p className="mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>

                <p className="m-4 text-center">or</p>

                <Button
                    onClick={handleGoogleSignUp}
                    className="w-full rounded-2xl p-3 bg-gray-100 text-blue-500 flex items-center justify-center gap-2"
                >
                    <FaGoogle /> Register with Google
                </Button>
            </div>
        </div>
    );
};

export default RegisterPage;
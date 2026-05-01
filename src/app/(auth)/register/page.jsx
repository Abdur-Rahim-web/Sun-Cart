"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleRegisterFunction = async(data) => {
        console.log(data)

        const { email, password, name, photo } = data;

        const { data:res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/login",
        });
        console.log(res,error)

        if(error){
            alert(error.message)
        }

        if(res){
            alert('Login successfully')
        }



    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-8 rounded-2xl bg-white'>
                <h2 className='font-bold text-2xl text-center mb-5'>Login Your Account</h2>

                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit(handleRegisterFunction)}>
                    <TextField isRequired>
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" {...register('name', { required: 'Name field is required' })} />
                        {errors.name && (<p className='text-red-500'>{errors.name.message}</p>)}
                    </TextField>

                    <TextField isRequired>
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter your photo url" {...register('photo', { required: 'Photo URL field is required' })} />
                        {errors.photo && (<p className='text-red-500'>{errors.photo.message}</p>)}
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" {...register('email')} />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" {...register('password')} />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <Button type="submit" className="w-full">
                        Register
                    </Button>

                </Form>

            </div>
        </div>
    );
};

export default RegisterPage;
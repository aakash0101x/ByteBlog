import React, { useState } from 'react';
import authService from '../appwrite/auth.js';
import { useForm } from 'react-hook-form';
import { Button, Input, Container, LoaderComponent } from '../components';

function UpdatePassword() {
    const [Loader, setLoader] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit } = useForm();

    const updatepsd = async (data) => {
        setLoader(true);
        setErrorMessage('');
        const status = await authService.updatePassword(data.current, data.new);
        setLoader(false);
        if (status) {
            setIsUpdated(true);
        } else {
            setErrorMessage('Failed to update password. Please try again.');
        }
    };

    if (Loader) {
        return (<div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Loading...
                    </h1>
                    <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
                </div>
            </Container>
        </div>)
    }

    if (!isUpdated) {
        return (
            <div className='w-80 m-auto py-8'>
                <form onSubmit={handleSubmit(updatepsd)}>
                    <div className='space-y-5'>
                        <Input
                            label="Current Password: "
                            placeholder="Enter your current Password"
                            type="password"
                            {...register("current", { required: true })}
                        />
                        <Input
                            label="New Password: "
                            type="password"
                            placeholder="Enter your New Password"
                            {...register("new", { required: true })}
                        />
                        <Button type="submit" className="w-full">
                            Change Password
                        </Button>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <Container>
                <div className='my-10 w-96  mx-auto text-2xl bg-green-500 text-white px-4 py-2 rounded-md shadow-md'>
                    Password Updated Successfully
                </div>
            </Container>
        );
    }
}

export default UpdatePassword;

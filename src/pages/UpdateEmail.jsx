import React, { useState } from 'react';
import authService from '../appwrite/auth.js';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../components';
import { Container } from "../components"

function UpdateEmail() {
    const [Loader, setLoader] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit } = useForm();

    const updatepsd = async (data) => {
        setLoader(true);
        setErrorMessage('');
        const status = await authService.updateEmail(data.current, data.new);
        setLoader(false);
        if (status) {
            setIsUpdated(true);
        } else {
            setErrorMessage('Failed to update email. Please try again.');
        }
    };

    if (Loader) {
        return (<div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Loading...
                        </h1>
                    </div>
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
                            label="Enter Password: "
                            placeholder="Enter your Password"
                            type="password"
                            {...register("current", { required: true })}
                        />
                        <Input
                            label="New Email: "
                            type="email"
                            placeholder="Enter your New Email"
                            {...register("new", { required: true })}
                        />
                        <Button type="submit" className="w-full">
                            Change Email
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
                    Email Updated Successfully
                </div>
            </Container>
        );
    }
}

export default UpdateEmail;

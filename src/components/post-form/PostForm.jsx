import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select, LoaderComponent } from ".."; 
import appwriteService from "../../appwrite/config"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    const [Loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        setLoader(true);
        if (!userData) {
            console.error("User data is not available");
            return;
        }

        try {
            if (!data.title || !data.content || !data.image[0]) {
                console.error("Please fill in all required fields.");
                return;
            }

            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.error("Failed to submit post:", error);
        }
        setLoader(false);
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    if (!userData) {
        return (
            <div className='text-center py-5'>
                <h1 className='text-3xl font-extralight'>Loading...</h1>
                <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
                <h1 className='text-2xl font-extralight'>If issue persists for long,Try reloading the page</h1>
            </div>
        )
    }
    if (Loader) {
        return (
            <div className='text-center py-5'>
                <h1 className='text-3xl font-extralight'>Loading...</h1>
                <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
                <h1 className='text-2xl font-extralight'>Be patient,we are uploading blog to database</h1>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2 min-w-80 m-auto mb-8">
                <Input
                    label="Title :"
                    placeholder="Enter Title"
                    className="mb-4"
                    {...register("title", { required: "Title is required." })}
                />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                <Input
                    label="Slug :"
                    placeholder="Slug will be automatically generated"
                    className="mb-4"
                    {...register("slug", { required: "Slug is required." })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {errors.slug && <span className="text-red-500">{errors.slug.message}</span>}
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                    rules={{ required: "Content is required." }} // Adding required rule for content
                />
            </div>
            <div className="w-1/3 px-2 min-w-80 mx-auto">
                <div>
                    <i>  we currently support only jpg,jpeg and png images</i>
                </div>
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg"
                    {...register("image", { required: "Featured Image is required." })}
                />
                {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: "Status is required." })}
                />
                {
                    errors.status && <span className="text-red-500">{errors.status.message}</span>
                }
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

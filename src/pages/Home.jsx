import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, LoaderComponent, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const status = useSelector(state => state.auth.status);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await appwriteService.getPosts();
                if (posts) {
                    setPosts(posts.documents);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        if (status) {
            fetchPosts();
        } else {
            setLoading(false);
        }
    }, [status]);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                        <div className="p-2 w-full">
                            <h1 className="text-2xl text-center font-bold hover:text-gray-500">
                                Loading...
                            </h1>
                            <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
                        </div>
                </Container>
            </div>
        );
    }

    if (status == false) {
        return (
            <div className="w-full h-full py-8 mt-4 text-center linear_grad">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-20 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    else if (posts.length === 0
    ) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                NO POSTS YET
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }


    return (
        
        <div className='w-full py-12 linear_grad'>
            
            <div className='text-center py-2'>
              <h1 className='text-3xl font-extralight text-white'><b>My Feed</b></h1>
            </div>

            <Container>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 lg:gap-8'>
                    {
                        posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default Home;

import React, { useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { Query } from 'appwrite';
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [Loader, setLoader] = useState(true)
    const userData = useSelector(state => state.auth.userData);
    const userId = userData ? userData.$id : null;
    appwriteService.getPosts([Query.equal("userId", userId)])
        .then(
            (posts) => {
                if (posts) {
                    setPosts(posts.documents)
                    setLoader(false)
                }
            }
        )

    if (Loader) {
        return (<div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap h-80">
                    <div className="p-2 w-full pt-20">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Loading...
                        </h1>
                        <h1 className="text-xl hover:text-gray-500">
                            If issue persists for long Try Reloading The Page
                        </h1>
                    </div>
                </div>
            </Container>
        </div>)
    }
    if (posts.length === 0) {
        return (
        <Container>
            <div className='text-center py-5 h-80'>
                <h1 className='text-3xl font-extralight pt-20'>You haven't posted any blog</h1>
            </div>
        </Container>
        )

    }
    return (
        <div className='w-full py-12'>
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
    )
}

export default AllPosts

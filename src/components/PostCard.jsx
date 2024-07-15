import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  return (
    <div className='duration-300 sm:hover:scale-110 lg:w-60 lg:h-60 lg:my-5'>
      <Link to={`/post/${$id}`}>

        <div className='bg-cyan-100 rounded-md flex flex-col justify-evenly items-center py-4'>

          <div className='rounded-2xl'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
              className='h-44 w-44 md:h-48 md:w-48 object-cover rounded-sm' />
          </div>

          <p className='text-lg w-44 h-14 text-center ellipsis-2-lines' >
            {title}
          </p>

        </div>

      </Link>
    </div>

  )
}


export default PostCard

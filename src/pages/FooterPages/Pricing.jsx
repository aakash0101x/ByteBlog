import React from 'react'

function Pricing() {
  return (
    <div className="bg-blue-500 text-white p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">
        Welcome to Our Free and Open Source Blogging Website!
      </h1>
      <p className="text-lg mb-4">
        We're excited to offer this platform for everyone to use, modify, and share. 
        Our goal is to foster a community of writers and developers who believe in the power of open source.
      </p>
      <p className="text-lg mb-4">
        Whether you're here to start your own blog, learn from our codebase, or contribute to the project, 
        we encourage you to explore and make the most of this resource.
      </p>
      <p className="text-lg mb-6">
        This project is licensed under the MIT License, meaning you can use it for both personal and commercial projects. 
        We appreciate any feedback or contributions you can provide to help make this platform even better.
      </p>
      <a
        href="https://github.com/your-repo-url"
        className="bg-yellow-300 text-blue-600 px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the Source Code on GitHub
      </a>
    </div>
  )
}

export default Pricing

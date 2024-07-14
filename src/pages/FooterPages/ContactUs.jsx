import React from 'react'

function ContactUs() {
  return (
    <div className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          Have questions or suggestions? Get in touch with us!
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:contact@example.com"
            className="text-yellow-300 hover:text-yellow-400 transition-colors"
          >
            Email Us
          </a>
          <a
            href="https://twitter.com/example"
            className="text-yellow-300 hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/example"
            className="text-yellow-300 hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

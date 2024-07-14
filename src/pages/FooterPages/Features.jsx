import React from 'react';

function Features() {
  const features = [
    "Users can sign up/create an account using their name, email, and password.",
    "Users can log in using their email and password.",
    "Logged-in users can view blogs uploaded by other users in the 'My Feed' section inside Home.",
    "Users can upload their own blogs through the 'Add Blog' section.",
    "Users can view, edit, or delete their previously uploaded blogs in the 'My Blogs' section.",
    "The Account section allows users to see their name, email, and date of account creation.",
    "Through the Manage Account section, users can change their name, email, and password.",
    "A Logout button is available for users to log out immediately."
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Features</h1>
        <ul className="space-y-4">
          {
            features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-teal-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{feature}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Features;

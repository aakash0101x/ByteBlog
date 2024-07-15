import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, LoaderComponent } from "../components";

function ManageAccount() {
  const [Loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const userStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!userData) {
      setLoader(true);
    }
    setLoader(false);
  }, [userStatus, userData, Loader]);

  const Items = [
    {
      name: "Update Name",
      slug: "/update-name",
    },
    {
      name: "Update Email",
      slug: "/update-email",
    },
    {
      name: "Update Password",
      slug: "/update-password",
    },
  ];

   if (Loader ||!userData) {
    return (
      <Container>
        <div className='flex flex-col items-center justify-center h-2/3'>
          <h1 className='text-3xl font-light mb-4'>Loading...</h1>
          <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
          <p>If the issue persists for long, try reloading the page.</p>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className='max-w-lg mx-auto py-10'>
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h1 className='text-3xl font-semibold text-center mb-6'>Welcome, {userData.name}</h1>
          <div className='text-lg text-gray-700 w-80 m-auto'>
            <p className='mb-2'><strong>Name:</strong> {userData.name}</p>
            <p className='mb-2'><strong>Email:</strong> {userData.email}</p>
            <p className='mb-2'><strong>Account Created On:</strong> {new Date(userData.$createdAt).toLocaleDateString()}</p>
          </div>
          <ul className='mt-8 space-y-4'>
            {Items.map(item => (
              <li key={item.name} className='flex justify-center'>
                <button
                  onClick={() => navigate(item.slug)}
                  className='bg-teal-500 text-white px-4 py-2 rounded-full w-60 transition duration-300 hover:bg-teal-600'>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default ManageAccount;

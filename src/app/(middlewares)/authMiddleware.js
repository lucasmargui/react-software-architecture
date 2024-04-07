// authMiddleware.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = checkIfLoggedIn(); // Implement your authentication logic here

    if (!isLoggedIn) {
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, []);

  return null;
};

// In your pages, you can use this auth middleware like this:

// pages/secure-page.js
import { useAuth } from '../path/to/authMiddleware';

const SecurePage = () => {
  useAuth(); // This will ensure that the user is authenticated before rendering the page

  return (
    <div>
      <h1>Secure Page</h1>
      <p>This is a secure page that requires authentication.</p>
    </div>
  );
};

export default SecurePage;

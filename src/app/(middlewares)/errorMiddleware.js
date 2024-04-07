// errorMiddleware.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useErrorHandling = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeError = (url, error) => {
      console.error('Route change error:', error);
      // You can implement custom error handling here, such as logging the error or showing a notification.
      // For this example, we will redirect the user to an error page.
      router.push('/error');
    };

    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
};

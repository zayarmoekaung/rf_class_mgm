import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from './auth';

export function checkAuth(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, [router]);

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
}

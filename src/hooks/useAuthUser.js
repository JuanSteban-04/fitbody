import { useEffect, useState } from 'react';

const useAuthUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser) {
      setUserData(storedUser);
    }

    setLoading(false);
  }, []);

  return { userData, loading };
};

export default useAuthUser;

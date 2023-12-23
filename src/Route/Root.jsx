import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Loader from '../Components/Loader/Loader';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div>
        <Navbar></Navbar>
      </div>

    </>
  );

};

export default Root;
import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Loader from '../Components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

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
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </>
  );

};

export default Root;
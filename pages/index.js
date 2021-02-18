import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);

  return (
    <Fragment>
      <Head>
        <title>Server Side Title</title>
      </Head>
      {isClient && (
        <Head>
          <title>Client Side Title</title>
        </Head>
      )}
      <h1>Hello world</h1>
    </Fragment>
  );
};

export default Home;

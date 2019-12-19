import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Demo from '../components/demo';

const Home = ({ initial }) => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Demo initial={initial} />
  </>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();

  return {
    initial: data,
  };
};

export default Home;

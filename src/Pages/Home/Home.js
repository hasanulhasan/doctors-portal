import React from 'react';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Banner2></Banner2>
    </div>
  );
};

export default Home;
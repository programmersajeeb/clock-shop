
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import AddReview from '../AddReview/AddReview';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Sevices/Services';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <AddReview></AddReview>
      <About></About>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
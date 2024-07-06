// Home.js
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import EmailPopup from '../components/EmailPopup'; // Import the EmailPopup component

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [cookies] = useCookies(['userEmail']);

  useEffect(() => {
    // Show popup if userEmail cookie is not set
    setShowPopup(!cookies.userEmail);
  }, [cookies.userEmail]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <hr className="my-4" />
      <Footer />
      {showPopup && <EmailPopup onClose={closePopup} />}
    </div>
  );
}

export default Home;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PriceCard from './components/PriceCard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Choose your Plan</h1>
        <p className="lead">
          Get your favourite plans, including free plans for personal use
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <PriceCard
            title="Free"
            price={0}
            features={['10 users included', '2 GB of storage', 'Email support', 'Help center access']}
            buttonText="Sign up for free"
          />
          <PriceCard
            title="Pro"
            price={15}
            features={['20 users included', '10 GB of storage', 'Priority email support', 'Help center access']}
            buttonText="Get started"
          />
          <PriceCard
            title="Enterprise"
            price={29}
            features={['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access']}
            buttonText="Contact us"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

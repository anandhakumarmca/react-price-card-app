import React from 'react';

const PriceCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">Rs.{price}<small className="text-muted">/mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
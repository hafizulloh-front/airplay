import React from 'react';


const PricingPlans = () => {
  const plans = [
    {
      title: 'Popular',
      price: 250,
      features: [
        'One-time initiation fee $0',
        'Deposit $50k',
        'Pricing / rates Dynamic',
        'Priority fleet access Yes',
        'Guaranteed fleet access No',
      ],
    },
    {
      title: 'Business',
      price: 480,
      features: [
        'One-time initiation fee $0',
        'Deposit $50k',
        'Pricing / rates Dynamic',
        'Priority fleet access Yes',
        'Guaranteed fleet access No',
      ],
    },
    {
      title: 'Elite',
      price: 680,
      features: [
        'One-time initiation fee $0',
        'Deposit $50k',
        'Pricing / rates Dynamic',
        'Priority fleet access Yes',
        'Guaranteed fleet access Yes',
      ],
    },  
  ];

  return (
    <div className="container my-5 text-center">
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="plan-card">
              <h4 className="plan-title">{plan.title}</h4>
              <p className="plan-subtitle">What You'll Get</p>
              <ul className="plan-features list-unstyled text-start">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-2">
                    <span className="check-icon">✔</span>
                    <span className="ms-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <h3 className="plan-price">
                ${plan.price}
                <span className="text-muted fs-6">/month</span>
              </h3>
              <button className="btn choose-btn w-100">Choose</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

import React from 'react';


const JetSection = () => {
  const itemsLeft = [
    {
      icon: '🛋️',
      title: 'Luxury And Comfort',
      description: 'It is a long established fact that a reader will be distracted by the readable',
    },
    {
      icon: '📅',
      title: 'Personal schedule & booking',
      description: 'It is a long established fact that a reader will be distracted by the readable',
    },
  ];

  const itemsRight = [
    {
      icon: '🛡️',
      title: 'SAFETY AND SECURITY',
      description: 'It is a long established fact that a reader will be distracted by the readable',
    },
    {
      icon: '👨‍✈️',
      title: 'EXPERIENCED CREW',
      description: 'It is a long established fact that a reader will be distracted by the readable',
    },
  ];

  return (
    <div className="container text-center my-5 jet-section">
      <h2 className="mb-5">Private Jet Performance And Specifications</h2>
      <div className="row align-items-center justify-content-center text-center">
       
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          {itemsLeft.map((item, index) => (
            <div className="jet-card mb-4 p-3 shadow-sm rounded" key={index}>
              <div className="jet-icon mb-2">{item.icon}</div>
              <h5 className="jet-title">{item.title}</h5>
              <p className="jet-description">{item.description}</p>
            </div>
          ))}
        </div>

        
        <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center">
          <img src="./public/img/samlyot3.png" alt="" className="plane-img" />
        </div>

     
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          {itemsRight.map((item, index) => (
            <div className="jet-card mb-4 p-3 shadow-sm rounded" key={index}>
              <div className="jet-icon mb-2">{item.icon}</div>
              <h5 className="jet-title">{item.title}</h5>
              <p className="jet-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JetSection;

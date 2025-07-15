import React from 'react';


const Charters = () => {
  const planes = [
    { image: './public/img/samalyot4.png', name: 'Piaggio P.180 Avanti' },
    { image: './public/img/samalyot5.png', name: 'Pilatus PC-12' },
    { image: './public/img/samalyot6.png', name: 'Piper Pa27 Aztec' },
    { image: './public/img/samalyot7.png', name: 'Beechcraft King Air' },
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 fw-bold">Luxury Charters</h2>
      <div className="row justify-content-center">
        {planes.map((plane, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={plane.image} className="card-img-top" alt={plane.name} />
              <div className="card-body">
                <p className="card-text fw-medium">{plane.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-5 fw-semibold">Enjoy Our Membership</h3>
    </div>
  );
};

export default Charters;

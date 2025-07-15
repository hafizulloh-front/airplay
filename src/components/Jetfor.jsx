import React from 'react';

const SamalyotCard = ({ image, title, text, reverse }) => {
  return (
    <div className={`row g-4 align-items-center my-5 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="col-md-6 col-12">
        <img src={image} alt={title} className="img-fluid w-100 rounded shadow" />
      </div>
      <div className="col-md-6 col-12">
        <h2 className="h4">{title}</h2>
        <p className="text-muted">{text}</p>
      </div>
    </div>
  );
};

const Jetfor = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Private Jet For Business & Leisure Purposes</h1>

      <SamalyotCard
        image="/img/samalyot1.png"
        title="Private Jet Charter"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
      />

      <SamalyotCard
        image="/img/samalyot2.png"
        title="Business Jet Charter"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
        reverse={true}
      />
    </div>
  );
};

export default Jetfor;



const Card = ({ title, location, details, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-location">{location}</p>
        <p className="card-details">{details}</p>
      </div>
    </div>
  );
};

export default Card;

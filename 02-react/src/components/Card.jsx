const Card = ({ image, name, title, desc, rating, location, lable }) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={image} alt="image" />

        <div className="card-content">
          <h2 className="card-name">{name}</h2>
          <h4 className="card-title">{title}</h4>
          <p className="card-desc">{desc}</p>

          <div className="card-info">
            <span className="card-rating">{rating}</span>
            <span className="card-location">{location}</span>
          </div>

          <button className="card-btn">{lable}</button>
        </div>
      </div>
    </>
  );
};

export default Card;

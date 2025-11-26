const Card = ({src,user,desc,btn}) => {
  return (
    <>
        <div className="card">
          <img src={src}
            alt=""
            className="card-img"
          />
          <h2 className="card-title">{user}</h2>
          <p className="card-desc">
            {desc}
          </p>
          <button className="card-btn">{btn}</button>
        </div>
    </>
  );
};

export default Card;

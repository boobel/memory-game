const Card = (props) => {
  return (
    <button className="card">
      <span>{props.title}</span>
    </button>
  );
};

export default Card;

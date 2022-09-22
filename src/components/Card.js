const Card = (props) => {
  return (
    <button
      className="card"
      onClick={props.handleGameLogic.bind(this, props.title)}
    >
      <span>{props.title}</span>
      <img src={props.img} />
    </button>
  );
};

export default Card;

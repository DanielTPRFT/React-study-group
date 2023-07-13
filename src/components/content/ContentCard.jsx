import classes from "./ContentCard.module.css";

const Content = (props) => {
  const discount = <p>Discount -$500</p>;
  return (
    <div className={classes.order}>
      <h1>{props.tittle}</h1>
      <p>{props.resume}</p>
      <h2>${props.price}</h2>
      {props.price > 3000 ? discount : ""}
    </div>
  );
};

export default Content;

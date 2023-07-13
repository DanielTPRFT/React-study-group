import classes from "./Content.module.css";
import objects from "../../mockData/MockData";
import { useState } from "react";

const Content = (props) => {
  const discount = <p>Discount -$500</p>;

  const [index, setIndex] = useState(0);
  /*   const index = 0 */

  const handleClick = () => {
    setIndex(index + 1);
  };

  let product = objects[index]

  return (
    <div className={classes.order}>
      <img src={product.image} alt={product.title} width={200} />
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
      {product.price > 3000 ? discount : ""}
      <button onClick={handleClick}>Siguiente Producto</button>
    </div>
  );
};

export default Content;

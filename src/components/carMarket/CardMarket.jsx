import Card from "../card/Card";
import classes from "./CardMarket.module.css";
import objects from "../../mockData/MockData";
import Content from "../content/ContentCard";

const CardMarket = () => {
  const products = objects.map((obj) => {
    return (
      <Card>
        <Content tittle={obj.tittle} resume={obj.resume} price={obj.price} />
      </Card>
    );
  });
  return <div className={classes.cardMarket}>{products}</div>;
};

export default CardMarket;

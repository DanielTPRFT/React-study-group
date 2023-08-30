import { useState } from "react";
import Card from "./components/card/Card";
import objects from "./mockData/MockData";
import classes from "./App.module.css";
import { NextButton } from "./components/next-button/NextButton";
import { Options } from "./components/options/Options";

function registerSession() {
  console.log(`This user has entered the app at ${new Date()}`);
}

function App() {
  const [index, setIndex] = useState(0);
  const [isSessionRegistered, setIsSessionRegistered] = useState(false);

  const [products, setProducts] = useState(objects);
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  let product = products[index];

  if (!isSessionRegistered) {
    registerSession();
    setIsSessionRegistered(true);
  }

  function onNextClick() {
    index < products.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function onPrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(products.length - 1);
  }

  const handleClick = () => {
    onNextClick();
  };

  function toggleOptionsVisibility() {
    setAreOptionsVisible(!areOptionsVisible);
  }

  function changeProductValue(value = "", products) {
    const updatedProducts = structuredClone(products);
    updatedProducts[index] = { ...updatedProducts[index], title: value };
    setProducts(updatedProducts);
  }

  function deleteProduct(products, index) {
    let newProducts = [
      ...products.slice(0, index),
      ...products.slice(index + 1, products.length),
    ];
    if (index > newProducts.length - 1) setIndex(0);
    setProducts(newProducts);
  }

  return (
    <div className={classes.root}>
      <h1>The best food shop in the whole market</h1>
      <div className={classes.cardPrevNext}>
        <NextButton
          styles={{ transform: "rotate(180deg)" }}
          onClick={onPrevClick}
        />
        <Card {...product} onClick={handleClick} index={index} />
        <NextButton onClick={onNextClick} />
      </div>
      <button
        className={classes.optionsButton}
        onClick={toggleOptionsVisibility}
      >
        {areOptionsVisible ? "Hide Options" : "Show Options"}
      </button>
      {areOptionsVisible && (
        <Options
          onDelete={() => deleteProduct(products, index)}
          onTitleChange={changeProductValue}
          products={products}
        />
      )}
    </div>
  );
}

export default App;

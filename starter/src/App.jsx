import { useState } from "react";
import Card from "./components/card/Card";
import storedProducts from "./mockData/MockData";
import classes from "./App.module.css";
import { NextButton } from "./components/next-button/NextButton";
import { Options } from "./components/options/Options";

function registerSession() {
  console.log(`This user has entered the app at ${new Date()}`);
}

function App() {
  const [index, setIndex] = useState(0);
  const [isSessionRegistered, setIsSessionRegistered] = useState(false);

  let product = storedProducts[index];

  if (!isSessionRegistered) {
    registerSession();
    setIsSessionRegistered(true);
  }

  function onNextClick() {
    index < storedProducts.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function onPrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(storedProducts.length - 1);
  }

  const handleClick = () => {
    onNextClick();
  };

  function changeProductTitle(newTitle = "", products) {}

  function deleteProduct(products, index = 0) {}

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
      <button className={classes.optionsButton}>Show Options</button>
      <Options onDelete={deleteProduct} onTitleChange={changeProductTitle} />
    </div>
  );
}

export default App;

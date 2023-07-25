import { useState } from "react";
import Card from "./components/card/Card";
import objects from "./mockData/MockData";
import classes from "./App.module.css";
import { NextButton } from "./components/next-button/NextButton";

function registerSession() {
  console.log(`This user has entered the app at ${new Date()}`);
}

function App() {
  const [index, setIndex] = useState(0);
  const [isSessionRegistered, setIsSessionRegistered] = useState(false);
  if (!isSessionRegistered) {
    registerSession();
    setIsSessionRegistered(true);
  }

  function onNextClick() {
    index < objects.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function onPrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(objects.length - 1);
  }

  const handleClick = () => {
    setIndex(index + 1);
    console.log(`Now you're in the item ${index}`);
  };

  let product = objects[index];

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
    </div>
  );
}

export default App;

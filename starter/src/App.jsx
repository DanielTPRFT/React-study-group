import { useContext, useState, useReducer } from "react";
import Card from "./components/card/Card";
import storedProducts from "./mock-data/MockData";
import classes from "./App.module.css";
import { NextButton } from "./components/next-button/NextButton";
import { Options } from "./components/options/Options";
import { ThemeContext } from "./context/theme";
import { productsReducer } from "./app-logic";

function registerSession() {
  console.log(`This user has entered the app at ${new Date()}`);
}

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const [isSessionRegistered, setIsSessionRegistered] = useState(false);
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const [products, dispatch] = useReducer(productsReducer, storedProducts);
  const deleteProduct = () =>
    dispatch({
      type: "DELETE_PRODUCT",
      index,
      setIndex,
    });
  const changeProductValue = (value) =>
    dispatch({
      type: "CHANGE_NAME",
      value,
      index,
    });
  const onNextClick = () =>
    dispatch({
      type: "NEXT_PRODUCT",
      index,
      setIndex,
    });
  const onPrevClick = () =>
    dispatch({
      type: "PREV_PRODUCT",
      index,
      setIndex,
    });

  let product = products[index];

  if (!isSessionRegistered) {
    registerSession();
    setIsSessionRegistered(true);
  }

  const handleClick = () => {
    onNextClick();
  };

  function toggleOptionsVisibility() {
    setAreOptionsVisible(!areOptionsVisible);
  }

  return (
    <div className={theme === "darkMode" ? classes.darkMode : classes.root}>
      <h1>The best food shop in the whole market</h1>
      <div className={classes.cardPrevNext}>
        <NextButton
          styles={{ transform: "rotate(180deg)" }}
          onClick={onPrevClick}
        />
        <Card {...product} onClick={handleClick} index={index} />
        <NextButton onClick={onNextClick} />
        <button
          className={
            theme === "darkMode" ? classes.btnThemeDark : classes.btnTheme
          }
          onClick={() =>
            setTheme(theme === "darkMode" ? "lightMode" : "darkMode")
          }
        >
          Change Theme
        </button>
      </div>
      <button
        className={classes.optionsButton}
        onClick={toggleOptionsVisibility}
      >
        {areOptionsVisible ? "Hide Options" : "Show Options"}
      </button>
      {areOptionsVisible && (
        <Options
          onDelete={() => deleteProduct(storedProducts, index)}
          onTitleChange={changeProductValue}
          products={storedProducts}
        />
      )}
    </div>
  );
}

export default App;

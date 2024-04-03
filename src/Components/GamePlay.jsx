import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const reset = () => {
    setScore(0);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectNumber) {
      setError("You Have Not Selected Any Number");
      return;
    } else {
      setError("");
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    // console.log(randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RollDice rollDice={rollDice} currentDice={currentDice} />
      <div className="btn">
        <OutlineButton onClick={reset}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev)=> !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 50px;

  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }

  .top_section {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

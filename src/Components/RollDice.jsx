import styled from "styled-components";

const RollDice = ({currentDice , rollDice}) => {


  return (
    <DiceContainer>
      <div
        className="
      dice"
      >
        <img
          src={`./images/dice_${currentDice}.png`}
          onClick={rollDice}
          alt=""
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

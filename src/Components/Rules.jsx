import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice Image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get 1 point{" "}
        </p>
        <p>if you get wrong guess then 1 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background: #FBF1F1;
padding: 20px;
width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;

h2{
font-size: 24px;
}

.text{
    p{
        margin-top: 24px;
    }
}
`;

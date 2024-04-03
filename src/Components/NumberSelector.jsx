import styled from "styled-components";

const NumberSelector = ({ setSelectNumber, selectNumber, error, setError }) => {
  const number = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) =>{
    setSelectNumber(value)
    setError('')
  }

  return (
    <Container>
      <p>{error}</p>

      <div className="flex">
        {number.map((value, i) => (
          <Box
            isSelected={value === selectNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  p:nth-child(1) {
    color: red;
  }

  .flex {
    display: flex;
    gap: 24px;

    p {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

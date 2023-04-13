import styled from "styled-components";
import VariantsComponent from "./components/VariantsComponent";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <VariantsComponent />
    </Wrapper>
  );
}
export default App;

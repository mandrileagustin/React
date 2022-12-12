import "./styles.css";
import Button, { ButtonSecondary } from "./Button";
import Wrapper from "./wrapper";
import List from "./list";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Wrapper>
        <Button text="Texto desde props" url="https://google.com" />
        <ButtonSecondary />
      </Wrapper>
      <List />
    </div>
  );
}

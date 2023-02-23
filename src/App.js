import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Button from "./components/Button";
import EntryContainer from "./components/EntryContainer";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <h1>New Entry</h1>
      <Input title="Motto" />
      <Input title="Notes" />
      <Button>Create</Button>
      <EntryContainer>
        <Entry />
        <Entry />
        <Entry>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consectetur totam unde quas. Nisi nemo, facere cumque dolores optio
          temporibus magni placeat sed, libero nulla quae quam impedit excepturi
          voluptas.
        </Entry>
      </EntryContainer>
      <Footer>Journal App -- 2028</Footer>
    </>
  );
}

export default App;

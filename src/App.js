import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Button from "./components/Button";
import EntryContainer from "./components/EntryContainer";
import Input from "./components/Input";
import Navigation from "./components/Navigation";
import NavigationItem from "./components/NavigationItem";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <h1>New Entry</h1>
      <Input title="Motto" />
      <Input title="Notes" />
      <Button>Create</Button>
      <Navigation>
        <NavigationItem title="All Entries" number="3" selected />
        <NavigationItem title="Favourites" number="1" />
      </Navigation>
      <EntryContainer>
        <Entry title="Lorem1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consectetur totam unde quas. Nisi nemo, facere cumque dolores optio
          temporibus magni placeat sed, libero nulla quae quam impedit excepturi
          voluptas.
        </Entry>
        <Entry title="Lorem2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consectetur totam unde quas. Nisi nemo, facere cumque dolores optio
          temporibus magni placeat sed, libero nulla quae quam impedit excepturi
          voluptas.
        </Entry>
        <Entry title="Lorem Next">
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

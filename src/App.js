import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Button from "./components/Button";
import EntryContainer from "./components/EntryContainer";
import Input from "./components/Input";
import Navigation from "./components/Navigation";
import NavigationItem from "./components/NavigationItem";
import Title from "./components/Title";
import "./App.css";
import { useState } from "react";

function App() {
  const [isFavorite, setIsFavorite] = useState([false, false, false]);
  const [allEntriesSelected, setAllEntriesSelected] = useState(true);
  const numberOfFavorites = () => {
    let trueCounter = 0;
    for (let count = 0; count < isFavorite.length; count++) {
      if (isFavorite[count]) {
        trueCounter++;
      }
    }
    return trueCounter;
  };
  function handleStarClick(number) {
    const newIsFavorite = [...isFavorite];
    newIsFavorite[number] = !newIsFavorite[number];
    setIsFavorite(newIsFavorite);
  }

  function handleNavClick(number) {
    if (number === 0) {
      setAllEntriesSelected(true);
    } else {
      setAllEntriesSelected(false);
    }
  }

  return (
    <main>
      <Header>JOURNAL</Header>
      <Title>New Entry</Title>
      <Input title="Motto" />
      <Input title="Notes" />
      <Button>Create</Button>
      <Navigation>
        <NavigationItem
          title="All Entries"
          onClick={() => {
            handleNavClick(0);
          }}
          number={isFavorite.length}
          selected={allEntriesSelected ? true : false}
        />
        <NavigationItem
          title="Favorites"
          onClick={() => {
            handleNavClick(1);
          }}
          number={numberOfFavorites()}
          selected={allEntriesSelected ? false : true}
        />
      </Navigation>
      <EntryContainer>
        {allEntriesSelected ? (
          <>
            <Entry
              title="Lorem1"
              date="FEB 27, 2028"
              onStarClick={() => {
                handleStarClick(0);
              }}
              bookmarked={isFavorite[0] ? true : false}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consectetur totam unde quas. Nisi nemo, facere cumque dolores
              optio temporibus magni placeat sed, libero nulla quae quam impedit
              excepturi voluptas.
            </Entry>
            <Entry
              title="Lorem2"
              date="JAN 8, 2028"
              onStarClick={() => {
                handleStarClick(1);
              }}
              bookmarked={isFavorite[1] ? true : false}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consectetur totam unde quas. Nisi nemo, facere cumque dolores
              optio temporibus magni placeat sed, libero nulla quae quam impedit
              excepturi voluptas.
            </Entry>
            <Entry
              title="Lorem Next"
              date="FEB 5, 2028"
              onStarClick={() => {
                handleStarClick(2);
              }}
              bookmarked={isFavorite[2] ? true : false}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consectetur totam unde quas. Nisi nemo, facere cumque dolores
              optio temporibus magni placeat sed, libero nulla quae quam impedit
              excepturi voluptas.
            </Entry>
          </>
        ) : (
          ""
        )}
      </EntryContainer>
      <Footer>Journal App -- 2028</Footer>
    </main>
  );
}

export default App;

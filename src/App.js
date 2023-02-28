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
import { uid } from "uid";

function App() {
  const [allEntriesSelected, setAllEntriesSelected] = useState(true);
  const [entries, setEntries] = useState([
    {
      title: "Lorem1",
      key: 5000,
      isFavorite: false,
      date: "FEB 27, 2028",
      innerText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat      consectetur totam unde quas. Nisi nemo, facere cumque dolores      optio temporibus magni placeat sed, libero nulla quae quam impedit      excepturi voluptas.",
    },
    {
      title: "Lorem2",
      key: 5001,
      isFavorite: false,
      date: "FEB 4, 2028",
      innerText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat      consectetur totam unde quas. Nisi nemo, facere cumque dolores      optio temporibus magni placeat sed, libero nulla quae quam impedit      excepturi voluptas.",
    },
    {
      title: "Lorem3",
      key: 5002,
      isFavorite: false,
      date: "JAN 27, 2028",
      innerText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat      consectetur totam unde quas. Nisi nemo, facere cumque dolores      optio temporibus magni placeat sed, libero nulla quae quam impedit      excepturi voluptas.",
    },
  ]);
  const [input, setInput] = useState({ notes: "", title: "" });
  const [buttonOutput, setButtonOutput] = useState({
    text: "-",
    isAlert: false,
  });

  function updateInput() {
    setInput({ notes: input.notes, title: input.title });
  }

  function eraseInput() {
    setInput({ notes: "", title: "" });
  }

  const numberOfFavorites = () => {
    return entries.filter((entry) => entry.isFavorite).length;
  };

  function handleStarClick(key) {
    setEntries(
      entries.map((entry) =>
        entry.key === key ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleNavClick(number) {
    if (number === 0) {
      setAllEntriesSelected(true);
    } else {
      setAllEntriesSelected(false);
    }
  }

  function handleCreateClick() {
    if (input.notes === "" || input.title === "") {
      setButtonOutput({ text: "Fields should not be empty.", isAlert: true });
    } else {
      setButtonOutput({ text: "New Entry created", isAlert: false });
      let newDate = new Date();
      const monthNames = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ];
      const newEntry = {
        title: input.title,
        key: uid(),
        isFavorite: false,
        date:
          "" +
          monthNames[newDate.getMonth()] +
          " " +
          newDate.getDate() +
          ", " +
          newDate.getFullYear(),
        innerText: input.notes,
      };
      setEntries([newEntry, ...entries]);
      eraseInput();
    }
  }

  return (
    <main>
      <Header>JOURNAL</Header>
      <Title>New Entry</Title>
      <Input title="Motto" input={input} updateInput={updateInput} />
      <Input title="Notes" input={input} updateInput={updateInput} />
      <Button buttonOutput={buttonOutput} onClick={() => handleCreateClick()}>
        Create
      </Button>
      <Navigation>
        <NavigationItem
          title="All Entries"
          onClick={() => {
            handleNavClick(0);
          }}
          number={entries.length}
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
        {allEntriesSelected
          ? entries.map((entry, index) => {
              return (
                <Entry
                  key={entry.key}
                  title={entry.title}
                  date={entry.date}
                  onStarClick={() => {
                    handleStarClick(entry.key);
                  }}
                  bookmarked={entry.isFavorite ? true : false}
                  noDivider={index === entries.length - 1 ? true : false}
                >
                  {entry.innerText}
                </Entry>
              );
            })
          : entries
              .filter((entry) => {
                return entry.isFavorite;
              })
              .map((entry, index) => {
                return (
                  <Entry
                    title={entry.title}
                    key={entry.key}
                    date={entry.date}
                    onStarClick={() => {
                      handleStarClick(entry.key);
                    }}
                    bookmarked={true}
                    noDivider={index === numberOfFavorites() - 1 ? true : false}
                  >
                    {entry.innerText}
                  </Entry>
                );
              })}
      </EntryContainer>
      <Footer>Journal App -- 2028</Footer>
    </main>
  );
}

export default App;

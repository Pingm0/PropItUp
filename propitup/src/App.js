
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard fName="Jone" lName="Doe" age="45" color="Black" />
      <PersonCard fName="Jane" lName="Doe" age="43" color="Black" />
      <PersonCard fName="Mo" lName="Jamal" age="35" color="Blond" />
      <PersonCard fName="John" lName="Smith" age="88" color="Brown" />

    </div>
  );
}

export default App;

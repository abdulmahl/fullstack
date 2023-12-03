import ListGroup from "./components/ListGroup.tsx";
//React uses PascalCasing!
const App = () => {
  // JSX: JavaScript XML.
  let items = ["Randburg", "Cap City", "London", "New York", "Rome"];
  return (
    <>
    <ListGroup items={items} heading="Cities" />
    </>
  );
};

export default App;

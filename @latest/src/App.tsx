import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

//React uses PascalCasing!
const App = () => {
  // JSX: JavaScript XML.
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <strong>Anubis!</strong>
      </Alert>}
      <Button color="success" onClick={ () => setAlertVisibility(true)} >
        Alert Button!
      </Button>
    </>
  );
};

export default App;

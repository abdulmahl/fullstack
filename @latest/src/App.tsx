import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/Main.css";
import "./css/Med.css";
import "./css/Lrg.css";

//React uses PascalCasing!
const App = () => {
  // JSX: JavaScript XML.
  return (
    <>
      <center>
        <Header />
        <Footer />
      </center>
    </>
  );
};

export default App;

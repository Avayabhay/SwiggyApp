import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <AppLayout />
      <div className="body"></div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;

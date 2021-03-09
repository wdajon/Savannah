import './Styles/App.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {/* Body */}
      <Body/>
      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;

import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
// import User from "./User";

function App() {
  return (
    <div className="App">
      {/* <User data={{ name: "anil sidhu", age: 23 }} /> */}
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;

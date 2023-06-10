
import style from "./App.module.scss";
import Events from "./components/action/Events";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main";

function App() {

 

  return (
    <div className={style.wrapper}>
      <>
      <Header />
      <div className={style.main}>
        <Main />
      </div>
      <Footer />
      </>
      <Events  />

    </div>
  );
}

export default App;

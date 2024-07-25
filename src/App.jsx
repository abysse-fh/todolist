import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Tasks from "./tasks/Tasks";
import ApplicationContextProvider from "./context/ApplicationContextProvider";
import ReactConfetti from "react-confetti";

function App() {

  return (
    <ApplicationContextProvider>
      <Header />
      <Tasks />
      <Footer />
    </ApplicationContextProvider>
  );
}

export default App;

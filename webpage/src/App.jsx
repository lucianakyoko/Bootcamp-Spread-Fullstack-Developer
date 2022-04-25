import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/home";
import Projects from "./components/pages/home/Projects";

import { Wrapper } from "./styles/app";
import GlobalStyles from "./styles/GlobalStyles";

import { Router , Routes, Route} from 'react-router';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </Wrapper>
  );
}

export default App;

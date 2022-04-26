import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/home";
import Projects from "./components/pages/Projects";

import { Wrapper } from "./styles/app";
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Home />
      {/* <Projects /> */}
      <Footer />
    </Wrapper>
  );
}

export default App;

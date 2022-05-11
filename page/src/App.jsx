import GlobalStyles from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from "./components/Footer";
import { MainWrapper } from './styles/app';
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectFull } from './pages/ProjectFull';


function App() {

  return (
    <>
      <GlobalStyles />
        <Header />
        <MainWrapper>
          {/* <Home /> */}
          {/* <About /> */}
          {/* <Projects /> */}
          <ProjectFull />
        </MainWrapper>
        <Footer />
    </>
  )
}

export default App;

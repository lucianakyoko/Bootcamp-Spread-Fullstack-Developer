import GlobalStyles from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from "./components/Footer";
import { MainWrapper } from './styles/app';
import { About } from "./pages/About";


function App() {

  return (
    <>
      <GlobalStyles />
        <Header />
        <MainWrapper>
          <Home />
          {/* <About /> */}
        </MainWrapper>
        <Footer />
    </>
  )
}

export default App;

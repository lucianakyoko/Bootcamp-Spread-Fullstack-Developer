import GlobalStyles from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {MainWrapper} from './styles/app';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainWrapper>
        <Home />
      </MainWrapper>
    </>
  )
}

export default App;

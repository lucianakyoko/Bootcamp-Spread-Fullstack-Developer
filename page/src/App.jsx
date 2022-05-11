import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
      <BrowserRouter>
        <GlobalStyles />
          <Header />     
          <MainWrapper>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/sobre' element={<About />}/>
              <Route path='/projetos' element={<Projects />}/>
              <Route path='/projetos/:projectId' element={<ProjectFull />}/>
            </Routes>
          </MainWrapper>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

import Header from "./components/Header";

import { Wrapper } from "./styles/app";
import GlobalStyles from "./styles/GlobalStyles";



function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
    </Wrapper>
  );
}

export default App;

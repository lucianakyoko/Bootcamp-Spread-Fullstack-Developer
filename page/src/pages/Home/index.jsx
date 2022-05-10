import { Hero } from "./Hero";
import { Timeline } from "./Timeline";
import bootcamps from "../../datas/datas";

import {HomeSection
} from './style';


export function Home() {
  return(
    <HomeSection>
      <Hero />

      <Timeline bootcamps={bootcamps}/>
    </HomeSection>
  );
}
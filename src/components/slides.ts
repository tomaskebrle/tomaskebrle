import Portfolio from "./slides/Portfolio";
import About from "./slides/About";
import Intro from "./slides/Intro";
import AstroOGImage from "./slides/AstroOGImage";

type Slides = {
  [key: string]: () => JSX.Element;
};

const slides: Slides = {
  intro: Intro,
  about: About,
  portfolio: Portfolio,
  astroogimage: AstroOGImage,
};

let slidesArr = Object.keys(slides);

export { slides, slidesArr };

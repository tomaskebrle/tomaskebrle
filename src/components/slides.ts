import Portfolio from "./slides/Portfolio";
import About from "./slides/About";
import Intro from "./slides/Intro";
import AstroOGImage from "./slides/AstroOGImage";
import Contact from "./slides/Contact";

type Slides = {
  [key: string]: () => JSX.Element;
};

const slides: Slides = {
  intro: Intro,
  about: About,
  portfolio: Portfolio,
  astroogimage: AstroOGImage,
  contact: Contact,
};

let slidesArr = Object.keys(slides);

export { slides, slidesArr };

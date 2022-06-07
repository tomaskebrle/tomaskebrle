export interface Language {
  nav: {
    about: string;
    contact: string;
    portfolio: string;
    blog: string;
  };
  header: {
    name: string;
    tagline: string;
  };
  about: {
    title: string;
    text: string;
  };
  portfolio: {
    card1: {
      title: string;
      description: string;
      link: string;
      image: string;
    };
    card2: {
      title: string;
      description: string;
      link: string;
      image: string;
    };
  };
  contact: string;
}

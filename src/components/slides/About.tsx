import Wrapper from "./Wrapper";
export default function About() {
  const technologies = [
    "Javascript & Typescript",
    "GO",
    "Svelte",
    "React",
    "TailwindCSS",
    "NodeJS",
    "Linux",
  ];

  return (
    <Wrapper title="About me" background="circuit">
      <div className="xl:flex gap-8 ">
        <span className="xl:mb-0 mb-4">
          <p className="text-justify mb-2">
            Hello I am a 17 year old programmer, web-developer and designer from
            Czech Republic. I study there on a Grammar school, but all my
            programmer knowledge is entirely self-taught. Most of my skills are
            in frontend web-development, but recently I have been learning
            backend languages, to improve. I run Linux on my machine, Fedora to
            be specific, and I use VSCode to do my programming. I am also a DoFE
            bronze award holder, and I am currently working on the silver lever.
          </p>
          <p className="text-justify mb-2">
            Aside from programming I also like to do Linux and DevOps stuff, and
            setting up various servers, for games me and my friends want to.
          </p>
          {technologies.map((el) => (
            <Point point={el} />
          ))}
        </span>
        <div className="xl:block xl:w-96 xl:h-96 xl:aspect-square flex w-full justify-center">
          <img
            src="/tomaskebrle.jpg"
            alt=""
            className="aspect-square w-96 h-96"
          />
        </div>
      </div>
    </Wrapper>
  );
}

function Point({ point }: { point: string }) {
  return (
    <li className="flex items-center gap-3 my-1 text-xl">
      <div className="text-primary">&gt;</div>
      {point}
    </li>
  );
}

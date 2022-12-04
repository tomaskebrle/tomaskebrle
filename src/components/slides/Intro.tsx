import NextButton from "../NextButton";

export default function Intro() {
  return (
    <>
      <div className="h-screen w-screen fixed bg-[url('/bg.png')] bg-center bg-cover px-[8.333333%] flex flex-col md:justify-end justify-center py-[4.151515%]">
        <div className="flex md:flex-row flex-col justify-between item-center gap-4 md:items-end text-secondary">
          <div className="bg-primary px-6 py-4 w-max">
            <h1 className="md:text-9xl text-8xl font-serif font-bold leading-[170px]">
              Tomáš <br /> Kebrle
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

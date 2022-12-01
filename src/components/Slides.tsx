import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Slide from "./Slide";
import { slidesArr } from "./slides";
import SlideLoad from "./slides/SlideLoad";
export default function Slides() {
  const [canChange, setCanChange] = useState(true);
  const [index, setIndex] = useState(0);
  const control = useAnimationControls();

  useEffect(() => {
    console.log(index);
  }, [index]);

  const leftToRight = async () => {
    await control.start({
      left: ["-100%", "0%"],
      transition: { duration: 1 },
    });
  };

  const animate = async (coords: string[]) => {
    await control.start({
      left: coords,
      transition: { duration: 0.5 },
    });
  };

  const handleSlideChange = async (deltaY: number) => {
    if (canChange) {
      setCanChange(false);

      if (deltaY < 0) {
        await animate(["200%", "0%"]);
        setIndex(Math.max(0, index - 1));
        await animate(["0%", "-100%"]);
      } else {
        await animate(["-100%", "0%"]);
        setIndex(Math.min(index + 1, slidesArr.length - 1));
        await animate(["0%", "200%"]);
      }

      setTimeout(() => {
        setCanChange(true);
      }, 250);
    }
  };

  return (
    <>
      <main
        className="h-screen w-screen fixed text-white"
        onWheel={(e) => {
          handleSlideChange(e.deltaY);
        }}
      >
        <Slide slide={slidesArr[index]} />
      </main>
      <SlideLoad control={control}></SlideLoad>
    </>
  );
}

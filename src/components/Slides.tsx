import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Slide from "./Slide";
import { slidesArr } from "./slides";
import SlideLoad from "./slides/SlideLoad";
export default function Slides() {
  const [canChange, setCanChange] = useState(true);
  const [index, setIndex] = useState(0);
  const control = useAnimationControls();

  const animate = async (coords: string[]) => {
    await control.start({
      left: coords,
      transition: { duration: 0.5 },
    });
  };

  const previousSlide = async () => {
    console.log("previous");
    await animate(["-100%", "0%"]);
    setIndex(Math.max(0, index - 1));
    await animate(["0%", "200%"]);
  };

  const nextSlide = async () => {
    console.log("next");
    await animate(["200%", "0%"]);
    setIndex(Math.min(index + 1, slidesArr.length - 1));
    await animate(["0%", "-100%"]);
  };

  const handleSlideChange = async (deltaY: number) => {
    if (canChange) {
      setCanChange(false);

      if (deltaY > 0) {
        await nextSlide();
      } else {
        await previousSlide();
      }

      setTimeout(() => {
        setCanChange(true);
      }, 250);
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = async () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (isUpSwipe || isDownSwipe)
      isUpSwipe ? await nextSlide() : await previousSlide();
  };

  return (
    <>
      <main
        className="h-screen w-screen fixed text-white"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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

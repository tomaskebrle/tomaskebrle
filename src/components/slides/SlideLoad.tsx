import { AnimationControls, motion } from "framer-motion";

export default function SlideLoad({ control }: { control: AnimationControls }) {
  return (
    <motion.div
      className="bg-secondary w-screen h-screen fixed -left-full"
      animate={control}
    ></motion.div>
  );
}

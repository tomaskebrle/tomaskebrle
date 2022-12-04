import { AnimationControls, motion } from "framer-motion";

export default function SlideLoad({ control }: { control: AnimationControls }) {
  return (
    <motion.div
      className="bg-secondary w-screen fixed h-full -left-full"
      animate={control}
    ></motion.div>
  );
}

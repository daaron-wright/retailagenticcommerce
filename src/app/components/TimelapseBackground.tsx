import { motion } from "motion/react";

const GIF_URL = "https://cdn.builder.io/o/assets%2F4f55495a54b1427b9bd40ba1c8f3c8aa%2Fadc2bcc38ce44b2aa1b057e9bad1468a?alt=media&token=6b868a3f-aca1-47d3-b87b-22aec5c6ac27&apiKey=4f55495a54b1427b9bd40ba1c8f3c8aa";

export function TimelapseBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      <motion.img 
        src={GIF_URL}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Storm timelapse animation"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      
      {/* Static dim overlay so text/UI remains readable over the animation */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-10 pointer-events-none" />
    </div>
  );
}

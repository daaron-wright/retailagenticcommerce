import { motion } from "motion/react";

const GIF_URL = "https://www.thisiscolossal.com/wp-content/uploads/2021/05/olbinski-3.gif";

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
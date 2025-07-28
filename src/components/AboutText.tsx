import { motion } from "framer-motion";
import type { ReactNode } from "react";

const AboutText = ({children}: {children: ReactNode}) => {
  return (
    <motion.p 
      className="text-base md:text-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier suave
      }}
    >
      {children}
    </motion.p>
  );
};

export default AboutText;
import React from "react";
import { motion } from "framer-motion";
const FadeInWhenVisible = ({ children }: any) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;

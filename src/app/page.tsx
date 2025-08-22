'use client'

import { motion } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <motion.div
       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.1 }} 
      >
        <Header />
      </motion.div>
      <Hero />
    </main>
  );
}

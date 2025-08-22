"use client";

import Image from "next/image";
import { BadgeHero } from "../ui/badge";
import { motion } from "framer-motion";
import ButtonGoogle from "../button-downloader/google-play";
export default function Hero() {
  return (
    <main className="flex justify-center items-center clip-diagonal bg-[var(--color-primary-1)]">
      <div className="w-full  max-w-[1450px] flex justify-center lg:justify-between items-center mt-12 py-12 flex-wrap lg:flex-nowrap">
        <section className="flex flex-col gap-4 pl-2 pr-2 md:pl-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} >
            <BadgeHero name="Amor de Quatro Patas" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} >
            <p className="2xl:leading-20 md:leading-16 font-bold text-[var(--color-primary-3)] 2xl:text-7xl text-5xl xl:text-6xl md:w-[630px] 2xl:w-[730px] leading-14 ">Um app, milhares de patinhas mais felizes</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="sm:max-w-[500px] md:max-[600px] max-w-[400px]">
            <p className="md:text-lg text-[var(--color-primary-3)] ">Descubra um mundo onde cada patinha encontra carinho e um lar amoroso. Nosso aplicativo conecta pessoas que querem adotar com pets que precisam de um lar, tornando a adoção mais fácil, segura e cheia de amor.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
            <ButtonGoogle />
          </motion.div>
        </section>
        <section className="p-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="flex justify-center items-center">
            <Image width={1920} height={1080} src="/cell.png" alt="phone" className=" mt-3 lg:w-[70%] mb-12 2xl:w-[90%]" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}

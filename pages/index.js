import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Countdown from "@/components/Countdown";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= Utils ================= */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useIsMobile();

  const sectionVariant = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mx-auto">
      {/* ================= HERO ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Hero Image */}
        <img
          src="/img/hero2.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100/70 via-red-100/30 to-transparent" />

        {/* محتوا */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 1 }}
              className={`${styles.fancytext} text-4xl md:text-7xl mt-16`}
            >
              Fatemeh & Ali
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.2 : 0.6 }}
              className={`italic ${styles.textFont} text-white/90 text-2xl md:text-5xl`}
            >
              Save the Date
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.4 : 1 }}
              className="flex justify-center"
            >
              <Countdown targetDate="2026-03-24 19:30:00" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= SECTION 2 ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[80vh] md:h-screen bg-[url('/img/background.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <Image
            src="/img/44.png"
            alt="Top Image"
            width={180}
            height={260}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/secTow1.png"
            alt="Bottom Image"
            width={isMobile ? 300 : 600}
            height={300}
            className="object-contain  [@media(min-width:500px)_and_(max-width:768px)]:w-[500px] md:w-[600px]"
          />
        </motion.div>
      </motion.section>

      {/* ================= SECTION 3 ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[80vh] md:h-screen overflow-hidden"
      >
        {/* Image */}
        <img
          src="/img/invite2.png"
          alt="Invite"
          className="
      absolute inset-0
      w-full h-full
      object-cover
      brightness-110
      contrast-90
      saturate-130
      opacity-95
      md:object-contain
    "
        />

        {/* اگر overlay یا محتوا داری، این div باید relative + z-10 باشه */}
        <div className="relative z-10">{/* محتوا اینجا */}</div>
      </motion.section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-text-red">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Your Travel App ✈️
      </motion.h1>
    </main>
  );
}

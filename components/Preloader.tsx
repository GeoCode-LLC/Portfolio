"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "geocode_intro_played";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");
    setShow(true);
    setDone(false);
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--color-ink)] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter"
          >
            <span className="text-[var(--color-accent)]">G</span>
            <motion.span
              initial={{ display: "inline-block", rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >C</motion.span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-px bg-[var(--color-accent)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

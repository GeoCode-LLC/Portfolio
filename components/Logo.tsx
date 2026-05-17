"use client";
import { motion } from "framer-motion";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 360 }}
      style={{ transition: "transform .8s" }}
      aria-label="GeoCode logo"
    >
      <defs>
        <linearGradient id="gc" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#c8ff3e" />
          <stop offset="1" stopColor="#7af0c4" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="30" cy="30" r="27"
        fill="none" stroke="url(#gc)" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.path
        d="M37 19 A14 14 0 1 0 37 41 L30 41 L30 31 L41 31"
        fill="none" stroke="url(#gc)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

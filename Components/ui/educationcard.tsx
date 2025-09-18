"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

type EducationEntry = {
  level: string;
  school: string;
  major?: string;
  year: string;
  score?: string;
  image: string;
  degree?: string;
  board?: string;
  link?: string;
  linkname?: string;
};

const educationData: EducationEntry[] = [
  {
    level: "Graduation",
    school: "National Institute of Technology, Patna",
    major: "Electronics and Communication Engineering",
    year: "2021 - 2025",
    image: "/Nitplogo.png",
    score: "CGPA: 8.6 / 10",
    degree: "B.Tech, ",
    link: "/grade.pdf",
    linkname: "GradeCard.pdf",
  },
  {
    level: "Intermediate",
    school: "Hasanpur College, Hasanpur Road, Samastipur",
    major: "Science Stream (PCM)",
    year: "2018 - 2019",
    image: "/Bseblogo.png",
    score: "Percentage: 81.4%",
    board: "Bihar School Examination Board, ",
    link: "/metric.jpg",
    linkname: "Intermediate_Certificate.jpg",
  },
  {
    level: "Matriculation",
    school: "St. Xavier's Public School, Samastipur",
    major: "Science / General",
    year: "2017 - 2018",
    image: "/Cbselogo.png",
    score: "Percentage: 95%",
    board: "Central Board of Secondary Education, ",
    link: "/inter.jpg",
    linkname: "Matriculation_Certificate.jpg",
  },
];

export function EducationDetails() {
  return (
    <section className="max-w-6xl mx-auto py-14 px-4">
      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <MovingBorderCard key={idx} idx={idx} edu={edu} />
        ))}
      </div>
    </section>
  );
}

function MovingBorderCard({ idx, edu }: { idx: number; edu: EducationEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
      className="relative rounded-lg"
    >
      {/* Premium moving border effect */}
      <MovingBorder duration={4500} rx="12" ry="12" />

      {/* Card content */}
      <div className="relative bg-gray-900 dark:bg-[#0a050e] p-6 rounded-lg border border-gray-700 z-10">
        <div className="flex gap-5 sm:gap-10 py-5">
          <div className="relative flex flex-col items-center">
            <Image
              src="/gcap.png"
              alt="Graduation Cap"
              width={100}
              height={100}
              className="w-9 h-9 mb-1 z-10"
            />
            <div className="h-40 w-[2.5px] bg-gradient-to-b from-blue-500 via-blue-300 to-sky-700"></div>
          </div>

          <div className="flex flex-col flex-1 relative mt-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-300">
                {edu.level}
              </h3>
              <span className="text-gray-400">{edu.year}</span>
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-15">
              <Image
                src={edu.image}
                alt="logo"
                width={200}
                height={200}
                className="w-40 h-40 rounded-full"
              />
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-white text-[18px] sm:text-xl">
                {edu.school}
              </p>
              <p className="text-gray-400 text-sm">
                {edu.degree}
                {edu.board} {edu.major}
              </p>
            </div>

            {/* Score + Download Button */}
            <div className="flex justify-between items-center mt-2">
              <div>
                {edu.score && (
                  <p className="mt-2 text-gray-400 text-[12px] sm:text-base">
                    Score: {edu.score}
                  </p>
                )}
              </div>

              {/* Custom Download Button */}
              {edu.link && (
                <DownloadButton link={edu.link} linkname={edu.linkname || "file"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Download button with spinner + moving gradient border
function DownloadButton({ link, linkname }: { link: string; linkname: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDownloading(true);

    // Simulated delay for animation
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = link;
      a.download = linkname;
      a.click();
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.div
      className="relative rounded-lg p-[1.2px] overflow-hidden"
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(270deg, #2d0a31, #5c1a6d, #3a0f44, #2c0b35)",
          backgroundSize: "600% 600%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "80% 50%", "0% 50%"],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <a
        href={link}
        download={linkname}
        onClick={handleDownload}
        className="relative w-full px-3 sm:px-5 py-2 rounded-lg bg-[#0a0112] 
                   text-[11px] sm:text-base text-gray-300 font-medium text-center 
                   z-10 flex items-center justify-center gap-2 
                   transition-colors duration-300 hover:bg-[#15041f]"
      >
        {downloading ? (
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        ) : (
          <>
            Certificate
            <MdDownload className="w-4 h-4 sm:w-5 sm:h-5" />
          </>
        )}
      </a>

    </motion.div>
  );
}

// Moving border shimmer for cards
function MovingBorder({
  duration = 4000,
  rx = "12",
  ry = "12",
}: {
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const dashArray = useTransform(progress, () => {
    const length = pathRef.current?.getTotalLength() || 0;
    return `${length / 10} ${length}`;
  });
  const dashOffset = useTransform(progress, (val) => -val);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full pointer-events-none z-11 rounded-lg"
    >
      <defs>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#806a83" />
          <stop offset="50%" stopColor="#806a83" />
          <stop offset="100%" stopColor="#1d0c2c" />
        </linearGradient>
      </defs>
      <motion.rect
        ref={pathRef}
        fill="none"
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
        stroke="url(#glowGradient)"
        strokeWidth="3"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        style={{
          filter: "blur(10px)",
          opacity: 1,
        }}
      />
    </svg>
  );
}

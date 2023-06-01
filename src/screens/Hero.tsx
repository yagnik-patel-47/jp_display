import Image from "next/image";
import HeroImg from "../assets/hero.webp";
import {
  ArrowLongRightIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import {
  m,
  LazyMotion,
  stagger,
  useAnimate,
  domAnimation,
} from "framer-motion";

const Hero = () => {
  const colors = [
    "#f24236", // orange
    "#213371", // navy
    "#e7065e", // hot pink
    "#ffd767", // yellow
  ];
  const h1text = "Experience the";
  const h2text = "Magic of Japan";

  const [scope, animteLinks] = useAnimate();
  const [h1scope, animteH1] = useAnimate();
  const [h2scope, animteH2] = useAnimate();

  useEffect(() => {
    animteH1(
      "span",
      {
        color: [...colors, "#fff"],
        scale: [1.1, 1, 1.05, 1, 1, 1, 1, 1],
        opacity: [0, 1, 1, 1, 1, 1, 1],
      },
      { delay: stagger(0.1) }
    );
    setTimeout(
      () =>
        animteH2(
          "span",
          {
            color: [...colors, "#c0e472"],
            scale: [1.1, 1, 1.05, 1, 1, 1, 1, 1],
            opacity: [0, 1, 1, 1, 1, 1, 1],
          },
          { delay: stagger(0.1) }
        ),
      1000
    );
    animteLinks("a", { opacity: 1 }, { duration: 0.4, delay: stagger(0.2) });
  }, []);
  return (
    <main className="flex min-h-screen text-white flex-col px-8 md:px-24 lg:px-32 xl:px-40 relative pb-16">
      <Image
        src={HeroImg}
        alt="temple gate"
        fill
        className="object-cover absolute object-[40%_60%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/20"></div>
      <div className="flex flex-col justify-between h-full z-10 flex-1">
        <span></span>
        <span></span>
        <div className="flex flex-col space-y-8">
          <LazyMotion features={domAnimation}>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-2 px-4 font-japanese font-medium text-sm md:text-base rounded-full bg-white/30 text-white w-fit"
            >
              自然と文化がひとつになる場所
            </m.p>
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              ref={h1scope}
              className="font-decorative text-[8vw] leading-none md:leading-normal sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            >
              {h1text.split("").map((letter, index) =>
                letter !== " " ? (
                  <span className="inline-block" key={index}>
                    {letter}
                  </span>
                ) : (
                  <span key={index} className="inline-block">
                    &nbsp;
                  </span>
                )
              )}
            </m.h1>
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              ref={h2scope}
              className="font-decorative text-[10vw] leading-none md:leading-normal sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#c0e472]"
            >
              {h2text.split("").map((letter, index) =>
                letter !== " " ? (
                  <span className="inline-block" key={index}>
                    {letter}
                  </span>
                ) : (
                  <span key={index} className="inline-block">
                    &nbsp;
                  </span>
                )
              )}
            </m.h1>
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-fit group items-center space-x-3 flex py-3 px-8 lg:py-4 lg:px-12 rounded-full bg-white text-neutral-900 lg:text-lg"
              onClick={() => {
                try {
                  document.documentElement.requestFullscreen();
                } catch {
                  alert(
                    "Sorry can't fullscreen right now! please do it mannualy"
                  );
                }
              }}
            >
              <span>Get Immersive</span>{" "}
              <ArrowLongRightIcon className="w-6 h-6 transition group-hover:translate-x-2" />
            </m.button>
          </LazyMotion>
        </div>
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-12 lg:items-center">
            <LazyMotion features={domAnimation}>
              {/* Comp */}
              <m.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.25,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="flex space-x-6 items-center rounded-2xl backdrop-brightness-[0.4] p-4"
              >
                <div className="p-4 bg-white/30 rounded-full">
                  <ArrowPathRoundedSquareIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col text-xs lg:text-base">
                  <p>Provides a visual representation of</p>
                  <p>destinations, attractions and activites.</p>
                </div>
              </m.div>
              {/* Comp */}
              <m.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="flex space-x-6 items-center rounded-2xl backdrop-brightness-[0.4] p-4"
              >
                <div className="p-4 bg-white/30 rounded-full">
                  <UserIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col text-xs lg:text-base">
                  <p>Provides travelers with more accurate and</p>
                  <p>reliable perspective of the destination.</p>
                </div>
              </m.div>
            </LazyMotion>
          </div>
          <div
            ref={scope}
            className="lg:flex hidden flex-col justify-center space-y-6"
          >
            <LazyMotion features={domAnimation}>
              <m.a
                initial={{ opacity: 0 }}
                className="inline-block p-2 bg-white/30 rounded-full"
                href="https://twitter.com/yagnik_pt"
                aria-label="twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                  />
                </svg>
              </m.a>
              <m.a
                initial={{ opacity: 0 }}
                className="inline-block p-2 bg-white/30 rounded-full"
                href="https://instagram.com/yagnik._._.patel"
                aria-label="instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                  />
                </svg>
              </m.a>
              <m.a
                initial={{ opacity: 0 }}
                className="inline-block p-2 bg-white/30 rounded-full"
                href="mailto:yagnik47.dev@gmail.com"
                aria-label="mail"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z"
                    />
                    <path
                      fill="currentColor"
                      d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z"
                    />
                  </g>
                </svg>
              </m.a>
            </LazyMotion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

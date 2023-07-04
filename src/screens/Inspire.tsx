"use client"

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import Slider1 from "../assets/slider_1.webp"
import Slider2 from "../assets/slider_2.webp"
import Slider3 from "../assets/slider_3.webp"
import Slider4 from "../assets/slider_4.webp"
import Slider5 from "../assets/slider_5.webp"
import Reason1 from "../assets/reason_1.webp"
import Reason2 from "../assets/reason_2.webp"
import Reason3 from "../assets/reason_3.webp"
import Reason4 from "../assets/reason_4.webp"
import Reason5 from "../assets/reason_5.webp"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const Inspire = () => {
  const hiddenMask =
    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)"
  const visibleMask =
    "linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 0%)"
  const exitMask =
    "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)"
  const [currentOpen, setCurrentOpen] = useState(1)
  const reasonImages = [Reason1, Reason2, Reason3, Reason4, Reason5]
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderImages = [
    { key: "0", image: Slider1 },
    { key: "1", image: Slider2 },
    { key: "2", image: Slider3 },
    { key: "3", image: Slider4 },
    { key: "4", image: Slider5 },
  ]
  const [currentSliders, setCurrentSliders] = useState([
    { key: "0", image: Slider1 },
    { key: "1", image: Slider2 },
    { key: "2", image: Slider3 },
  ])

  const updateSliderIndex = (mode: "increase" | "decrease") => {
    if (mode === "increase" && sliderIndex < 4) {
      setSliderIndex(sliderIndex + 1)
    } else if (mode === "increase" && sliderIndex === 4) {
      setSliderIndex(0)
    } else if (mode === "decrease" && sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1)
    } else {
      setSliderIndex(4)
    }
  }

  useEffect(() => {
    if (sliderIndex === 3) {
      setCurrentSliders([sliderImages[3], sliderImages[4], sliderImages[0]])
    } else if (sliderIndex === 4) {
      setCurrentSliders([sliderImages[4], sliderImages[0], sliderImages[1]])
    } else {
      setCurrentSliders([
        sliderImages[sliderIndex],
        sliderImages[sliderIndex + 1],
        sliderImages[sliderIndex + 2],
      ])
    }
  }, [sliderIndex])

  return (
    <section
      id="inspire"
      className="flex flex-col items-center py-24 px-8 md:px-24 xl:px-32 space-y-24"
    >
      <div className="flex justify-around w-full flex-col lg:flex-row space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col space-y-8">
            <span className="font-japanese font-medium text-2xl">鼓舞する</span>
            <h2 className="font-decorative font-bold text-4xl md:text-5xl">
              Get Inspired
            </h2>
            <div className="text-neutral-800">
              <p>Easing the impact of tourism on our planet,</p>
              <p>through sustainable and regenerative tourism.</p>
            </div>
          </div>
          <div className="space-x-3 flex mt-12 lg:mt-32">
            <button
              onClick={() => updateSliderIndex("increase")}
              className="p-4 bg-lime-300 rounded-full"
            >
              <ArrowLongLeftIcon className="w-7 h-7" />
            </button>
            <button
              onClick={() => updateSliderIndex("decrease")}
              className="p-4 bg-lime-300 rounded-full"
            >
              <ArrowLongRightIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
        <div className="flex space-x-2 md:space-x-4 xl:space-x-8 items-end">
          {currentSliders.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{
                maskImage: hiddenMask,
                WebkitMaskImage: hiddenMask,
              }}
              whileInView={{
                maskImage: visibleMask,
                WebkitMaskImage: visibleMask,
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: index * 0.25,
              }}
              viewport={{ once: true }}
            >
              <Image
                src={image.image}
                alt=""
                className={`${index === 2 ? "xl:w-44 w-28" : "xl:w-72 w-48"} ${
                  index === 0
                    ? "aspect-[7.5/16]"
                    : index === 1
                    ? "aspect-[9/16]"
                    : "aspect-[7/16]"
                } object-cover h-auto origin-left`}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <h1 className="lg:text-7xl text-3xl text-center text-[#141416] font-bold">
        Reason To Visit Japan
      </h1>
      <h2 className="lg:text-3xl text-2xl !mt-5 font-medium font-japanese">
        日本を訪問
      </h2>
      <div className="flex justify-around relative w-full flex-col lg:flex-row">
        <div>
          <AnimatePresence mode="popLayout">
            {reasonImages.map(
              (image, index) =>
                index + 1 === currentOpen && (
                  <motion.div
                    key={index}
                    className="overflow-hidden"
                    initial={{
                      maskImage: hiddenMask,
                      WebkitMaskImage: hiddenMask,
                    }}
                    whileInView={{
                      maskImage: visibleMask,
                      WebkitMaskImage: visibleMask,
                    }}
                    exit={{
                      maskImage: exitMask,
                      WebkitMaskImage: exitMask,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={image}
                      alt="A place in japan"
                      priority
                      className="w-[40rem] object-cover aspect-[1.1/1] rounded-md"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex space-x-8">
          <div className="h-full inline-block w-1 bg-neutral-300"></div>
          <motion.div className="flex flex-col space-y-10 py-8">
            <motion.div className="flex flex-col space-y-2 items-start">
              <motion.button
                initial={false}
                onClick={() => setCurrentOpen(1)}
                className={`font-medium relative ${
                  currentOpen === 1 ? "text-3xl" : "text-2xl"
                }`}
              >
                {currentOpen === 1 && (
                  <div className="absolute -left-9 h-full w-1 bg-black"></div>
                )}
                Festivals
              </motion.button>
              <AnimatePresence initial={false}>
                {currentOpen === 1 && (
                  <motion.p
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    className="max-w-md lg:text-lg"
                  >
                    Japan is renowned for its enchanting festivals, where
                    ancient traditions come alive in a whirlwind of colors,
                    music, and captivating rituals. Matsuri, or traditional
                    festivals, are an integral part of Japanese culture,
                    offering a glimpse into the nation's history, spirituality,
                    and communal spirit.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex flex-col space-y-2 items-start">
              <motion.button
                onClick={() => setCurrentOpen(2)}
                className={`font-medium relative ${
                  currentOpen === 2 ? "text-3xl" : "text-2xl"
                }`}
              >
                {currentOpen === 2 && (
                  <div className="absolute -left-9 h-full w-1 bg-black"></div>
                )}
                Art and Artists
              </motion.button>
              <AnimatePresence>
                {currentOpen === 2 && (
                  <motion.p
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    style={{ overflow: "hidden" }}
                    className="max-w-md lg:text-lg"
                  >
                    Japan's manga and anime industry has left an indelible mark
                    on popular culture worldwide. Artists like Hayao Miyazaki,
                    the visionary behind Studio Ghibli, have shaped the
                    landscape of storytelling, captivating audiences with their
                    imaginative narratives and profound themes.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex flex-col space-y-2 items-start">
              <motion.button
                onClick={() => setCurrentOpen(3)}
                className={`font-medium relative ${
                  currentOpen === 3 ? "text-3xl" : "text-2xl"
                }`}
              >
                {currentOpen === 3 && (
                  <div className="absolute -left-9 h-full w-1 bg-black"></div>
                )}
                The Culture
              </motion.button>
              <AnimatePresence>
                {currentOpen === 3 && (
                  <motion.p
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    style={{ overflow: "hidden" }}
                    className="max-w-md lg:text-lg"
                  >
                    Japanese culture is a rich tapestry that seamlessly weaves
                    together tradition, aesthetics, and artistic expression.
                    With a history spanning centuries, Japan has nurtured an
                    array of artistic disciplines that continue to captivate the
                    world. One of the most prominent art forms is Ikebana, the
                    elegant practice of flower arrangement.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex flex-col space-y-2 items-start">
              <motion.button
                onClick={() => setCurrentOpen(4)}
                className={`font-medium relative ${
                  currentOpen === 4 ? "text-3xl" : "text-2xl"
                }`}
              >
                {currentOpen === 4 && (
                  <div className="absolute -left-9 h-full w-1 bg-black"></div>
                )}
                Peace and Quiet
              </motion.button>
              <AnimatePresence>
                {currentOpen === 4 && (
                  <motion.p
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    style={{ overflow: "hidden" }}
                    className="max-w-md lg:text-lg"
                  >
                    Japan's landscapes are a harmonious blend of breathtaking
                    natural beauty and serene tranquility, offering a respite
                    from the bustling urban centers. From the majestic peaks of
                    the Japanese Alps to the peaceful shores of remote islands,
                    the country boasts a diverse range of awe-inspiring vistas.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex flex-col space-y-2 items-start">
              <motion.button
                onClick={() => setCurrentOpen(5)}
                className={`font-medium relative ${
                  currentOpen === 5 ? "text-3xl" : "text-2xl"
                }`}
              >
                {currentOpen === 5 && (
                  <div className="absolute -left-9 h-full w-1 bg-black"></div>
                )}
                Ease of Travel
              </motion.button>
              <AnimatePresence>
                {currentOpen === 5 && (
                  <motion.p
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    style={{ overflow: "hidden" }}
                    className="max-w-md lg:text-lg"
                  >
                    Traveling in Japan is a remarkably easy and efficient
                    experience, thanks to the country's well-developed
                    infrastructure and exceptional transportation systems. From
                    the moment you arrive at one of Japan's modern and
                    well-connected airports, you'll find a multitude of options
                    to explore the country with ease.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Inspire

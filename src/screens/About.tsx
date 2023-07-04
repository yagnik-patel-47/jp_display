"use client"

import Image from "next/image"
import About1 from "../assets/about_1.webp"
import About2 from "../assets/about_2.webp"
import About3 from "../assets/about_3.webp"
import About4 from "../assets/about_4.webp"
import About5 from "../assets/about_5.webp"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const About = () => {
  const images = [About1, About2, About3, About4, About5]
  const letters = ["J", "A", "P", "A", "N"]
  let mobile = useMediaQuery({ query: "(max-width: 762px)" })
  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 mt-16 px-8 md:px-24 lg:px-32 space-y-12 lg:space-y-24"
    >
      <h1 className="lg:text-7xl text-4xl text-[#141416] font-bold">About</h1>
      <h2 className="lg:text-3xl text-2xl !mt-5 font-medium font-japanese">
        日本
      </h2>
      <div className="flex space-x-1 lg:space-x-4">
        <LazyMotion features={domAnimation}>
          {images.map((image, index) => (
            <m.div
              key={index}
              whileInView={
                !mobile
                  ? {
                      y: index === 3 || index === 1 ? 48 : index === 2 ? 96 : 0,
                    }
                  : {
                      y: index === 3 || index === 1 ? 32 : index === 2 ? 64 : 0,
                    }
              }
              transition={{
                duration: 1,
                delay:
                  index === 3 || index === 1 ? 0.5 : index === 2 ? 0.25 : 0,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true }}
              className={`relative`}
            >
              <Image
                src={image}
                alt="place"
                className="w-60 h-auto aspect-[9/16]"
              />
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-b bg-black/20"
              ></m.div>
              <m.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 + index * 0.25 }}
                viewport={{ once: true }}
                className="absolute text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white/80 font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {letters[index]}
              </m.span>
            </m.div>
          ))}
        </LazyMotion>
      </div>
      <p className="lg:!mt-48 !mt-32 lg:max-w-7xl font-medium text-neutral-900 lg:text-lg text-center">
        <q>
          Japan, an enchanting archipelago in East Asia, is a captivating blend
          of ancient traditions and cutting-edge innovation. Known as the Land
          of the Rising Sun, Japan is a nation that seamlessly blends its rich
          history with a forward-thinking mindset. With a population renowned
          for their diligence, discipline, and respect, Japanese society
          reflects a harmonious balance between tradition and modernity.
        </q>
      </p>
    </section>
  )
}

export default About

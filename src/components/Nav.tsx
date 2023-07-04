"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion"
import {
  MusicalNoteIcon,
  NoSymbolIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid"

const MXMarkIcon = m(XMarkIcon)
const MBars2Icon = m(Bars2Icon)

const Nav = () => {
  const [blurNav, setBlurNav] = useState(false)
  const [mNavOpen, setMNavOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const musicRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBlurNav(true)
        } else {
          setBlurNav(false)
        }
      })
    }
  }, [])
  useEffect(() => {
    if (musicPlaying) {
      musicRef.current?.load()
      musicRef.current?.play()
    } else {
      musicRef.current?.pause()
    }
  }, [musicPlaying])
  return (
    <LazyMotion features={domAnimation}>
      <audio ref={musicRef} src="/music/in_your_arms.mp3"></audio>
      <m.nav
        className={`text-white px-8 md:px-24 lg:px-40 flex flex-col w-full fixed top-0 transition-all duration-300 z-20 ${
          blurNav || mNavOpen ? "translucent_nav py-4" : "solid_nav py-10"
        }`}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
      >
        <div className="flex items-center w-full justify-between">
          <a
            href="/#"
            className="font-decorative font-bold text-2xl lg:text-4xl"
          >
            JAPAN
          </a>
          <div className="hidden lg:flex text-neutral-200 space-x-16 font-medium items-center text-lg uppercase">
            <a href="#about">About</a>
            <a href="#inspire">Inspiration</a>
            <a href="#places">Places</a>
            <a href="#booktrip">Book a trip</a>
          </div>
          <button
            onClick={() =>
              musicPlaying ? setMusicPlaying(false) : setMusicPlaying(true)
            }
            className="border-2 hidden font-medium text-lg border-white rounded-full px-6 py-2 hover:bg-white hover:text-neutral-900 transition lg:flex space-x-2 items-center"
          >
            <span>Music</span>
            {musicPlaying ? (
              <MusicalNoteIcon className="w-6 h-6" />
            ) : (
              <NoSymbolIcon className="w-6 h-6" />
            )}
          </button>
          <button
            className="p-2 cursor-pointer lg:hidden"
            aria-label="open nav"
            onClick={() => setMNavOpen(!mNavOpen)}
          >
            <AnimatePresence mode="popLayout">
              {!mNavOpen ? (
                <MBars2Icon
                  variants={{
                    visible: { rotate: 0, opacity: 1 },
                    hidden: { rotate: 180, opacity: 0 },
                  }}
                  animate="visible"
                  initial="hidden"
                  exit="hidden"
                  className="h-7 w-7"
                />
              ) : (
                <MXMarkIcon
                  variants={{
                    visible: { rotate: 0, opacity: 1 },
                    hidden: { rotate: 180, opacity: 0 },
                  }}
                  animate="visible"
                  initial="hidden"
                  exit="hidden"
                  className="h-7 w-7"
                />
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {mNavOpen && (
            <m.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              className="flex lg:hidden flex-col overflow-hidden"
            >
              <div className="flex flex-col py-8 text-neutral-200 space-y-4 font-medium uppercase">
                <a href="#about">About</a>
                <a href="#inspire">Inspiration</a>
                <a href="#places">Places</a>
                <a href="#booktrip">Book a trip</a>
              </div>
              <button
                onClick={() =>
                  musicPlaying ? setMusicPlaying(false) : setMusicPlaying(true)
                }
                className="border-2 font-medium border-white rounded-full px-6 py-2 hover:bg-white hover:text-neutral-900 w-fit transition flex space-x-2 items-center"
              >
                <span>Music</span>
                {musicPlaying ? (
                  <MusicalNoteIcon className="w-6 h-6" />
                ) : (
                  <NoSymbolIcon className="w-6 h-6" />
                )}
              </button>
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>
    </LazyMotion>
  )
}

export default Nav

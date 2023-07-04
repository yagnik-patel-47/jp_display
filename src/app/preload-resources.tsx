"use client"
import ReactDOM from "react-dom/client"
import HeroImg from "../assets/hero.webp"
import Slider4 from "../assets/slider_4.webp"
import Slider5 from "../assets/slider_5.webp"
import Reason1 from "../assets/reason_1.webp"
import Reason2 from "../assets/reason_2.webp"
import Reason3 from "../assets/reason_3.webp"
import Reason4 from "../assets/reason_4.webp"
import Reason5 from "../assets/reason_5.webp"

export function PreloadResources() {
  const head = ReactDOM.createRoot(document.head)

  head.render(
    <link rel="preload" href={HeroImg.src} as="image" imageSizes="100vw" />
  )
  head.render(
    <link rel="preload" href={Reason1.src} as="image" imageSizes="80vw" />
  )
  head.render(
    <link rel="preload" href={Reason2.src} as="image" imageSizes="80vw" />
  )
  head.render(
    <link rel="preload" href={Reason3.src} as="image" imageSizes="80vw" />
  )
  head.render(
    <link rel="preload" href={Reason4.src} as="image" imageSizes="80vw" />
  )
  head.render(
    <link rel="preload" href={Reason5.src} as="image" imageSizes="80vw" />
  )
  head.render(
    <link rel="preload" href={Slider4.src} as="image" imageSizes="30vw" />
  )
  head.render(
    <link rel="preload" href={Slider5.src} as="image" imageSizes="30vw" />
  )
  head.render(
    <link rel="preload" href={"/book-bg.webp"} as="image" imageSizes="80vw" />
  )

  return null
}

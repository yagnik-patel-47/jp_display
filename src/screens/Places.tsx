import galleryData from "@/lib/galleryData";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const MImage = motion(Image);

const Places = () => {
  return (
    <section
      id="places"
      className="text-white bg-[#131517] px-12 md:px-24 w-full py-16 overflow-x-hidden"
    >
      {galleryData.map((place) => (
        <ImageShow
          key={place.title}
          title={place.title}
          jTitle={place.jTitle}
          description={place.description}
          images={place.images}
        />
      ))}
    </section>
  );
};

export default Places;

const ImageShow = ({
  title,
  jTitle,
  images,
  description,
}: {
  title: string;
  jTitle: string;
  images: StaticImageData[];
  description: string;
}) => {
  let mobile = useMediaQuery({ query: "(max-width: 762px)" });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const negetiveRotate = useTransform(scrollYProgress, [0, 1], ["0", "-2deg"]);
  const posetiveRotate = useTransform(scrollYProgress, [0, 1], ["0", "2deg"]);
  const negetiveX = useTransform(
    scrollYProgress,
    !mobile ? [0, 0.8] : [0.4, 0.9],
    !mobile ? [-100, -600] : [-50, -350]
  );
  const posetiveX = useTransform(
    scrollYProgress,
    !mobile ? [0, 0.8] : [0.4, 0.9],
    !mobile ? [100, 600] : [50, 350]
  );
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const negSpring = useSpring(negetiveX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const posSpring = useSpring(posetiveX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(scrollYProgress.get());
    });
  }, []);

  return (
    <div
      ref={ref}
      className="lg:min-h-screen py-52 relative flex justify-center items-center"
    >
      <div className="flex flex-col space-y-4 items-center">
        <motion.h1
          style={{ opacity, scale }}
          className="lg:text-7xl text-4xl font-bold font-decorative"
        >
          {title}
        </motion.h1>
        <motion.h2
          style={{ opacity, scale }}
          className="font-japanese font-medium text-2xl"
        >
          {jTitle}
        </motion.h2>
        <motion.p
          style={{ opacity, scale }}
          className="lg:text-lg max-w-xl text-center text-neutral-200"
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        className="absolute z-[2]"
        style={{ x: negSpring, rotate: negetiveRotate }}
      >
        <MImage
          alt={title}
          src={images[0]}
          className="lg:w-[30vw] w-96 aspect-[1/1.25] object-cover rounded-3xl h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ x: posSpring, rotate: posetiveRotate }}
      >
        <MImage
          src={images[1]}
          alt={title}
          className="lg:w-[30vw] w-96 aspect-[1/1.25] object-cover rounded-3xl h-auto"
        />
      </motion.div>
    </div>
  );
};

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@assets/generated_images/cafe_storefront_exterior.png";
import img2 from "@assets/generated_images/barista_pouring_coffee.png";
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png";
import img4 from "@assets/generated_images/people_enjoying_coffee.png";

const images = [img1, img2, img3, img4, img1, img2];

export function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress to horizontal movement
  // We want to move the gallery leftwards as we scroll down
  // The '100vw' is a rough estimate, we'll refine it to ensure it scrolls the full width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Header Content - Absolute positioned to stay visible or move differently if desired */}
        <div className="absolute top-12 left-8 md:top-24 md:left-24 z-10 mix-blend-difference text-white pointer-events-none">
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            The<br/>Space
          </h2>
          <p className="mt-4 font-mono text-sm md:text-lg max-w-xs opacity-80">
            A curated environment for thoughtful moments.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-4 md:gap-12 pl-[10vw] md:pl-[40vw]">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative h-[50vh] w-[300px] md:h-[70vh] md:w-[500px] flex-shrink-0 overflow-hidden rounded-none"
            >
              <motion.img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/80 bg-black/50 px-2 py-1 backdrop-blur-sm">
                0{i + 1} — VIEW
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

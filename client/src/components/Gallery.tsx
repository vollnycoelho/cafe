import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@assets/generated_images/cafe_storefront_exterior.png";
import img2 from "@assets/generated_images/barista_pouring_coffee.png";
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png";
import img4 from "@assets/generated_images/people_enjoying_coffee.png";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl text-primary font-black uppercase tracking-tighter mb-4"
            >
              The Space
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-muted-foreground text-lg max-w-md"
            >
              A fluid sanctuary designed for creativity, conversation, and calm.
            </motion.p>
          </div>
          <div className="hidden md:block font-mono text-xs text-primary/50 tracking-widest uppercase">
            Scroll to Experience
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 mt-12">
            <div className="relative overflow-hidden rounded-[2rem] h-[400px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={images[0]} alt="Cafe interior" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] h-[300px] shadow-lg -ml-4 z-10">
              <img src={images[4]} alt="Coffee detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-[2rem] h-[350px] shadow-xl hover:scale-105 transition-transform duration-500">
              <img src={images[1]} alt="Barista" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] h-[450px] shadow-2xl border-4 border-white">
              <img src={images[5]} alt="Food spread" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-8 mt-24">
            <div className="relative overflow-hidden rounded-[2rem] h-[500px] shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img src={images[2]} alt="Table setting" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] h-[300px] shadow-lg ml-8">
              <img src={images[6]} alt="Atmosphere" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

           {/* Column 4 */}
           <motion.div style={{ y: y4 }} className="flex flex-col gap-8 hidden lg:flex">
            <div className="relative overflow-hidden rounded-[2rem] h-[300px] shadow-xl mt-12">
              <img src={images[3]} alt="Cafe vibes" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] h-[400px] shadow-2xl -ml-6 z-10 border-4 border-white">
              <img src={images[7]} alt="People" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import img1 from "@assets/generated_images/cafe_storefront_exterior.png"
import img2 from "@assets/generated_images/barista_pouring_coffee.png"
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png"
import img4 from "@assets/generated_images/people_enjoying_coffee.png"

const images = [img1, img2, img3, img4, img1, img2, img3, img4]

const container = ref<HTMLElement | null>(null)
const { y } = useScroll(window)
const { width } = useWindowSize()

// Disable parallax on mobile/tablet (width < 1024px) for better UX
const isDesktop = computed(() => width.value >= 1024)

const y1 = computed(() => isDesktop.value ? `translateY(${y.value * -0.1}px)` : 'none')
const y2 = computed(() => isDesktop.value ? `translateY(${y.value * -0.25}px)` : 'none')
const y3 = computed(() => isDesktop.value ? `translateY(${y.value * -0.15}px)` : 'none')
const y4 = computed(() => isDesktop.value ? `translateY(${y.value * -0.35}px)` : 'none')
</script>

<template>
  <section ref="container" class="relative py-12 md:py-32 bg-white min-h-[100vh] lg:min-h-[200vh] overflow-hidden">
    
    <!-- Sticky Header -->
    <div class="sticky top-12 z-50 px-4 md:px-12 mb-12 md:mb-32 mix-blend-exclusion text-white pointer-events-none">
      <h2 
        class="text-[15vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        The<br/>Space
      </h2>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 w-full">
        
        <!-- Column 1 -->
        <div :style="{ transform: y1 }" class="flex flex-col gap-8 md:gap-32 transition-transform duration-75 ease-out will-change-transform">
          <div class="relative h-[400px] md:h-[60vh] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <img :src="images[0]" class="w-full h-full object-cover" alt="Gallery 1" />
          </div>
          <div class="relative h-[300px] md:h-[40vh] w-[100%] md:w-[120%] md:-ml-[10%] rounded-[2rem] md:rounded-full overflow-hidden shadow-xl border-4 md:border-8 border-white z-10">
             <img :src="images[4]" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 2" />
          </div>
        </div>

        <!-- Column 2 -->
        <div :style="{ transform: y2 }" class="flex flex-col gap-8 md:gap-48 md:pt-48 transition-transform duration-75 ease-out will-change-transform">
           <div class="relative h-[350px] md:h-[45vh] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-1 md:rotate-3">
            <img :src="images[1]" class="w-full h-full object-cover scale-110" alt="Gallery 3" />
          </div>
          <div class="relative h-[500px] md:h-[70vh] w-[100%] md:w-[110%] md:-ml-[5%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
            <img :src="images[5]" class="w-full h-full object-cover" alt="Gallery 4" />
          </div>
        </div>

        <!-- Column 3 -->
        <div :style="{ transform: y3 }" class="flex flex-col gap-8 md:gap-24 md:pt-24 transition-transform duration-75 ease-out will-change-transform">
           <div class="relative h-[450px] md:h-[65vh] w-[100%] md:w-[110%] md:-ml-[5%] rounded-[2rem] overflow-hidden shadow-2xl -rotate-1 md:-rotate-2 z-10">
            <img :src="images[2]" class="w-full h-full object-cover" alt="Gallery 5" />
          </div>
           <div class="relative h-[250px] md:h-[30vh] w-[80%] ml-[10%] rounded-full overflow-hidden shadow-lg border-[8px] md:border-[12px] border-white z-30">
            <img :src="images[6]" class="w-full h-full object-cover" alt="Gallery 6" />
          </div>
        </div>

        <!-- Column 4 -->
        <div :style="{ transform: y4 }" class="flex md:hidden lg:flex flex-col gap-8 md:gap-40 md:pt-[40vh] transition-transform duration-75 ease-out will-change-transform">
          <div class="relative h-[300px] md:h-[40vh] w-full rounded-[2rem] overflow-hidden shadow-xl">
             <img :src="images[3]" class="w-full h-full object-cover" alt="Gallery 7" />
          </div>
           <div class="relative h-[400px] md:h-[55vh] w-[100%] md:w-[140%] md:-ml-[40%] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white z-20">
             <img :src="images[7]" class="w-full h-full object-cover" alt="Gallery 8" />
          </div>
        </div>

      </div>
    </div>

    <!-- Deep Background Elements -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />
    
  </section>
</template>

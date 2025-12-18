<script setup>
const location = "Bloom & Brew, survey no. 199/1 boura vaddo, Assagao, Assagao, Goa 403507"
const directLink = "https://maps.app.goo.gl/GzqYFitxi2TX3PCa7"
const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=15.5751,73.8376&zoom=16&size=600x400&markers=color:red%7C15.5751,73.8376&key=AIzaSyB41DaxN4lrWGV4sUJbu9nE56sFuCQD8-E`
</script>

<template>
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black uppercase mb-4 text-primary">
          Find Us
        </h2>
        <div class="w-24 h-1 bg-accent mx-auto" />
      </div>

      <div class="max-w-2xl mx-auto">
        <a
          :href="directLink"
          target="_blank"
          rel="noopener noreferrer"
          class="block relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow"
          style="aspect-ratio: 16/9"
        >
          <img 
            :src="staticMapUrl"
            alt="Bloom & Brew Location Map"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
            <div class="bg-white/90 px-6 py-3 rounded-full font-bold text-primary hover:bg-white transition-colors">
              Open Full Map
            </div>
          </div>
        </a>
        <div class="text-center mt-8">
          <p class="font-mono text-sm text-primary/70">
            {{ location }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

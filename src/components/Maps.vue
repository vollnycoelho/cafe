<script setup>
const location = "Bloom & Brew, survey no. 199/1 boura vaddo, Assagao, Assagao, Goa 403507"
const directLink = "https://maps.app.goo.gl/GzqYFitxi2TX3PCa7"
// Using search-based URL that looks up the cafe by name and location
const embedUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DaxN4lrWGV4sUJbu9nE56sFuCQD8-E&q=Bloom+and+Brew,+survey+no+199/1+boura+vaddo,+Assagao,+Goa+403507"
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
        <div class="relative rounded-2xl overflow-hidden shadow-2xl" style="aspect-ratio: 16/9">
          <iframe
            :src="embedUrl"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="text-center mt-8">
          <p class="font-mono text-sm text-primary/70">
            {{ location }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

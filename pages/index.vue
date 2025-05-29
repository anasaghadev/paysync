<template>
  <div>
    <HeroSection />
    <HeroRest />
    <WhyUs />
    <ImageSlider />
    <HowItWorks />
    <MapSection />
    <GetStartedSection />
    <ClientsOpinions />
    <Faq />
    <Footer />
    <PopUp :popUp="true" />
  </div>
</template>

<script setup>
import PopUp from "~/components/popUp.vue";

const popUp = ref(true);
</script>

<style></style>

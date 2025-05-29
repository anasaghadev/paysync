<template>
  <div>
    <Head>
      <title>PaySinc</title>
      <meta
        name="description"
        content="PaySinc is a medical company that helps you a lot."
      />
    </Head>
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
    <PopUp :popUp="popUp" />
  </div>
</template>

<script setup>
import PopUp from "~/components/popUp.vue";

const popUp = storeToRefs(useAuthStore()).popUp;
</script>

<style></style>

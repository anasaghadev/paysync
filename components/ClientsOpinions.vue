<template>
  <div id="feedback" class="map-section py-10">
    <div class="container">
      <h3 class="text-[28px] font-bold mb-5">What Our Clients Say</h3>
      <div
        class="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
      >
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="card rounded-lg bg-[#1E1E1E] py-7 px-10 flex flex-col items-center text-center gap-4"
        >
          <img
            class="w-20 h-[88px] object-cover object-top rounded-lg"
            :src="client.img"
          />
          <h4 class="text-xl lg:text-2xl font-semibold">{{ client.title }}</h4>
          <p class="text-sm lg:text-base font-medium text-font-20">
            {{ client.says }}
          </p>
          <h5 class="text-lg lg:text-xl font-medium">{{ client.name }}</h5>
          <p class="text-font-20 text-sm lg:text-base">{{ client.position }}</p>
          <img :src="client.stars" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const clients = ref([
  {
    img: "/imgs/person1.webp",
    title: "Thanks to PaySinc",
    says: `we’ve expanded our payment options and reduced our processing fees.
            Their support team is top-notch`,
    name: "Mark Johnson",
    position: "Director of E-commerce at ShopSmart",
    stars: "/imgs/stars4_5.png",
  },
  {
    img: "/imgs/person2.webp",
    title: "PaySinc has streamlined our payment processes",
    says: `Minimize transaction failures with automatic failover and retry options, boosting your success rate by up to 20%`,
    name: "Jane Doe",
    position: "CEO of FinTech Solutions",
    stars: "/imgs/stars5.png",
  },
  {
    img: "/imgs/person3.webp",
    title: "As a small business, we needed an efficient payment solution",
    says: `PaySinc not only saved us money but also simplified our processes`,
    name: "Emily Chen",
    position: "Owner of Artisan Goods Co",
    stars: "/imgs/stars5.png",
  },
]);
</script>

<style></style>

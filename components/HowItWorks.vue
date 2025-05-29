<template>
  <div id="how-it-works" class="how-it-works py-10">
    <div class="container">
      <h3 class="text-[28px] font-bold mb-10">How It Works?</h3>
      <div class="timeline space-y-5">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="timeline-block grid grid-cols-9 gap-8 md:gap-[60px]"
        >
          <div
            class="card rounded-lg bg-[#1E1E1E] py-7 px-10 col-span-7 md:col-span-4 mb-5"
          >
            <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
              {{ item.title }}
            </h3>
            <p
              class="text-xs sm:text-sm lg:text-base font-medium text-[#FAFAFACC]"
            >
              {{ item.text }}
            </p>
          </div>
          <div
            class="divider col-span-2 md:col-span-1 h-full flex flex-col items-center"
          >
            <div
              class="number w-12 h-12 aspect-square p-1.5 flex items-center justify-center bg-[#DBEFDCCC] text-secondary-80 text-xl font-medium rounded-full"
            >
              {{ index + 1 }}
            </div>
            <div class="line"></div>
          </div>
          <div class="blank-space col-span-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = ref([
  {
    title: "Sign Up",
    text: "Create your PaySinc account by completing a straightforward registration form.",
  },
  {
    title: "API Integration",
    text: "integrate PaySinc into your existing systems using our easy-to-follow API documentation for seamless connectivity.",
  },
  {
    title: "Configure Payment Settings",
    text: "Customize your payment options, including preferred payment methods and routing configurations, to align with your business needs.",
  },
  {
    title: "Start Processing Payments",
    text: "Begin processing transactions confidently, utilizing our smart routing and failover features to ensure optimal performance and reliability.",
  },
]);
</script>

<style>
.line {
  width: 2px;
  height: 100%;
  background-image: repeating-linear-gradient(
    to bottom,
    white,
    white 50%,
    transparent 50%,
    transparent
  );
  background-size: 25px 25px;
  margin-top: 10px;
}
.timeline-block:nth-child(even) {
  .card {
    order: 2;
  }
  .divider {
    order: 1;
  }
}
@media (max-width: 767px) {
  .timeline-block {
    .card {
      order: 1;
    }
    .divider {
      order: 0;
    }
    .blank-space {
      display: none;
    }
  }
}
</style>

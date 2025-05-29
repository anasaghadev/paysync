<template>
  <div id="faqs" class="faqs py-10">
    <div class="container">
      <h3 class="text-[28px] font-bold mb-10 text-center">
        Frequently Asked Questions
      </h3>
      <div
        class="faqs-container px-1 sm:px-16 md:px-20 lg:px-28 xl:px-40 space-y-5"
      >
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          @click="() => setOpened(index)"
          class="faq bg-[#1E1E1E] rounded-lg cursor-pointer"
        >
          <div class="title py-6 px-10 flex justify-between items-center gap-1">
            <p class="text text-lg lg:text-xl font-semibold">
              {{ faq.question }}
            </p>
            <img
              class="transition-all duration-200"
              :class="index == opened ? 'rotate-180 ease-in' : 'ease-out'"
              src="/imgs/arrow-down.png"
              alt=""
            />
          </div>
          <div
            class="body overflow-hidden transition-all duration-500 max-h-0"
            :class="
              opened == index ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
            "
          >
            <p class="py-4 lg:py-6 px-10 text-font-20 text-lg lg:text-xl">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const opened = ref(-1);
const setOpened = (index) => {
  if (index == opened.value) {
    opened.value = -1;
    return;
  }
  opened.value = index;
};
const faqs = ref([
  {
    question: "What is PaySinc?",
    answer:
      "PaySinc is an innovative payment integration solution that simplifies the way businesses process payments. It offers features like smart routing, failover mechanisms, and support for local payment methods to enhance transaction success rates.",
  },
  {
    question: "How does PaySinc improve payment success rates?",
    answer:
      "PaySinc utilizes intelligent routing algorithms and automatic retry features to minimize transaction failures. By dynamically selecting the best payment routes, it ensures a higher likelihood of successful transactions.",
  },
  {
    question: "What local payment methods does PaySinc support?",
    answer:
      "PaySinc supports a wide range of local payment methods, including mobile wallets, bank transfers, and regional credit cards, allowing businesses to cater to diverse customer preferences and expand their market reach.",
  },
  {
    question: "Is it easy to integrate PaySinc with my existing system?",
    answer:
      "Yes, PaySinc provides comprehensive API documentation and support, making it easy to integrate with your existing systems. The setup process is designed to be user-friendly and efficient.",
  },
  {
    question: "How secure is PaySinc?",
    answer:
      "Security is a top priority for PaySinc. We implement advanced encryption protocols and comply with industry standards to protect sensitive customer data and ensure secure transactions.",
  },
]);
</script>

<style></style>

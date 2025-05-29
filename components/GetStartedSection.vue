<template>
  <div id="get-started" class="get-started-section py-10">
    <div class="container">
      <div class="flex flex-col md:flex-row gap-14 justify-center items-center">
        <div class="img">
          <img
            loading="lazy"
            class="rounded-lg"
            src="/imgs/get-strated.webp"
            alt=""
          />
        </div>
        <div class="text flex flex-col gap-4">
          <h3 class="text-[28px] font-bold">
            Get Started with <span class="text-primary">PaySinc</span> Today
          </h3>
          <p class="text-xl font-medium">
            Simplify your payment integrations and elevate your business
          </p>
          <div class="flex gap-3">
            <NuxtLink
              to="/register"
              class="py-4 px-5 bg-primary rounded-lg text-xl font-medium mt-5"
            >
              Sign Up Now
            </NuxtLink>
            <NuxtLink
              to="/login"
              class="py-4 px-5 bg-transparent border-2 border-primary rounded-lg text-primary text-xl font-medium mt-5"
            >
              Log In
            </NuxtLink>
          </div>
          <p class="text-font-20">
            Join thousands of businesses that trust PaySinc to streamline their
            payment processes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>

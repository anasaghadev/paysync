<template>
  <footer id="footer" class="footer py-10 bg-[#1E1E1E]">
    <div class="container space-y-5">
      <div
        class="part1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <div class="space-y-3">
          <span class="logo flex gap-1 p-3">
            <img src="/imgs/logo.png" alt="" />
            <span class="text-[24px]">PaySync</span>
          </span>
          <p>
            PaySinc is an innovative payment integration solution that
            simplifies transactions for businesses. Our platform enables
            seamless integration with multiple payment processors via a single
            API, optimizing routes and reducing costs.
          </p>
          <button class="py-2 px-7 rounded-lg bg-primary text-xl font-medium">
            Get Started
          </button>
        </div>
        <div class="space-y-3 pt-4">
          <h5 class="font-semibold">Contact us</h5>
          <div class="contacts space-y-5">
            <a class="contact flex gap-2">
              <img src="/imgs/MapPin.svg" class="icon" />
              <p class="text">Syria, Damascus</p>
            </a>
            <a href="mailto:PaySinc@gmail.com" class="contact flex gap-2">
              <img src="/imgs/Envelope.svg" class="icon" />
              <p class="text">PaySinc@gmail.com</p>
            </a>
            <a href="tel:+963980791411" class="contact flex gap-2">
              <img src="/imgs/PhoneCall.svg" class="icon" />
              <p class="text">+963980791411</p>
            </a>
            <a href="tel:+963980791411" class="contact flex gap-2">
              <img src="/imgs/PhoneCall.svg" class="icon" />
              <p class="text">+963980791411</p>
            </a>
          </div>
        </div>
        <div class="space-y-3 pt-4">
          <h5 class="font-semibold">Home</h5>
          <div class="links space-y-2 flex flex-col">
            <a href="#features">Our features</a>
            <a href="#why-us">Why PaySinc?</a>
            <a href="#how-it-works">How it works</a>
            <a href="#local-payments">Local payment methodes</a>
            <a href="#get-started">Get started</a>
            <a href="#feedback">Your feedback</a>
            <a href="#faqs">FAQ</a>
          </div>
        </div>
        <div class="space-y-3 pt-4">
          <h5 class="text-xl">Subcribe to our newsletter</h5>
          <p>
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive offers.
          </p>
          <div class="flex flex-col sm:flex-row gap-1">
            <input
              type="text"
              class="bg-bg-primary placeholder-[#FFFFFF66] rounded-lg py-1.5 px-2.5 grow"
              placeholder="Your email address…"
            />
            <button class="py-2 px-7 bg-primary font-semibold rounded-lg">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <hr class="border-[#56565699]" />
      <div
        class="part2 flex flex-col md:flex-row justify-center md:justify-between gap-5 text-center"
      >
        <p class="rights">
          © 2025
          <a target="_blank" class="text-primary" href="https:anasagha.web.app"
            >Anas Agha</a
          >
          All rights reserved.
        </p>
        <div class="links flex gap-9 justify-center">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style></style>

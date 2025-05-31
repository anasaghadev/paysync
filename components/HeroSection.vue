<template>
  <div
    id="home"
    class="hero-section bg-no-repeat bg-cover bg-center bg-[url(/imgs/hero-bg.webp)] min-h-screen"
  >
    <div class="overlay min-h-screen bg-black/80">
      <header class="p-5">
        <div class="header-content flex justify-between h-[64px] items-center">
          <div class="bar flex gap-1 items-center">
            <span class="logo flex gap-1 p-3">
              <img src="/imgs/logo.png" alt="" />
              <span class="text-xl">PaySync</span>
            </span>
            <span class="w-px h-10 bg-secondary"></span>
          </div>
          <div
            class="links hidden lg:flex items-center justify-center text-base *:py-3 *:px-5"
          >
            <a href="#why-us">Why choose us</a>
            <a href="#studies">Case studies</a>
            <a href="#how-it-works">How it works</a>
            <a href="#local-payments">Local payment methods</a>
            <a href="#get-started">Get Started</a>
            <a href="#footer">Contact us</a>
          </div>
          <div class="mobile-menu block lg:hidden">
            <button class="open" @click="mobileMenu = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE -->
                <path
                  fill="currentColor"
                  d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
                />
              </svg>
            </button>
            <div
              @click="mobileMenu = false"
              class="menu bg-bg-primary fixed top-0 w-xs h-screen z-[999] transition-all duration-300 py-7 px-3"
              :class="mobileMenu ? 'right-0' : '-right-[320px]'"
            >
              <div class="close" @click="mobileMenu = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE -->
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                  />
                </svg>
              </div>
              <div
                class="links flex flex-col text-base pt-3 divide-y divide-secondary-20 *:py-3 *:px-5"
              >
                <a href="#why-us">Why choose us</a>
                <a href="#studies">Case studies</a>
                <a href="#how-it-works">How it works</a>
                <a href="#local-payments">Local payment methods</a>
                <a href="#get-started">Get Started</a>
                <a href="#footer">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="hero-content w-full min-h-[calc(100svh-104px)] flex items-center justify-center px-10 md:px-12 lg:px-16 xl:px-20 py-10 overflow-x-hidden"
      >
        <div
          class="inner-content w-full flex gap-5 flex-col lg:flex-row justify-between lg:items-end"
        >
          <div class="main-text flex flex-col gap-2 items-start">
            <h2 class="text-2xl lg:text-3xl xl:text-[40px] font-medium">
              Revolutionizing Payment <br />
              Integration with
            </h2>
            <h1 class="text-4xl lg:text-5xl xl:text-7xl font-medium">
              PaySinc
            </h1>
            <p class="text-base lg:text-lg xl:text-xl font-medium">
              An intelligent financial solution combining security <br />
              and innovation
            </p>
            <button
              class="bg-gradient-to-r from-primary to-[#204921] font-medium text-base sm:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded shadow-sm shadow-primary"
            >
              Get Started
            </button>
          </div>
          <div
            class="info-boxes flex gap-[20px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] flex-col sm:flex-row"
          >
            <div class="box flex gap-4 md:gap-5 lg:gap-7 xl:gap-9">
              <img
                class="w-[30px] sm:w-[40px] lg:w-[50px] xl:w-[60px]"
                src="/imgs/person.svg"
                alt=""
              />
              <div>
                <p class="text-base sm:text-lg lg:text-xl text-[#CCD6E0]">
                  Users
                </p>
                <p class="text-base sm:text-lg lg:text-xl font-bold">+50</p>
              </div>
            </div>
            <div class="box flex gap-4 md:gap-5 lg:gap-7 xl:gap-9">
              <img
                class="w-[30px] sm:w-[40px] lg:w-[50px] xl:w-[60px]"
                src="/imgs/location.svg"
                alt=""
              />
              <div>
                <p class="text-base sm:text-lg lg:text-xl text-[#CCD6E0]">
                  Locations
                </p>
                <p class="text-base sm:text-lg lg:text-xl font-bold">+30</p>
              </div>
            </div>
            <div class="box flex gap-4 md:gap-5 lg:gap-7 xl:gap-9">
              <img
                class="w-[30px] sm:w-[40px] lg:w-[50px] xl:w-[60px]"
                src="/imgs/servers.svg"
                alt=""
              />
              <div>
                <p class="text-base sm:text-lg lg:text-xl text-[#CCD6E0]">
                  Servers
                </p>
                <p class="text-base sm:text-lg lg:text-xl font-bold">+20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-height pb-28"></div>
    </div>
  </div>
</template>

<script setup>
const mobileMenu = ref(false);
</script>

<style></style>

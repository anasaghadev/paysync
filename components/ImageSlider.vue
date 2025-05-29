<template>
  <div id="studies" class="image-slider">
    <div ref="slider" class="slider">
      <div class="slides" style="--img: url('/imgs/slider1.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">GreenGrocer Delivery</h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Cart Abandonment Reduction: 30% decrease in cart abandonment
                  rates within the first month.
                </li>
                <li>
                  Faster Checkout: Transaction times reduced by 50%, leading to
                  a smoother customer experience.
                </li>
                <li>
                  Increased Payment Options: Added 5 new local payment methods,
                  catering to a broader customer base.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slides" style="--img: url('/imgs/slider2.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">Tech Innovators Inc.</h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Cart Abandonment Reduction: 30% decrease in cart abandonment
                  rates within the first month.
                </li>
                <li>
                  Faster Checkout: Transaction times reduced by 50%, leading to
                  a smoother customer experience.
                </li>
                <li>
                  Increased Payment Options: Added 5 new local payment methods,
                  catering to a broader customer base.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slides" style="--img: url('/imgs/slider3.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">
                Fashion Forward Boutique
              </h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Success Rate Increase: 40% increase in transaction success
                  rates.
                </li>
                <li>
                  Revenue Growth: Achieved a 25% increase in sales during the
                  holiday season compared to the previous year.
                </li>
                <li>
                  Customer Satisfaction: Improved customer feedback, with
                  satisfaction ratings rising from 75% to 92%.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slides" style="--img: url('/imgs/slider1.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">GreenGrocer Delivery</h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Cart Abandonment Reduction: 30% decrease in cart abandonment
                  rates within the first month.
                </li>
                <li>
                  Faster Checkout: Transaction times reduced by 50%, leading to
                  a smoother customer experience.
                </li>
                <li>
                  Increased Payment Options: Added 5 new local payment methods,
                  catering to a broader customer base.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slides" style="--img: url('/imgs/slider2.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">Tech Innovators Inc.</h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Cart Abandonment Reduction: 30% decrease in cart abandonment
                  rates within the first month.
                </li>
                <li>
                  Faster Checkout: Transaction times reduced by 50%, leading to
                  a smoother customer experience.
                </li>
                <li>
                  Increased Payment Options: Added 5 new local payment methods,
                  catering to a broader customer base.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slides" style="--img: url('/imgs/slider3.webp')">
        <div class="content">
          <div class="container flex justify-start items-center h-full">
            <div class="inner-container lg:w-1/2">
              <h2 class="text-[28px] font-bold mb-5">
                Fashion Forward Boutique
              </h2>
              <ul class="list-disc text-xl font-medium">
                <li>
                  Success Rate Increase: 40% increase in transaction success
                  rates.
                </li>
                <li>
                  Revenue Growth: Achieved a 25% increase in sales during the
                  holiday season compared to the previous year.
                </li>
                <li>
                  Customer Satisfaction: Improved customer feedback, with
                  satisfaction ratings rising from 75% to 92%.
                </li>
              </ul>
              <button
                @click="popUp = true"
                class="py-3 px-5 rounded-lg bg-primary text-xl font-medium mt-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btns">
      <span ref="prev" class="prev"></span>
      <span ref="next" class="next"></span>
    </div>
  </div>
</template>

<script setup>
const next = ref(null);
const prev = ref(null);
const slider = ref(null);
const store = useAuthStore();
const popUp = storeToRefs(store).popUp;

onMounted(() => {
  next.value.addEventListener("click", function () {
    let slides = document.querySelectorAll(".slides");
    slider.value.appendChild(slides[0]);
  });
  prev.value.addEventListener("click", function () {
    let slides = document.querySelectorAll(".slides");
    slider.value.prepend(slides[slides.length - 1]);
  });
});
</script>

<style lang="css">
.image-slider {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  position: absolute;
  inset: 0;
  background-color: #ccc;
  /* border-radius: 20px; */
}
.slider .slides {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 260px;
  background: var(--img);
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.slider .slides .content {
  position: relative;
  padding: 40px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* max-width: 600px; */
  transition: 0.3s;
  transition-delay: 0s;
  /* transform: translateY(40px); */
  z-index: 100000;
  opacity: 0;
}
.slider .slides .content .container {
  transform: translateY(40px);
  transition: all 0.5s 0.5s;
}
.slider .slides:nth-child(1) .content .container,
.slider .slides:nth-child(2) .content .container {
  transform: translateY(0px);
}
.slider .slides:nth-child(1),
.slider .slides:nth-child(2) {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  border-radius: 0;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0);
}
.slider .slides:nth-child(1) .content,
.slider .slides:nth-child(2) .content {
  opacity: 1;
  /* transform: translateY(0); */
  transition-delay: 0.5s;
}
.slider .slides:nth-child(3) {
  left: calc(50% + 260px);
  width: 260px;
  height: 320px;
}
.slider .slides:nth-child(4) {
  left: calc(50% + 540px);
}
.slider .slides:nth-child(5) {
  left: calc(50% + 760px);
}
.slider .slides:nth-child(6) {
  left: calc(50% + 1020px);
  opacity: 0;
}
.image-slider .btns {
  position: absolute;
  bottom: 15px;
  display: flex;
  gap: 20px;
}
.image-slider .btns span {
  position: relative;
  width: 50px;
  height: 50px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.image-slider .btns span:active {
  opacity: 0.5;
}
.image-slider .btns span::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-top: 4px solid black;
  border-left: 4px solid black;
  transform: rotate(315deg) translate(2px, 2px);
}
.image-slider .btns span:nth-child(2):before {
  transform: rotate(135deg) translate(2px, 2px);
}

@media (max-width: 1024px) {
  .image-slider {
    min-height: 130vh;
  }
  .slider {
    position: absolute;
    inset: 0;
    background-color: #ccc;
    /* border-radius: 20px; */
  }
  .slider .slides {
    width: 100px;
    height: 100px;
    top: initial;
    bottom: 0px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
  .slider .slides:nth-child(1),
  .slider .slides:nth-child(2) {
    top: initial;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0);
  }
  .slider .slides:nth-child(1) .container,
  .slider .slides:nth-child(2) .container {
    padding-bottom: 160px;
  }
  .slider .slides:nth-child(3) {
    left: 0;
    width: 120px;
    height: 120px;
  }
  .slider .slides:nth-child(4) {
    left: 140px;
  }
  .slider .slides:nth-child(5) {
    left: 260px;
  }
  .slider .slides:nth-child(6) {
    left: 380px;
    opacity: 0;
  }
}
@media (max-width: 767px) {
  .image-slider {
    min-height: 140vh;
  }
}
@media (max-width: 639px) {
  .image-slider {
    min-height: 120vh;
  }
}
</style>

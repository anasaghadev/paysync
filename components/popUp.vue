<template>
  <div
    v-show="popUp"
    @scroll="onScroll"
    ref="scrollContainer"
    class="onscroll fixed inset-0 h-svh overflow-y-auto bg-[#121212] text-center py-10 rounded-2xl"
  >
    <div class="container lg:max-w-[1000px]">
      <button @click="popUp = false" class="back flex gap-2 mb-8">
        <img loading="lazy" src="/imgs/back-arrow.svg" alt="" />
        <p class="text-[28px] font-bold">Back</p>
      </button>
      <div>
        <div class="cards space-y-5">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card bg-[#1E1E1E] p-5 flex flex-col items-center lg:flex-row gap-10 rounded-xl text-start"
          >
            <img
              loading="lazy"
              class="w-[168px] h-[220px] object-cover object-center rounded-lg"
              :src="card.image_url"
              alt=""
            />
            <div class="text">
              <p
                class="title text-xl md:text-2xl lg:text-[28px] text-center lg:text-start font-bold mb-3"
              >
                {{ card.company }}
              </p>
              <ul class="list-disc md:text-lg lg:text-xl font-medium pl-5">
                <li v-for="(item, idx) in card.highlights" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div v-if="loading" class="text-center py-4 text-gray-400">
            Loading...
          </div>
          <div
            v-if="!nextUrl && !loading"
            class="text-center py-4 text-gray-400"
          >
            No more cards.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore();
const popUp = storeToRefs(store).popUp;
const cards = ref([]);
const loading = ref(false);
const nextUrl = ref("https://doctors.sy/dummy-data/paysync/cards/?limit=10");
// const nextUrl = ref(
//   "http://doctors.sy/dummy-data/paysync/cards/?limit=10&offset=10"
// );
const scrollContainer = ref(null);

const fetchCards = async () => {
  if (!nextUrl.value || loading.value) return;
  loading.value = true;
  try {
    const res = await $fetch(nextUrl.value, {
      headers: {
        Authorization: `Bearer ${store.accessToken}`,
      },
    });
    console.log(res);
    cards.value.push(...res.results);
    nextUrl.value = res.next;
  } catch (err) {
    console.error("Failed to load cards:", err);
    //navigateTo("/login");
  } finally {
    loading.value = false;
  }
};
const onScroll = () => {
  const el = scrollContainer.value;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
    fetchCards();
  }
};

onMounted(() => {
  fetchCards();
});
watch(popUp, (val) => {
  if (val) {
    fetchCards();
  }
});
</script>

<style></style>

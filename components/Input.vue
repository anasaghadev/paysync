<template>
  <div class="input space-y-1 flex flex-col">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      class="rounded-xl py-5 px-3 border border-[#F8F7FA59] outline-0"
      :type="type"
      :pattern="label"
      v-model="value"
      required
    />
  </div>
</template>

<script setup>
const value = defineModel();
defineProps(["id", "label", "type"]);
</script>

<style></style>

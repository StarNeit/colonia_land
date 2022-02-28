<template>
  <div class="rounded bg-white rounded-2xl p-4 sm:p-8 shadow-sm">
    <div class="flex justify-center items-end h-28">
      <img
        :src="image"
        alt="vehicule"
      >
    </div>
    <p class="text-center font-bold mb-5 text-font-primary text-xl mb-14">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
